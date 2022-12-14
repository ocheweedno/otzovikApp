import React, { useEffect } from "react";
import { Button, Divider, Steps, Input } from "antd";
import styled from "styled-components";
import { Header } from "../../Typography";
import { useNavigate } from "react-router-dom";
import { useLocalState } from "../../../context/hooks";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ApplyPayment = () => {
  const current = 2;

  const state = useLocalState();
  const { projectForPayment, personInfo } = state;

  const formIds = ["96267607a9857ae", "b93d944a83a9ac1", "f334a093ff4dbfa"];

  const formIdsValue = projectForPayment?.tariffId
    ? formIds[projectForPayment?.tariffId - 1]
    : formIds[0];

  //TODO:вынести отдельно!
  const steps = [
    {
      title: "Введите название проекта",
      content: "",
    },
    {
      title: "Выберете период и тариф",
      content: "",
    },
    {
      title: "Оплата",
      content: (
        <form className="ainoxform">
          <div className="amessage">
            <Input
              style={{ width: "300px" }}
              name="email"
              type="hidden"
              placeholder="email"
              value={personInfo?.email}
            />
            <Input
              className="modal__input"
              name="nazvanie-proekta"
              type="hidden"
              value={projectForPayment?.projectName}
            />
            <Input
              className="modal__input"
              name="idform"
              type="hidden"
              value={formIdsValue}
            />
            <Input
              className="modal__input"
              name="cena"
              type="hidden"
              value={projectForPayment?.price}
            />
            <Input
              className="modal__input"
              name="period"
              type="hidden"
              value={projectForPayment?.period}
            />
          </div>
          <Button
            htmlType="submit"
            className="button button--secondary modal__button"
            type={"primary"}
            style={{ marginTop: "20px" }}
          >
            Перейти к оплате
          </Button>
        </form>
      ),
    },
  ];

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const navigation = useNavigate();

  localStorage.setItem(
    "inserm",
    JSON.stringify({
      isPlatform: true,
      price: projectForPayment?.price,
      period: projectForPayment?.period,
      name: projectForPayment?.projectName,
      tariffId: projectForPayment?.tariffId,
    })
  );

  useEffect(() => {
    if (!projectForPayment) navigation("/client/createproject");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectForPayment]);

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://go.ainox.pro/js/form-scripts_v2.js";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Page>
      <Header>Оплата</Header>
      <Steps current={current} items={items} />
      <Divider />
      <div className="steps-content">{steps[current].content}</div>
      <Divider />
      {current > 0 && (
        <Button
          style={{ width: "100px" }}
          onClick={() => navigation("/client/createproject")}
        >
          Назад
        </Button>
      )}
    </Page>
  );
};

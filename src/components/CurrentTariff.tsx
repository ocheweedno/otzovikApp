import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Select, /* Switch */ } from "antd";
import "./AntSelectCustomStyle.css";
import { TariffItem } from "./TariffItem";
import { Title } from "./Typography";
import { useLocalState } from "../context/hooks";
/* import { TariffSelectionBlock } from "./TariffSelectionBlock"; */

const Wrapper = styled.div`
  display: flex;
  /* align-items: center; */
  grid-gap: 20px;
  margin: 20px 0 30px 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const CurrentTariffSection = styled.div`
  width: 460px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    width: auto;
    display: flex;
    flex-direction: column;
  }
`;
/* const SwitchTariff = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;
`; */

export const CurrentTariff = () => {
  const [value, setValue] = useState("");
  /* const [isSwitchTariff, setIsSwitchTariff] = useState(false); */

  const handleChange = (value: string) => {
    setValue(value);
  };

  const state = useLocalState();

  const { clientProject } = state;

  const listOfProject = clientProject?.map((item) => ({
    value: item.name,
  }));

  useEffect(() => {
    if (listOfProject) {
      setValue(listOfProject[0]?.value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientProject]);

  const currentTariff = clientProject?.find(
    (item) => item.name === value
  )?.tariff;

  return (
    <>
      {!!listOfProject?.length ? (
        <>
          <Title level={5} style={{ fontWeight: "400" }}>
            Ваш текущий тариф по проекту
          </Title>
          <Wrapper>
            <Select
              onChange={handleChange}
              options={listOfProject}
              value={value}
            />
          </Wrapper>
        </>
      ) : (
        <Wrapper>
          <Title level={5}>
            Нет ни одного проекта, создайте его
          </Title>
        </Wrapper>
      )}
      {currentTariff && (
        <>
          <CurrentTariffSection>
            <TariffItem {...currentTariff} />
          </CurrentTariffSection>
          {/*  <SwitchTariff>
            <Title level={5} style={{ fontWeight: "400" }}>
              Сменить тариф
            </Title>
            <Switch onChange={() => setIsSwitchTariff(!isSwitchTariff)} />
          </SwitchTariff>
          {isSwitchTariff && (
            <TariffSelectionBlock />
          )} */}
        </>
      )}
    </>
  );
};

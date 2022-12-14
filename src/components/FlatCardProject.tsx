import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuthCheck } from "../hooks/useAuthCheck";
import { Project } from "../type";
import { getRangeDate } from "../utils/getDate";
import { Title } from "./Typography";

const Panel = styled.div`
  background: #ffffff;
  border-radius: 10px;
  min-height: 80px;
  padding: 12px 20px 12px 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
  :hover {
    background-color: whitesmoke;
  }
`;
const Box = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: block;
  }
`;
const Status = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
const StatusRow = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const FlatCardProject = (project: Project) => {
  const {
    tariff: { start, end },
    statuses,
    id
  } = project;

  const navigation = useNavigate();
  const { role } = useAuthCheck();

  return (
    <>
      <Panel onClick={() => navigation(`/${role}/project/${id}`)}>
        <Box style={{ marginBottom: "15px" }}>
          <Title level={5} style={{ fontWeight: "800" }}>
            {project.name}
          </Title>
          <>{getRangeDate({ start, end })}</>
        </Box>
        <Box>
          <Status>
            <>
              <Title
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#8E8E8E",
                }}
              >
                Опубликовано
              </Title>
              <>&ensp;-&ensp;</>
              <Title
                style={{
                  fontSize: "14px",
                  fontWeight: "800",
                  color: "#1BBD3F",
                }}
              >
                {statuses?.success || 0}
              </Title>
              <>&ensp;|&ensp;</>
            </>
            <>
              <Title
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#8E8E8E",
                }}
              >
                Осталось
              </Title>
              <>&ensp;-&ensp;</>
              <Title
                style={{
                  fontSize: "14px",
                  fontWeight: "800",
                  color: "#8567FF",
                }}
              >
                {statuses?.left || 0}
              </Title>
              <>&ensp;|&ensp;</>
            </>
            <>
              <Title
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#8E8E8E",
                }}
              >
                На модерации
              </Title>
              <>&ensp;-&ensp;</>
              <Title
                style={{
                  fontSize: "14px",
                  fontWeight: "800",
                  color: "#5AA6FF",
                }}
              >
                {statuses?.moderate || 0}
              </Title>
              <>&ensp;|&ensp;</>
            </>
            <>
              <Title
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#8E8E8E",
                }}
              >
                Не прошло
              </Title>
              <>&ensp;-&ensp;</>
              <Title
                style={{
                  fontSize: "14px",
                  fontWeight: "800",
                  color: "#FA7211",
                }}
              >
                {statuses?.reject || 0}
              </Title>
              <>&ensp;|&ensp;</>
            </>
            <>
              <Title
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#8E8E8E",
                }}
              >
                Удалено
              </Title>
              <>&ensp;-&ensp;</>
              <Title
                style={{
                  fontSize: "14px",
                  fontWeight: "800",
                  color: "#FF1E1E",
                }}
              >
                {statuses?.delete || 0}
              </Title>
              <>&ensp;|&ensp;</>
            </>
            <>
              <Title
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#8E8E8E",
                }}
              >
                Всего
              </Title>
              <>&ensp;-&ensp;</>
              <Title style={{ fontSize: "14px", fontWeight: "800" }}>
                {statuses?.all || 0}
              </Title>
              <>&ensp;|&ensp;</>
            </>
          </Status>
          <StatusRow>
            <div>
              <Title
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#8E8E8E",
                }}
              >
                Опубликовано
              </Title>
              <Title
                style={{
                  fontSize: "14px",
                  fontWeight: "800",
                  color: "#1BBD3F",
                }}
              >
                {statuses?.success || 0}
              </Title>
            </div>
            <div>
              <Title
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#8E8E8E",
                }}
              >
                Осталось
              </Title>
              <Title
                style={{
                  fontSize: "14px",
                  fontWeight: "800",
                  color: "#8567FF",
                }}
              >
                {statuses?.left || 0}
              </Title>
            </div>
            <div>
              <Title
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#8E8E8E",
                }}
              >
                На модерации
              </Title>
              <Title
                style={{
                  fontSize: "14px",
                  fontWeight: "800",
                  color: "#5AA6FF",
                }}
              >
                {statuses?.moderate || 0}
              </Title>
            </div>
            <div>
              <Title
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#8E8E8E",
                }}
              >
                Не прошло
              </Title>
              <Title
                style={{
                  fontSize: "14px",
                  fontWeight: "800",
                  color: "#FA7211",
                }}
              >
                {statuses?.reject || 0}
              </Title>
            </div>
            <div>
              <Title
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#8E8E8E",
                }}
              >
                Удалено
              </Title>
              <Title
                style={{
                  fontSize: "14px",
                  fontWeight: "800",
                  color: "#FF1E1E",
                }}
              >
                {statuses?.delete || 0}
              </Title>
            </div>
            <div>
              <Title
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#8E8E8E",
                }}
              >
                Всего
              </Title>
              <Title style={{ fontSize: "14px", fontWeight: "800" }}>
                {statuses?.all || 0}
              </Title>
            </div>
          </StatusRow>
        </Box>
      </Panel>
    </>
  );
};

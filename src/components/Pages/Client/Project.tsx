import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Title, Header } from "../../Typography";
import { DetailsCard } from "../../DetailsCard";
import { ModalBrief } from "../../ModalBrief";
import { TableProject } from "../../Table/TableProject";
import { ArchiveProjectList } from "../../ArchiveProjectList";
import { useLocalState } from "../../../context/hooks";
import { getRangeDate } from "../../../utils/getDate";
import { useGetReviews } from "../../../hooks/useGetReviews";
import { useGetBrief } from '../../../hooks/useGetBrief';
import { ButtonBrief } from "../../Button/ButtonBrief";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const HeaderFlex = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const CardBlock = styled.div`
  width: 600px;
  @media (max-width: 768px) {
    width: auto;
  }
`;
const TitleDate = styled(Title)`
  margin-bottom: 20px !important;
`;

export const Project = () => {
  const params = useParams();
  const projectId = params.projectId || ""

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    handleGetBrief()
  };

  const state = useLocalState();

  const { clientProject } = state;

  const currentProject = clientProject?.find(
    (item) => item.id === Number(projectId)
  );

  const { reviews, isLoading } = useGetReviews(projectId);

  const { brief, handleGetBrief } = useGetBrief(projectId);

  const start = currentProject?.tariff?.start;
  const end = currentProject?.tariff?.end;

  console.log(brief)

  return (
    <Page>
      <HeaderFlex>
        <Header>{currentProject?.name || ""}</Header>
        <ButtonBrief brief={brief ? true : false} onClick={handleOpen} />
      </HeaderFlex>
      <CardBlock>
        <TitleDate level={5} style={{ fontSize: "14px", fontWeight: "400" }}>
          {getRangeDate({ start, end })}
        </TitleDate>
        <DetailsCard statuses={currentProject?.statuses} />
      </CardBlock>
      {isModalOpen && (
        <ModalBrief
          onClose={handleClose}
          projectId={projectId}
          brief={brief}
        />
      )}
      <TableProject reviews={reviews} isLoading={isLoading} />
      <ArchiveProjectList projectId={projectId} />
    </Page>
  );
};

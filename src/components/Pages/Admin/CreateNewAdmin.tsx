import React from "react";
import styled from "styled-components";
import { FormCreateAdmin } from "../../Form/FormCreateAdmin";
import { ListOfAdmin } from "../../ListOfAdmin";
import { Header } from "../../Typography";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CreateAdmin = () => {
  return (
    <Page>
      <Header>Создание админов</Header>
      <FormCreateAdmin />
      <ListOfAdmin />
    </Page>
  );
};

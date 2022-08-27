import React from "react";
import styled from "styled-components";
import { UserInfoForm } from "./components/UserInfoForm";

const Container = styled.div`
  width: 100%;
  height: 93vh;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  color: #fff;
  font-size: 24px;
`;

const UserFormApp = () => {
  return (
    <Container>
      <UserInfoForm />
    </Container>
  );
};

export default UserFormApp;

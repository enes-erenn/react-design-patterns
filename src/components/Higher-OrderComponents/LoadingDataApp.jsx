import React from "react";
import styled from "styled-components";
import UserInfo from "../ProviderComponents/UserInfo";
import withUser from "./components/withUser";

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
  color: #fff;
  font-size: 24px;
`;

const UserInfoWithLoader = withUser(UserInfo, "1");

const LoadingDataApp = () => {
  return (
    <Container>
      <UserInfoWithLoader />
    </Container>
  );
};

export default LoadingDataApp;

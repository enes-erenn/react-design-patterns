import React from "react";
import DataSource from "../../DataSource";
import axios from "axios";
import UserInfo from "./UserInfo";
import styled from "styled-components";

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

const Provider = () => {
  const getServerData = (url) => async () => {
    const response = await axios.get(url);
    return response?.data;
  };

  const getLocalStorageData = (key) => () => {
    return localStorage.getItem(key);
  };

  const Text = ({ message }) => <h1>{message}</h1>;

  return (
    <Container>
      <DataSource getData={getServerData("users/1")} resourceName="user">
        <UserInfo />
      </DataSource>
      <DataSource
        getData={getLocalStorageData("message")}
        resourceName="message"
      >
        <Text />
      </DataSource>
    </Container>
  );
};

export default Provider;

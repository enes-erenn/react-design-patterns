import React from "react";
import DataSource from "../../DataSource";
import axios from "axios";
import UserInfo from "./UserInfo";

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
    <>
      <DataSource getData={getServerData("users/1")} resourceName="user">
        <UserInfo />
      </DataSource>
      <DataSource
        getData={getLocalStorageData("message")}
        resourceName="message"
      >
        <Text />
      </DataSource>
    </>
  );
};

export default Provider;
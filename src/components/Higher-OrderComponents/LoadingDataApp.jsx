import React from "react";
import UserInfo from "../ProviderComponents/UserInfo";
import withUser from "./components/withUser";

const UserInfoWithLoader = withUser(UserInfo, "1");

const LoadingDataApp = () => {
  return <UserInfoWithLoader />;
};

export default LoadingDataApp;

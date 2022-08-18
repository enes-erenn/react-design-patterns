import React from "react";
import UserInfo from "../ProviderComponents/UserInfo";
import { UserInfoForm } from "./components/UserInfoForm";
import withUser from "./components/withUser";

const UserInfoWithLoader = withUser(UserInfo, "1");

const UserFormApp = () => {
  return <UserInfoForm />;
};

export default UserFormApp;

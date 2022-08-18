import React from "react";
import UserInfo from "../ProviderComponents/UserInfo";
import printProps from "./components/printProps";

const UserInfoWrapped = printProps(UserInfo);

const PrintPropsApp = () => {
  return (
    <UserInfoWrapped a={1} b="Hello" c={{ name: "John" }}></UserInfoWrapped>
  );
};

export default PrintPropsApp;

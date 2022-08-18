import React, { useEffect, useState } from "react";
import axios from "axios";

const withUser = (Component, userId) => {
  return (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        await axios.get(`/users/${userId}`).then((res) => setUser(res?.data));
      })();
    }, []);
    return <Component {...props} user={user} />;
  };
};

export default withUser;

import axios from "axios";
import { useState, useEffect } from "react";

const useUser = (userId) => {
  const [user, setUser] = useState(null);

  // This a custom hook that returns a user which is used id
  useEffect(() => {
    (async () => {
      await axios.get(`/users/${userId}`).then((res) => setUser(res?.data));
    })();
  }, [userId]);

  return user;
};

export default useUser;

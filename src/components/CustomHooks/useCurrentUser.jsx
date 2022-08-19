import axios from "axios";
import { useState, useEffect } from "react";

const useCurrentUser = () => {
  const [user, setUser] = useState(null);

  // This a custom hook that returns the user which is defined in the hook
  useEffect(() => {
    (async () => {
      await axios.get("/current-user").then((res) => setUser(res?.data));
    })();
  }, []);

  return user;
};

export default useCurrentUser;

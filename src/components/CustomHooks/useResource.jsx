import axios from "axios";
import { useState, useEffect } from "react";

const useResource = (resourceURL) => {
  const [resource, setResource] = useState(null);

  // This a custom hook that returns the any resource which is defined by using the hook with url
  useEffect(() => {
    (async () => {
      await axios.get(resourceURL).then((res) => setResource(res?.data));
    })();
  }, [resourceURL]);

  return resource;
};

export default useResource;

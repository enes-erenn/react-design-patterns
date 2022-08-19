import { useState, useEffect } from "react";

const useDataSource = (getResourceFunc) => {
  const [resource, setResource] = useState(null);

  // This a custom hook that returns the any resource which is defined by using the hook with a function
  useEffect(() => {
    (async () => {
      await getResourceFunc().then((res) => setResource(res?.data));
    })();
  }, [getResourceFunc]);

  return resource;
};

export default useDataSource;

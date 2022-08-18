import React, { useState, useEffect } from "react";
import axios from "axios";

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const withEditableResource = (Component, resourcePath, resourceName) => {
  return (props) => {
    const [originalData, setOriginalData] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
      (async () => {
        await axios.get(resourcePath).then((res) => {
          setOriginalData(res?.data);
          setData(res?.data);
        });
      })();
    }, []);

    const onChange = (changes) => {
      setData({ ...data, ...changes });
    };

    const onSave = async () => {
      await axios.post(resourcePath, { [resourceName]: data }).then((res) => {
        setOriginalData(res?.data);
        setData(res?.data);
      });
    };

    const onReset = () => {
      setData(originalData);
    };

    const resourceProps = {
      [resourceName]: data,
      [`onChange${capitalize(resourceName)}`]: onChange,
      [`onSave${capitalize(resourceName)}`]: onSave,
      [`onReset${capitalize(resourceName)}`]: onReset,
    };

    return <Component {...props} {...resourceProps} />;
  };
};

export default withEditableResource;

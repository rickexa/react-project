import React from "react";
import { useEffect } from "react/cjs/react.development";

const Alert = ({ msg, type, removeAlert, list }) => {
  useEffect(() => {
    const time = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(time);
  }, [list, removeAlert]);

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;

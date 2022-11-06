import React from "react";
import loading from "../../assets/loading.svg";

const Loading = () => (
  <div className="d-flex justify-content-center align-items-center spinner">
    <img src={loading} alt="Loading" />
  </div>
);

export default Loading;

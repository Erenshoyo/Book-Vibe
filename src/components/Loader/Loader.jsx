import React from "react";
import { CircularProgress } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <CircularProgress
        height="50"
        width="50"
        color="#23BE0A"
        ariaLabel="circular-progress-loading"
        wrapperStyle={{}}
        wrapperClass="wrapper-class"
        visible={true}
        strokeWidth={2}
        animationDuration={1}
      />
    </div>
  );
};

export default Loader;

import React, { Fragment } from "react";

const MacSlider = ({ value }) => {
  return (
    <Fragment>
      <div className="h-5/6 w-80 rounded-md my-8">
        <img
          className="h-full w-full rounded-md"
          src={value?.image}
          alt=""
        />
      </div>
    </Fragment>
  );
};

export default MacSlider;

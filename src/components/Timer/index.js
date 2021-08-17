import React from "react";

function index(props) {
  const today = new Date();
  const { area } = props;

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <>
      <div>{today.toLocaleDateString(area, options)}</div>
    </>
  );
}

export default index;

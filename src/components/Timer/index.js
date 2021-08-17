import React from "react";

function Index(props) {
  const today = new Date();
  const { area } = props;

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return <h2>{today.toLocaleDateString(area, options)}</h2>;
}

export default Index;

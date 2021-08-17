import React from "react";
import Sort from "utils/Sort";

function index(props) {
  let { data, filter } = props;
  data = Sort[filter](data);

  console.log(data, filter);
  return <div>{data.join(",")}</div>;
}

export default index;

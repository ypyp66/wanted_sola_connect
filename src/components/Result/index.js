import React, { useEffect, useState } from "react";
import Sort from "utils/Sort";
import styled from "@emotion/styled";

const Result = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
`;

function Index(props) {
  const { filter, data } = props;
  const [init, setInit] = useState(false);

  const result = Sort[filter](data);

  useEffect(() => {
    if (filter === "desc") {
      setTimeout(() => {
        setInit(true);
      }, 3000);
    }

    return () => setInit(false);
  }, [filter, data]);

  return (
    <Result>
      <h4>{filter === "asc" ? "오름차순" : "내림차순"}</h4>
      <div>
        {filter === "desc" ? init && result.join(",") : result.join(",")}
      </div>
    </Result>
  );
}

export default Index;

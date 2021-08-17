import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { VscLoading } from "react-icons/vsc";

import Sort from "utils/Sort";

const Result = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
`;

function Index({ filter, data, loading, onSetLoading }) {
  const [init, setInit] = useState(false);

  const result = Sort[filter](data);

  useEffect(() => {
    if (filter === "desc") {
      onSetLoading(true);

      setTimeout(() => {
        setInit(true);
        onSetLoading(false);
      }, 3000);
    }

    return () => setInit(false);
  }, [filter, data, onSetLoading]);

  return (
    <Result>
      <h4>{filter === "asc" ? "오름차순" : "내림차순"}</h4>
      <div>
        {filter === "desc" ? init && result.join(",") : result.join(",")}
      </div>
      {filter === "desc" && loading && (
        <Loading>
          <VscLoading />
        </Loading>
      )}
    </Result>
  );
}

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Loading = styled.div`
  svg {
    font-size: 30px;
    animation: ${spin} 2.5s linear infinite;
  }
`;

export default Index;

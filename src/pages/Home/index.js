import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { VscLoading } from "react-icons/vsc";

import Timer from "components/Timer";
import Form from "components/Form";
import Result from "components/Result";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 100px;
`;

function Index() {
  const [data, setData] = useState([]);
  const [field, setField] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFieldChange = (value) => {
    setField(value);
  };

  const handleSetLoading = (isLoading) => {
    setLoading(isLoading);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Container>
      <Timer area="ko-KR" />
      <Form
        field={field}
        onSetLoading={handleSetLoading}
        onFieldChange={handleFieldChange}
        setData={setData}
      />
      <Result data={data} filter="asc" />
      <Result data={data} filter="reverse" />
      <Timer area="en-US" />
      {loading && (
        <LoadingBox>
          <p>
            <VscLoading />
          </p>
        </LoadingBox>
      )}
    </Container>
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

const LoadingBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 200px;
    height: 200px;
    font-size: 20px;
    background: #fff;
    border-radius: 20px;
    svg {
      font-size: 30px;
      animation: ${spin} 2.5s linear infinite;
    }
  }
`;

export default Index;

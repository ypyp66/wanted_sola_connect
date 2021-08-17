import React, { useEffect, useState } from "react";
import Timer from "components/Timer";
import Form from "components/Form";
import styled from "@emotion/styled";
import Result from "components/Result";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px 100px;
`;

function Index() {
  const [data, setData] = useState([]);

  return (
    <Container>
      <Timer area="ko-KR" />
      <Form setData={setData} />
      {data.length && (
        <>
          <Result data={data} filter="asc" />
          <Result data={data} filter="desc" />
        </>
      )}
      <Timer area="en-US" />
    </Container>
  );
}

export default Index;

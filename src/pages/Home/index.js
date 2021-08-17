import React, { useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";

import Timer from "components/Timer";
import Form from "components/Form";
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
  const [field, setField] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFieldChange = (value) => {
    setField(value);
  };

  const handleSetLoading = useCallback((isLoading) => {
    setLoading(isLoading);
  }, []);

  return (
    <Container>
      <Timer area="ko-KR" />
      <Form field={field} onFieldChange={handleFieldChange} setData={setData} />
      {data.length > 0 && (
        <>
          <Result data={data} filter="asc" />
          <Result
            data={data}
            loading={loading}
            onSetLoading={handleSetLoading}
            filter="desc"
          />
        </>
      )}
      <Timer area="en-US" />
    </Container>
  );
}

export default Index;

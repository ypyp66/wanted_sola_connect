import React from "react";
import styled from "@emotion/styled";

import { checkNumber } from "utils/Validation";

function Index({ field, onFieldChange, setData }) {
  function handleSubmit(e) {
    e.preventDefault();

    if (!checkNumber(field)) {
      alert("숫자,숫자,...,숫자 로 입력해주세요");
      return;
    }

    const arr = field.split(",").map(Number);
    setData(arr);

    onFieldChange("");
  }

  const handleFieldChange = (e) => {
    const {
      target: { value },
    } = e;

    onFieldChange(value);
  };

  return (
    <CustomForm onSubmit={handleSubmit}>
      <textarea
        value={field}
        name="textarea"
        cols="40"
        rows="8"
        onChange={handleFieldChange}
      ></textarea>
      <button type="submit">시작</button>
    </CustomForm>
  );
}

const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  textarea {
    margin-bottom: 30px;
  }

  button {
    outline: none;
    border: 0;
    background-color: #9dcfff;
    padding: 10px;

    :hover {
      background-color: #8bbdff;
    }
  }
`;

export default Index;

import React from "react";
import styled from "@emotion/styled";

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

function Index({ setData }) {
  function handleSubmit(e) {
    e.preventDefault();
    let { value } = e.target.textarea;

    value = value.split(",").map(Number);

    setData(value);
  }
  return (
    <CustomForm onSubmit={handleSubmit}>
      <textarea name="textarea" cols="40" rows="8"></textarea>
      <button type="submit">시작</button>
    </CustomForm>
  );
}

export default Index;

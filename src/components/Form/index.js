import React from "react";

import { checkNumber } from "utils/Validation";

function index({ field, onSetLoading, onFieldChange, setData }) {
  function handleSubmit(e) {
    e.preventDefault();

    const splitValue = field.split("");

    const filterNumber = splitValue.filter((item) => checkNumber(item));

    onSetLoading(true);

    setTimeout(() => {
      setData(filterNumber);

      onFieldChange("");

      onSetLoading(false);
    }, 3000);
  }

  const handleFieldChange = (e) => {
    const {
      target: { value },
    } = e;

    onFieldChange(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={field}
        name="textarea"
        cols="40"
        rows="8"
        onChange={handleFieldChange}
      ></textarea>
      <button type="submit">시작</button>
    </form>
  );
}

export default index;

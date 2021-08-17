import React from "react";

function index({ setData }) {
  function handleSubmit(e) {
    e.preventDefault();
    let { value } = e.target.textarea;
    console.log(value, typeof value);
    value = value.split(",").map(Number);
    console.log(value);

    setData(value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <textarea name="textarea" cols="40" rows="8"></textarea>
      <button type="submit">시작</button>
    </form>
  );
}

export default index;

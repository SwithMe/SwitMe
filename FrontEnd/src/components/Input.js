import React, { Component } from "react";
import styled from "styled-components";

const Input_box = styled.input`
  border: 1px solid #56be9c;
  height: 2.5rem;
  border-radius: 6px;
  outline: none;
  padding-left: 1rem;
`;

const Input = ({ name, width }) => {
  return (
    <div>
      <Input_box
        type="text"
        style={{ width: width }}
        placeholder={name}
      ></Input_box>
    </div>
  );
};

export default Input;

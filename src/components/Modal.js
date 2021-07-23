import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  position: absolute;
  width: 180px;
  height: 70px;
  left: 315px;
  top: 178px;
  background: var(--middle);
  border-radius: 10px;
`;

function Modal() {
  return (
    <Modal>
      <h2>Modal title</h2>
      <p>Modal Body</p>
      <div className="button">
        <Button styled={{ backgroundColor: "var(--middle)" }}>뒤로가기</Button>
        <Button>개설하기</Button>
      </div>
    </Modal>
  );
}
export default Modal;

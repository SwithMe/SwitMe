import React, { useState } from "react";
import styled from "styled-components";

const UploadButton = styled.button`
  font-weight: bold;
  font-size: 1rem;
  color: white;
  background-color: var(--middle);
  outline: none;
  border: none;
`;

function uploadImage() {
  var input = document.createElement("input");

  input.type = "file";
  input.accept = "image/*";

  input.click();
  input.onchange = function (e) {
    var fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.onload = function (e) {
      console.log(e.target.result);
    };
  };
}

function ImageUpload({ name, width, height, radius, ...rest }) {
  return (
    <UploadButton
      onClick={uploadImage}
      style={{ width: width, height: height, borderRadius: radius }}
      {...rest}
    >
      {name}
    </UploadButton>
  );
}

export default ImageUpload;

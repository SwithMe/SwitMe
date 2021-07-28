import React from "react";
import styled from "styled-components";
import Input2 from "../components/Input2";
import Button from "../components/Button";

import logo from "../assets/logo.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 40vh;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 96%;
  color: #064538;
`;

const FindPassword = () => {
  return (
    <Wrapper>
      <Items>
        <img src={logo} style={{ marginBottom: "1rem" }}></img>
        <Input2 name="가입된 아이디를 입력해주세요" width="29rem"></Input2>
        <Input2 name="가입된 이메일 주소를 입력해주세요" width="29rem"></Input2>
        <TextBox>
          <div>가입된 이메일 주소로 확인 메일이 발송됩니다.</div>
        </TextBox>
        <Button name="비밀번호 찾기" width="29rem" color="#56BE9C"></Button>
      </Items>
    </Wrapper>
  );
};

export default FindPassword;

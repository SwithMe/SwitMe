import React from "react";
import styled from "styled-components";
import Input from "../components/Input";
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

const Text_box = styled.div`
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
        <Input name="가입된 아이디를 입력해주세요" width="29rem"></Input>
        <Input name="가입된 이메일 주소를 입력해주세요" width="29rem"></Input>
        <Text_box>
          <div>가입된 이메일 주소로 확인 메일이 발송됩니다.</div>
        </Text_box>
        <Button name="비밀번호 찾기" width="29rem" color="#56BE9C"></Button>
      </Items>
    </Wrapper>
  );
};

export default FindPassword;

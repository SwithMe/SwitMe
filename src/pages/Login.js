import React from "react";
import styled from "styled-components";
import Input2 from "../components/Input2";
import Button from "../components/Button";
import Header from "../components/Header";
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
  height: 45vh;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  color: #064538;
`;

const Login = () => {
  return (
    <Wrapper>
      <Header />
      <Items>
        <img src={logo} style={{ marginBottom: "1rem" }}></img>
        <Input2 name="E-mail" width="29rem"></Input2>
        <Input2 name="비밀번호" width="29rem"></Input2>
        <Button name="로그인" width="29rem" color="#56BE9C"></Button>
        <TextBox>
          <div>이메일 / 비밀번호 찾기</div>
          <div>회원가입</div>
        </TextBox>
      </Items>
    </Wrapper>
  );
};

export default Login;

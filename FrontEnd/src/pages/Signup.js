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
  height: 50vh;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  //justify-content: flex-start;
  width: 98%;
  color: #064538;
`;

const Checkbox = styled.input`
  margin-right: 1rem;
  width: 2rem;
  height: 2rem;
  border: 1px solid #cccccc;
  border-radius: 10px;
  background-color: #56be9c;
  //cursor: pointer;
`;

const Signup = () => {
  return (
    <Wrapper>
      <Items>
        <img alt="로고" src={logo} style={{ marginBottom: "1rem" }}></img>
        <Input2 name="이름" width="29rem"></Input2>
        <Input2 name="ewhain 이메일 주소" width="29rem"></Input2>
        <Input2
          name="비밀번호(영문, 숫자, 특수기호 포함 8~16자)"
          width="29rem"
        ></Input2>
        <Input2 name="비밀번호 확인" width="29rem"></Input2>
        <TextBox>
          <Checkbox type="checkbox" id="agree"></Checkbox>
          <label for="agree">
            <div>개인 정보 수집 약관에 동의합니다.</div>
          </label>
        </TextBox>
        <Button name="회원가입" width="29rem" color="#56BE9C"></Button>
      </Items>
    </Wrapper>
  );
};

export default Signup;

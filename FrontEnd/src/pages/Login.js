import React, { useState } from "react";
import styled from "styled-components";
import Input2 from "../components/Input2";
import Button from "../components/Button";
import Header from "../components/Header";
import logo from "../assets/logo.png";
import { login } from "../_actions/actions";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    useremail: "",
    userpassword: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const formSubmit = async (evt) => {
    evt.preventDefault();
    dispatch(login(user)).then((response) => {
      console.log(response);
      if (response.payload) {
        console.log("로그인 성공");
      } else {
        alert("로그인 오류");
      }
    });
  };

  return (
    <Wrapper>
      <form onSubmit={formSubmit}>
        <Items>
          <img alt="로고" src={logo} style={{ marginBottom: "1rem" }}></img>
          <Input2
            name="useremail"
            placeholder="E-mail"
            width="29rem"
            value={user.id}
            onChange={onInputChange}
          ></Input2>
          <Input2
            name="userpassword"
            placeholder="비밀번호"
            width="29rem"
            value={user.password}
            onChange={onInputChange}
          ></Input2>
          <Button
            name="로그인"
            width="29rem"
            color="#56BE9C"
            type="submit"
          ></Button>
          <TextBox>
            <div>이메일 / 비밀번호 찾기</div>
            <div>회원가입</div>
          </TextBox>
        </Items>
      </form>
    </Wrapper>
  );
};

export default Login;

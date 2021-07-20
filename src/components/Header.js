import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";
import message from "../assets/message.png";
import dot from "../assets/search.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 95px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.div`
  background: url(${logo});
  background-size: 100%;
  height: 37.5px;
  width: 150px;
  margin-right: 70px;
`;

const Menu = styled.div`
  width: 173px;
  height: 95px;
  text-align: center;
  padding: 30px;
  font-size: 24px;
  color: #cccccc;

  :hover {
    border-bottom: 5px solid;
    border-color: var(--middle);
    color: var(--deep);
  }
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--middle);
  box-sizing: border-box;
  padding-left: 30px;
  margin-left: 80px;
  border-radius: 10px;
  width: 480px;
  height: 65px;
`;

const Input = styled.input`
  width: 409px;
  height: auto;
  font-size: 20px;
  border: none;
  outline: none;
`;

const Button = styled.img`
  width: 65px;
  height: 65px;
`;

function Header() {
  const history = useHistory();
  return (
    <Wrapper>
      <Logo></Logo>

      <Menu onClick={() => history.push("/")}>홈</Menu>
      <Menu onClick={() => history.push("/stopwatch")}>스톱워치</Menu>
      <Menu onClick={() => history.push("/studylist")}>스터디</Menu>
      <Search>
        <Input type="text" placeholder="새로운 스터디를 찾아보세요"></Input>
        <img src={dot} style={{ width: "16px", height: "16px" }}></img>
      </Search>
      <Button
        onClick={() => history.push("/")}
        src={message}
        style={{ marginLeft: "61px" }}
      ></Button>
      <Button
        onClick={() => history.push("/")}
        src={profile}
        style={{ marginLeft: "29px" }}
      ></Button>
    </Wrapper>
  );
}
export default Header;

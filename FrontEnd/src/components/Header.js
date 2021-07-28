import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";
import message from "../assets/message.png";
import dot from "../assets/search.png";
import Chat_list from "./Chat_list";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 95px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);

  .menu {
    display: flex;
    flex-direction: row;
  }
`;

const Logo = styled.img`
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

const Active = styled.div`
  width: 173px;
  height: 95px;
  text-align: center;
  padding: 30px;
  font-size: 24px;
  border-bottom: 5px solid;
  border-color: var(--middle);
  color: var(--deep);
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
  const [status, setStatus] = useState(0);

  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  //Chat_list
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  //화면이동
  const Main = () => {
    setStatus(0);
    history.push("/");
  };
  const StopWatch = () => {
    setStatus(1);
    history.push("/StopWatch");
  };
  const StudyList = () => {
    setStatus(2);
    history.push("/StudyList");
  };

  return (
    <Wrapper>
      <Logo src={logo}></Logo>

      {status === 0 ? (
        <div class="menu">
          <Active>홈</Active>
          <Menu onClick={StopWatch}>스톱워치</Menu>
          <Menu>스터디</Menu>
        </div>
      ) : null}

      {status === 1 ? (
        <div class="menu">
          <Menu onClick={Main}>홈</Menu>
          <Active>스톱워치</Active>
          <Menu>스터디</Menu>
        </div>
      ) : null}

      <Search>
        <Input type="text" placeholder="새로운 스터디를 찾아보세요"></Input>
        <img src={dot} style={{ width: "16px", height: "16px" }}></img>
      </Search>
      <Button
        onClick={openModal}
        src={message}
        style={{ marginLeft: "61px" }}
      ></Button>
      {/* Chat_list 시작 */}
      <React.Fragment>
        <Chat_list open={modalOpen} close={closeModal} header="">
          {/* // Chat_list.js <main> {props.children} </main>에 내용이 입력됨. */}
        </Chat_list>
      </React.Fragment>
      {/* Chat_list 끝*/}
      <Button
        onClick={() => history.push("/")}
        src={profile}
        style={{ marginLeft: "29px" }}
      ></Button>
    </Wrapper>
  );
}
export default Header;

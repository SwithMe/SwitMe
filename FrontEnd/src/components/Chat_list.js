import React, { useState } from "react";
import styled from "styled-components";
import "../assets/chat.css";
import logo from "../assets/logo.png";
import Title from "../components/Title";

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Study = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* background-color: #56be9c; */
  border-bottom: #56be9c solid 1px;
  height: 108px;
  :hover {
    background-color: #56be9c;
  }
`;

const Chat_list = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  const [studies, setStudies] = useState([
    {
      studyprofile: "../assets/circle.png",
      name: "김김김",
      content: "내용내용내용내용내용",
      unread: "../assets/circle2.png",
    },
    {
      studyprofile: "../assets/circle.png",
      name: "김김김",
      content: "내용내용내용내용내용",
      unread: "../assets/circle2.png",
    },
    {
      studyprofile: "../assets/circle.png",
      name: "김김김",
      content: "내용내용내용내용내용",
      unread: "../assets/circle2.png",
    },
    {
      studyprofile: "../assets/circle.png",
      name: "김김김",
      content: "내용내용내용내용내용",
      unread: "../assets/circle2.png",
    },
    {
      studyprofile: "../assets/circle.png",
      name: "김김김",
      content: "내용내용내용내용내용",
      unread: "../assets/circle2.png",
    },
  ]);

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header
            style={{
              height: "95px",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              boxShadow: "0px 5px 15px grey",
            }}
          >
            <div>
              <img src={logo} style={{ width: "136px" }} />
            </div>
            {header}
            <button className="close" onClick={close}>
              {" "}
              &times;{" "}
            </button>
          </header>
          <main>
            {props.children}
            <List>
              {studies.map((study, i) => {
                if (i > 4) return false;
                return (
                  <Study key={i}>
                    <img
                      alt="study profile"
                      src={require("../assets/circle.png").default}
                      style={{ marginLeft: "30px" }}
                    />
                    <Col>
                      <div style={{ width: "300px" }}>
                        <Title size="20" weight="400">
                          {study.name}
                        </Title>
                      </div>
                      <div>{study.content}</div>
                    </Col>
                    <div>
                      <img
                        alt="unread"
                        src={require("../assets/circle2.png").default}
                        style={{ marginRight: "35px" }}
                      />
                    </div>
                  </Study>
                );
              })}
            </List>
          </main>

          <footer>
            <div style={{ height: "67px" }}></div>
            {/* <button className="close" onClick={close}>
              {" "}
              close{" "}
            </button> */}
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Chat_list;

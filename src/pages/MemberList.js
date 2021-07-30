import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Title from "../components/Title";
import Input from "../components/Input";
import Search from "../assets/search.png";

const Fix = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
  margin-top: 3%;
`;
const Row = styled.div`
  width: 80%;
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${(props) => props.border || "1px solid #56be9c"};
`;

const MemberList = () => {
  const [study, setStudy] = useState({
    studyname: "스터디 이름쓰는 칸",
    members: [
      {
        name: "김김김",
        profile: "../assets/circle.png",
        temperature: "00",
        warning: "0",
      },
      {
        name: "김김김",
        profile: "../assets/circle.png",
        temperature: "00",
        warning: "0",
      },
      {
        name: "김김김",
        profile: "../assets/circle.png",
        temperature: "00",
        warning: "0",
      },
      {
        name: "김김김",
        profile: "../assets/circle.png",
        temperature: "00",
        warning: "0",
      },
      {
        name: "김김김",
        profile: "../assets/circle.png",
        temperature: "00",
        warning: "0",
      },
      {
        name: "김김김",
        profile: "../assets/circle.png",
        temperature: "00",
        warning: "0",
      },
      {
        name: "김김김",
        profile: "../assets/circle.png",
        temperature: "00",
        warning: "0",
      },
      {
        name: "김김김",
        profile: "../assets/circle.png",
        temperature: "00",
        warning: "0",
      },
      {
        name: "김김김",
        profile: "../assets/circle.png",
        temperature: "00",
        warning: "0",
      },
      {
        name: "김김김",
        profile: "../assets/circle.png",
        temperature: "00",
        warning: "0",
      },
    ],
  });
  return (
    <>
      <Header page="3" />
      <Fix>
        <Row border="none" style={{ marginTop: "1%" }}>
          <Title size="32">{study.studyname}</Title>
        </Row>
        <div></div>
        <Row border="none">
          <div
            style={{
              width: "70%",
              marginLeft: "30px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "2%",
            }}
          >
            <Title size="18">스터디원 이름</Title>
            <Title size="18">매너온도</Title>
            <Title size="18">경고 횟수</Title>
          </div>
        </Row>
        <div
          style={{
            width: "80%",
            border: "3px solid #56BE9C",
            background: "#56BE9C",
          }}
        ></div>
        {study.members.map((member, i) => (
          <Row>
            <div
              style={{
                width: "70%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <img
                  alt="profile"
                  src={require("../assets/circle.png").default}
                  style={{ marginLeft: "21px" }}
                />
                &emsp;
                <Title weight="400" size="20">
                  {member.name}
                </Title>
              </div>
              <Title weight="400" size="20">
                {member.temperature}°C
              </Title>
              <Title weight="400" size="20">
                {member.warning}회
              </Title>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  border: "1px solid #C70000",
                  borderRadius: "10px",
                  background: "white",
                  width: "105px",
                  height: "45px",
                  fontSize: "20px",
                  color: "#C70000",
                  fontFamily: "NotoSans",
                }}
              >
                경고하기
              </button>
            </div>
          </Row>
        ))}
        <Row border="none">
          <Input
            validinput="true"
            inputwidth="300"
            width="368"
            placeholder="스터디원 이름을 입력하세요"
            marginTop="40"
            style={{}}
          >
            <img
              alt="search"
              src={Search}
              style={{ width: "16px", height: "16px" }}
            ></img>
          </Input>
        </Row>
      </Fix>
    </>
  );
};

export default MemberList;

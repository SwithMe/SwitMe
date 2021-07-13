import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Input from "../components/Input";
import Title from "../components/Title";
import Image from "../components/Image";

const Fix = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Search = styled.div`
  width: 790%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 74px;
  & + & {
    margin-left: 25px;
  }
  ul {
    width: 125px;
    display: none;
    padding-left: 0px;
    border: 1px solid #56be9c;
    border-radius: 10px;
    z-index: 1;
    position: absolute;
    margin-top: 108px;
  }
  li {
    padding: 5px 10px;
    list-style: none;
    display: none;
    border-radius: 10px;
    :hover {
      border: 1px solid #56be9c;
    }
  }
  :hover {
    ul,
    li {
      display: block;
      cursor: pointer;
      background-color: white;
      z-index: 1;
    }
  }
`;
const List = styled.div`
  width: 1520px;
  display: flex;
  flex-direction: column;
`;
const Study = styled.div`
  width: 1520px;
  height: 92px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const StudyList = () => {
  const [studies, setStudies] = useState([
    {
      studyprofile: "../assets/rectangle.png",
      name: "스터디명",
      state: "모집중",
      onoff: "온라인",
      people: 3,
      max: 11,
      temperature: "0",
      owner: "김김김",
      ownerprofie: ".../assets/circle",
      tags: ["태그1", "태그2", "태그3", "태그4", "태그5", "태그6"],
    },
    {
      studyprofile: "../assets/rectangle.png",
      name: "스터디명",
      state: "모집중",
      onoff: "온라인",
      people: 3,
      max: 11,
      temperature: "0",
      owner: "김김김",
      ownerprofie: ".../assets/circle",
      tags: ["태그1", "태그2", "태그3", "태그4", "태그5", "태그6"],
    },
    {
      studyprofile: "../assets/rectangle.png",
      name: "스터디명",
      state: "모집중",
      onoff: "온라인",
      people: 3,
      max: 11,
      temperature: "0",
      owner: "김김김",
      ownerprofie: ".../assets/circle",
      tags: ["태그1", "태그2", "태그3", "태그4", "태그5", "태그6"],
    },
    {
      studyprofile: "../assets/rectangle.png",
      name: "스터디명",
      state: "모집중",
      onoff: "온라인",
      people: 3,
      max: 11,
      temperature: "0",
      owner: "김김김",
      ownerprofie: ".../assets/circle",
      tags: ["태그1", "태그2", "태그3", "태그4", "태그5", "태그6"],
    },
    {
      studyprofile: "../assets/rectangle.png",
      name: "스터디명",
      state: "모집중",
      onoff: "온라인",
      people: 3,
      max: 11,
      temperature: "0",
      owner: "김김김",
      ownerprofie: ".../assets/circle",
      tags: ["태그1", "태그2", "태그3", "태그4", "태그5", "태그6"],
    },
    {
      studyprofile: "../assets/rectangle.png",
      name: "스터디명",
      state: "모집중",
      onoff: "온라인",
      people: 3,
      max: 11,
      temperature: "0",
      owner: "김김김",
      ownerprofie: ".../assets/circle",
      tags: ["태그1", "태그2", "태그3", "태그4", "태그5", "태그6"],
    },
    {
      studyprofile: "../assets/rectangle.png",
      name: "스터디명",
      state: "모집중",
      onoff: "온라인",
      people: 3,
      max: 11,
      temperature: "0",
      owner: "김김김",
      ownerprofie: ".../assets/circle",
      tags: ["태그1", "태그2", "태그3", "태그4", "태그5", "태그6"],
    },
  ]);
  return (
    <Fix>
      <Header />
      <Search>
        <Item>
          <Title>스터디 이름</Title>
          <Input
            placeholder="검색어를 입력하세요."
            width="368"
            inputwidth="300"
            marginTop="18"
            validinput="true"
          >
            <img
              alt="search"
              src={require("../assets/search.png").default}
              style={{ width: "16px", height: "18px", cursor: "pointer" }}
            />
          </Input>
        </Item>
        <Item>
          <Title>모집상태</Title>
          <Input placeholder="검색어를 입력하세요." width="127" marginTop="18">
            <Title size="20" weight="400">
              전체
            </Title>
            <img
              alt="dropdown"
              src={require("../assets/dropdown.png").default}
              style={{ marginLeft: "21px" }}
            />
          </Input>
          <ul>
            <li>
              <Title size="20" weight="400">
                전체
              </Title>
            </li>
            <li>
              <Title size="20" weight="400">
                모집 중
              </Title>
            </li>
            <li>
              <Title size="20" weight="400">
                활동 중
              </Title>
            </li>
            <li>
              <Title size="20" weight="400">
                활동 종료
              </Title>
            </li>
          </ul>
        </Item>
        <Item>
          <Title>진행방식</Title>
          <Input placeholder="검색어를 입력하세요." width="127" marginTop="18">
            <Title size="20" weight="400">
              전체
            </Title>
            <img
              alt="dropdown"
              src={require("../assets/dropdown.png").default}
              style={{ marginLeft: "21px" }}
            />
          </Input>
          <ul>
            <li>
              <Title size="20" weight="400">
                전체
              </Title>
            </li>
            <li>
              <Title size="20" weight="400">
                온라인
              </Title>
            </li>
            <li>
              <Title size="20" weight="400">
                오프라인
              </Title>
            </li>
          </ul>
        </Item>
        <Item>
          <Title>매너온도</Title>
          <Input placeholder="검색어를 입력하세요." width="127" marginTop="18">
            <Title size="20" weight="400">
              전체
            </Title>
            <img
              alt="dropdown"
              src={require("../assets/dropdown.png").default}
              style={{ marginLeft: "21px" }}
            />
          </Input>
        </Item>
        <Item>
          <Title>최대인원</Title>
          <Input
            placeholder="Search"
            width="134"
            marginTop="18"
            validinput="true"
            inputwidth="80"
          ></Input>
        </Item>
        <Item>
          <Title>스터디장</Title>
          <Input
            placeholder="Search"
            width="267"
            marginTop="18"
            validinput="true"
            inputwidth="200"
          ></Input>
        </Item>
        <Item>
          <Title>태그</Title>
          <Input
            placeholder="Search"
            width="220"
            marginTop="18"
            validinput="true"
            inputwidth="170"
          ></Input>
        </Item>
      </Search>
      <List>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "65px",
          }}
        >
          <div>
            <Title>검색결과</Title>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                width: "14.7px",
                height: "25px",
                marginRight: "72px",
              }}
              onClick={() => console.log("왼쪽")}
            >
              <Image
                alt="left arrow"
                src={require("../assets/leftarrow.png").default}
                width="14.7px"
                height="25px"
              />
            </div>
            <Title color="#56BE9C">2/11</Title>
            <div
              style={{
                width: "14.7px",
                height: "25px",
                marginLeft: "72px",
              }}
              onClick={() => console.log("오른쪽")}
            >
              <Image
                alt="right arrow"
                src={require("../assets/rightarrow.png").default}
                width="14.7px"
                height="25px"
              />
            </div>
          </div>
        </div>
        <div
          style={{
            width: "1520px",
            border: "3px solid #56BE9C",
            marginTop: "19px",
            background: "#56BE9C",
          }}
        ></div>
        {studies.map((study, i) => {
          if (i > 5) return false;
          return (
            <Study>
              <img
                alt="study profile"
                src={require("../assets/rectangle.png").default}
                style={{ width: "60px", height: "60px" }}
              />
              <Title size="20" weight="400">
                {study.name}
              </Title>
            </Study>
          );
        })}
      </List>
    </Fix>
  );
};

export default StudyList;

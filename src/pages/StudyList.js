import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Input from "../components/Input";
import Title from "../components/Title";

const Fix = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Search = styled.div`
  width: 100%;
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
    display: none;
    padding-left: 0px;
    border: 1px solid #56be9c;
    border-radius: 10px;
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
    }
  }
`;

const StudyList = () => {
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
              style={{ width: "16px", height: "18px" }}
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
    </Fix>
  );
};

export default StudyList;

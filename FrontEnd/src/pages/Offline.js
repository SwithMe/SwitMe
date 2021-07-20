import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

import Header from "../components/Header";
import Input from "../components/Input";
import Input2 from "../components/Input2";
import Title from "../components/Title";
import Button from "../components/Button";
import { useHistory } from "react-router";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 90vh; */
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Textbox = styled.div`
  width: 11rem;
`;

const Inputbox = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: row;
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;

  ul {
    width: 140px;
    display: none;
    padding-left: 0px;
    border: 1px solid #56be9c;
    border-radius: 10px;
    z-index: 1;
    position: absolute;
    margin-top: 65px;
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

const RadioButton = styled.input`
  border: 1px solid #56be9c;
  width: 41px;
  height: 41px;
`;

const Offline = () => {
  const history = useHistory();
  return (
    <Wrapper>
      <Header />
      <Row>
        <Col>
          <div style={{ marginLeft: "10px" }}>
            <Title>스터디 개설하기</Title>
          </div>
          <img
            alt="study profile"
            src={require("../assets/rectangle.png").default}
            style={{
              width: "220px",
              height: "220px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          />
          <Button
            name="이미지 추가하기"
            width="220px"
            height="70px"
            color="#56BE9C"
          ></Button>
        </Col>

        <Col style={{ marginLeft: "40px" }}>
          <Row style={{ alignItems: "center" }}>
            <Textbox>
              <Title>스터디 이름</Title>
            </Textbox>
            <Inputbox>
              <Input
                placeholder="스터디의 이름을 작성해주세요"
                width="1000"
                inputwidth="300"
                marginTop="18"
                validinput="true"
              ></Input>
            </Inputbox>
          </Row>
          <Row style={{ alignItems: "center" }}>
            <Textbox>
              <Title>진행 방식</Title>
            </Textbox>
            <Inputbox>
              <Row style={{ paddingTop: "18px" }}>
                <Col>
                  <RadioButton
                    type="radio"
                    id="online"
                    name="onoff"
                    onClick={() => history.push("/online")}
                  ></RadioButton>
                </Col>
                <Col
                  style={{
                    padding: "6px",
                    paddingLeft: "20px",
                    fontSize: "20px",
                    marginRight: "45px",
                  }}
                >
                  <label id="online">온라인</label>
                </Col>
                <Col>
                  <RadioButton
                    type="radio"
                    id="offline"
                    name="onoff"
                    onClick={() => history.push("/offline")}
                  ></RadioButton>
                </Col>
                <Col
                  style={{
                    padding: "6px",
                    paddingLeft: "20px",
                    fontSize: "20px",
                    marginRight: "45px",
                  }}
                >
                  <label id="offline">오프라인</label>
                </Col>
              </Row>
            </Inputbox>
          </Row>
          <Row style={{ alignItems: "center" }}>
            <Textbox>
              <Title>기간</Title>
            </Textbox>
            <Inputbox>
              <Input
                placeholder="날짜를 선택하세요"
                width="300"
                inputwidth="160"
                marginTop="18"
                validinput="true"
              ></Input>
              <div style={{ margin: "15px", marginTop: "30px" }}>
                <img
                  alt="line"
                  src={require("../assets/line.png").default}
                  style={{ width: "57px", height: "3px" }}
                />
              </div>
              <Input
                placeholder="날짜를 선택하세요"
                width="300"
                inputwidth="160"
                marginTop="18"
                validinput="true"
              ></Input>
            </Inputbox>
          </Row>

          {/*dropdown */}
          <Row
            style={{
              alignItems: "center",
              marginTop: "18px",
              marginBottom: "18px",
            }}
          >
            <Textbox>
              <Title>시간</Title>
            </Textbox>
            <Inputbox>
              <Item>
                <Input width="141" height="65">
                  <Title size="20" weight="400">
                    22:00
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
                      00:00
                    </Title>
                  </li>
                  <li>
                    <Title size="20" weight="400">
                      01:00
                    </Title>
                  </li>
                  <li>
                    <Title size="20" weight="400">
                      02:00
                    </Title>
                  </li>
                  <li>
                    <Title size="20" weight="400">
                      03:00
                    </Title>
                  </li>
                </ul>
              </Item>
              <div style={{ margin: "15px" }}>
                <img
                  alt="line"
                  src={require("../assets/line.png").default}
                  style={{ width: "57px", height: "3px" }}
                />
              </div>
              <Item>
                <Input width="141" height="65">
                  <Title size="20" weight="400">
                    23:00
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
                      00:00
                    </Title>
                  </li>
                  <li>
                    <Title size="20" weight="400">
                      01:00
                    </Title>
                  </li>
                  <li>
                    <Title size="20" weight="400">
                      02:00
                    </Title>
                  </li>
                  <li>
                    <Title size="20" weight="400">
                      03:00
                    </Title>
                  </li>
                </ul>
              </Item>
            </Inputbox>
          </Row>

          <Item style={{ alignItems: "center" }}>
            <Textbox>
              <Title>최대 모집 인원</Title>
            </Textbox>
            <Inputbox>
              <Input width="141" height="65">
                <Title size="20" weight="400">
                  0
                </Title>
                <img
                  alt="dropdown"
                  src={require("../assets/dropdown.png").default}
                  style={{ marginLeft: "60px" }}
                />
              </Input>
              <ul>
                <li>
                  <Title size="20" weight="400">
                    0
                  </Title>
                </li>
                <li>
                  <Title size="20" weight="400">
                    1
                  </Title>
                </li>
                <li>
                  <Title size="20" weight="400">
                    2
                  </Title>
                </li>
                <li>
                  <Title size="20" weight="400">
                    3
                  </Title>
                </li>
              </ul>
            </Inputbox>
          </Item>
          <Row style={{ alignItems: "center" }}>
            <Textbox>
              <Title>태그</Title>
            </Textbox>
            <Inputbox>
              <Input
                placeholder="태그를 입력하세요"
                width="1000"
                inputwidth="300"
                marginTop="18"
                validinput="true"
              ></Input>
            </Inputbox>
          </Row>
          <Row style={{ alignItems: "center" }}>
            <Textbox>
              <Title>장소</Title>
            </Textbox>
            <Inputbox>
              <Input
                placeholder="장소찾기"
                width="178"
                inputwidth="110"
                marginTop="18"
                validinput="true"
              >
                <img
                  alt="dropdown"
                  src={require("../assets/vector.png").default}
                />
              </Input>
            </Inputbox>
          </Row>
          <Row style={{ alignItems: "center" }}>
            <Textbox>
              <Title>기타 사항</Title>
            </Textbox>
            <Inputbox>
              <Input
                placeholder="추가적인 사항을 기재해주세요 (조용한 정도, 타이핑/마우스 사용 여부 등)"
                width="1000"
                inputwidth="600"
                marginTop="18"
                validinput="true"
              ></Input>
            </Inputbox>
          </Row>
          <Row
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "120px",
            }}
          >
            <Button
              style={{ display: "flex" }}
              name="스터디 개설하기"
              width="220px"
              height="70px"
              color="#56BE9C"
            ></Button>
          </Row>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Offline;

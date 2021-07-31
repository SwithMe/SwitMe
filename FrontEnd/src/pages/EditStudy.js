import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import Header from "../components/Header";
import Input from "../components/Input";
import Title from "../components/Title";
import Button from "../components/Button";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { editstudy, getStudydetail } from "../_actions/actions";

import "react-datepicker/dist/react-datepicker.css";
import Calendar from "../components/Calendar";

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
    overflow-y: scroll;
    height: 200px;
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

const EditStudy = ({ match }) => {
  const { study_id } = match.params;
  const history = useHistory();
  const dispatch = useDispatch();
  const [isSet, setIsSet] = useState();
  const [study, setStudy] = useState();

  useEffect(() => {
    dispatch(getStudydetail(study_id)).then((response) => {
      if (response.payload) {
        setStudy(response.payload);
        setIsSet(true);
      } else {
        console.log("기존 스터디 정보 가져오기 실패");
      }
    });
  });

  const onFormSubmit = () => {
    console.log(study);
    dispatch(editstudy(study_id, study)).then((response) => {
      if (response.payload) {
        alert("스터디가 수정되었습니다..");
        history.push(`/`);
      } else {
        console.log("스터디 수정 실패");
      }
    });
  };

  const onInputChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setStudy({ ...study, [name]: value });
  };

  // const onImgChange = async (event) => {
  //   setImgLoading(true);
  //   const formData = new FormData();
  //   formData.append("file", event.target.files[0]);
  //   const response = await apiClient.post("/brand/logo_image", formData);
  //   //response.data.location이 업로드한 파일의 url
  //   setImgLoding(false);
  // };

  // const onImgInputBtnClick = (event) => {
  //   event.preventDefault();
  //   logoImgInput.current.click();
  // };
  return isSet ? (
    <Wrapper>
      <Header page="3" />
      <Row style={{ marginTop: "40px" }}>
        <Col>
          <div style={{ marginLeft: "10px" }}>
            <Title>스터디 수정하기</Title>
          </div>
          <img
            alt="study profile"
            src={require("../assets/rectangle.png").default}
            // src={study.image}
            style={{
              width: "220px",
              height: "220px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          />
          <input
            style={{ display: "none" }}
            id="imgfile"
            type="file"
            accept="image/*"
          />
          <label for="imgfile">
            <div
              style={{
                fontSize: "20px",
                backgroundColor: "#56BE9C",
                borderRadius: "10px",
                height: "70px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            >
              이미지추가하기
            </div>
          </label>
        </Col>

        <Col style={{ marginLeft: "40px" }}>
          <Row style={{ alignItems: "center" }}>
            <Textbox>
              <Title>스터디 이름</Title>
            </Textbox>
            <Inputbox>
              <Input
                name="title"
                value={study.title}
                placeholder="스터디의 이름을 작성해주세요"
                width="1000"
                inputwidth="950"
                marginTop="18"
                validinput="true"
                onChange={onInputChange}
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
                    onClick={() => setStudy({ ...study, type: "online" })}
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
                    onClick={() => setStudy({ ...study, type: "offline" })}
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
            <Inputbox style={{ paddingTop: "18px" }}>
              {/* <Input
                name="termstart"
                value={study.termstart}
                placeholder="날짜를 선택하세요"
                width="300"
                inputwidth="160"
                marginTop="18"
                validinput="true"
                onChange={onInputChange}
              /> */}
              <Calendar />
              <div style={{ margin: "15px", marginTop: "30px" }}>
                <img
                  alt="line"
                  src={require("../assets/line.png").default}
                  style={{ width: "57px", height: "3px" }}
                />
              </div>
              {/* <Input
                name="termend"
                value={study.termend}
                placeholder="날짜를 선택하세요"
                width="300"
                inputwidth="160"
                marginTop="18"
                validinput="true"
                onChange={onInputChange}
              ></Input> */}
              <Calendar />
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
                    {study.timestart.slice(0, 5)}
                  </Title>
                  <img
                    alt="dropdown"
                    src={require("../assets/dropdown.png").default}
                    style={{ marginLeft: "21px" }}
                  />
                </Input>
                <ul>
                  <li
                    onClick={() => setStudy({ ...study, timestart: "00:00" })}
                  >
                    <Title size="20" weight="400">
                      00:00
                    </Title>
                  </li>
                  <li
                    onClick={() => setStudy({ ...study, timestart: "01:00" })}
                  >
                    <Title size="20" weight="400">
                      01:00
                    </Title>
                  </li>
                  <li
                    onClick={() => setStudy({ ...study, timestart: "02:00" })}
                  >
                    <Title size="20" weight="400">
                      02:00
                    </Title>
                  </li>
                  <li
                    onClick={() => setStudy({ ...study, timestart: "03:00" })}
                  >
                    <Title size="20" weight="400">
                      03:00
                    </Title>
                  </li>
                  <li
                    onClick={() => setStudy({ ...study, timestart: "04:00" })}
                  >
                    <Title size="20" weight="400">
                      04:00
                    </Title>
                  </li>
                  <li
                    onClick={() => setStudy({ ...study, timestart: "05:00" })}
                  >
                    <Title size="20" weight="400">
                      05:00
                    </Title>
                  </li>
                  <li
                    onClick={() => setStudy({ ...study, timestart: "06:00" })}
                  >
                    <Title size="20" weight="400">
                      06:00
                    </Title>
                  </li>
                  <li
                    onClick={() => setStudy({ ...study, timestart: "07:00" })}
                  >
                    <Title size="20" weight="400">
                      07:00
                    </Title>
                  </li>
                  <li
                    onClick={() => setStudy({ ...study, timestart: "08:00" })}
                  >
                    <Title size="20" weight="400">
                      08:00
                    </Title>
                  </li>
                  <li
                    onClick={() => setStudy({ ...study, timestart: "09:00" })}
                  >
                    <Title size="20" weight="400">
                      09:00
                    </Title>
                  </li>
                  <li
                    onClick={() => setStudy({ ...study, timestart: "10:00" })}
                  >
                    <Title size="20" weight="400">
                      10:00
                    </Title>
                  </li>
                  <li
                    onClick={() => setStudy({ ...study, timestart: "11:00" })}
                  >
                    <Title size="20" weight="400">
                      11:00
                    </Title>
                  </li>
                  <li
                    onClick={() => setStudy({ ...study, timestart: "12:00" })}
                  >
                    <Title size="20" weight="400">
                      12:00
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
                    {study.timeend.slice(0, 5)}
                  </Title>
                  <img
                    alt="dropdown"
                    src={require("../assets/dropdown.png").default}
                    style={{ marginLeft: "21px" }}
                  />
                </Input>
                <ul>
                  <li onClick={() => setStudy({ ...study, timeend: "00:00" })}>
                    <Title size="20" weight="400">
                      00:00
                    </Title>
                  </li>
                  <li onClick={() => setStudy({ ...study, timeend: "01:00" })}>
                    <Title size="20" weight="400">
                      01:00
                    </Title>
                  </li>
                  <li onClick={() => setStudy({ ...study, timeend: "02:00" })}>
                    <Title size="20" weight="400">
                      02:00
                    </Title>
                  </li>
                  <li onClick={() => setStudy({ ...study, timeend: "03:00" })}>
                    <Title size="20" weight="400">
                      03:00
                    </Title>
                  </li>
                  <li
                    onClick={() => setStudy({ ...study, timestart: "04:00" })}
                  >
                    <Title size="20" weight="400">
                      04:00
                    </Title>
                  </li>
                  <li
                    onClick={() => setStudy({ ...study, timestart: "05:00" })}
                  >
                    <Title size="20" weight="400">
                      05:00
                    </Title>
                  </li>
                  <li
                    onClick={() => setStudy({ ...study, timestart: "06:00" })}
                  >
                    <Title size="20" weight="400">
                      06:00
                    </Title>
                  </li>
                  <li
                    onClick={() => setStudy({ ...study, timestart: "07:00" })}
                  >
                    <Title size="20" weight="400">
                      07:00
                    </Title>
                  </li>
                  <li
                    onClick={() => setStudy({ ...study, timestart: "08:00" })}
                  >
                    <Title size="20" weight="400">
                      08:00
                    </Title>
                  </li>
                  <li
                    onClick={() => setStudy({ ...study, timestart: "09:00" })}
                  >
                    <Title size="20" weight="400">
                      09:00
                    </Title>
                  </li>
                  <li
                    onClick={() => setStudy({ ...study, timestart: "10:00" })}
                  >
                    <Title size="20" weight="400">
                      10:00
                    </Title>
                  </li>
                  <li
                    onClick={() => setStudy({ ...study, timestart: "11:00" })}
                  >
                    <Title size="20" weight="400">
                      11:00
                    </Title>
                  </li>
                  <li
                    onClick={() => setStudy({ ...study, timestart: "12:00" })}
                  >
                    <Title size="20" weight="400">
                      12:00
                    </Title>
                  </li>
                </ul>
              </Item>
            </Inputbox>
          </Row>
          <Row
            style={{
              alignItems: "center",
            }}
          >
            <Textbox>
              <Title>최대 모집 인원</Title>
            </Textbox>
            <Inputbox>
              <Item>
                <Input width="141" height="65">
                  <Title size="20" weight="400">
                    {study.size}
                  </Title>
                  <img
                    alt="dropdown"
                    src={require("../assets/dropdown.png").default}
                    style={{ marginLeft: "21px" }}
                  />
                </Input>
                <ul>
                  <li onClick={() => setStudy({ ...study, size: 0 })}>
                    <Title size="20" weight="400">
                      0
                    </Title>
                  </li>
                  <li onClick={() => setStudy({ ...study, size: 1 })}>
                    <Title size="20" weight="400">
                      1
                    </Title>
                  </li>
                  <li onClick={() => setStudy({ ...study, size: 2 })}>
                    <Title size="20" weight="400">
                      2
                    </Title>
                  </li>
                  <li onClick={() => setStudy({ ...study, size: 3 })}>
                    <Title size="20" weight="400">
                      3
                    </Title>
                  </li>
                  <li onClick={() => setStudy({ ...study, size: 4 })}>
                    <Title size="20" weight="400">
                      4
                    </Title>
                  </li>
                  <li onClick={() => setStudy({ ...study, size: 5 })}>
                    <Title size="20" weight="400">
                      5
                    </Title>
                  </li>
                </ul>
              </Item>
            </Inputbox>
          </Row>
          <Row style={{ alignItems: "center" }}>
            <Textbox>
              <Title>태그</Title>
            </Textbox>
            <Inputbox>
              <Input
                name="tags"
                value={study.tags}
                placeholder="태그를 입력하세요"
                width="1000"
                inputwidth="950"
                marginTop="18"
                validinput="true"
                onChange={onInputChange}
              ></Input>
            </Inputbox>
          </Row>
          <Row style={{ alignItems: "center" }}>
            {study.type === "online" ? (
              <>
                <Textbox>
                  <Title>링크</Title>
                </Textbox>
                <Inputbox>
                  <Input
                    name="link"
                    value={study.link}
                    placeholder="사용하실 온라인 회의 링크를 입력하세요 (Zoom, Google Meet 등)"
                    width="1000"
                    inputwidth="950"
                    marginTop="18"
                    validinput="true"
                    onChange={onInputChange}
                  ></Input>
                </Inputbox>
              </>
            ) : (
              <>
                <Textbox>
                  <Title>장소</Title>
                </Textbox>
                <Inputbox>
                  <Input
                    value={study.location}
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
              </>
            )}
          </Row>
          <Row style={{ alignItems: "center" }}>
            <Textbox>
              <Title>기타 사항</Title>
            </Textbox>
            <Inputbox>
              <Input
                name="extra"
                value={study.extra}
                placeholder="추가적인 사항을 기재해주세요 (조용한 정도, 타이핑/마우스 사용 여부 등)"
                width="1000"
                inputwidth="950"
                marginTop="18"
                validinput="true"
                onChange={onInputChange}
              ></Input>
            </Inputbox>
          </Row>
          <Row
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "120px",
            }}
          >
            <Button
              name="이전으로"
              width="180px"
              height="70px"
              color="#CCCCCC"
              onClick={() => history.push("/studylist")}
            ></Button>
            <Button
              name="스터디 수정하기"
              width="220px"
              height="70px"
              color="#56BE9C"
              onClick={onFormSubmit}
            ></Button>
          </Row>
        </Col>
      </Row>
    </Wrapper>
  ) : (
    <></>
  );
};

export default EditStudy;

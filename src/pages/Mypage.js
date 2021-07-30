import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import Button from "../components/Button";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import Header from "../components/Header";
import Image from "../components/Image";
import Title from "../components/Title";
import {
  getUserInfo,
  getUserStopwatch,
  getUserStudy,
} from "../_actions/actions";

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

const ProfileBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: #56be9c 1px solid;
  border-radius: 5px;
  padding-left: 48px;
  padding-right: 24px;
  padding-top: 32px;
  padding-bottom: 28px;
  width: 1520px;
  height: 220px;
`;

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  border: #56be9c 1px solid;
  border-radius: 5px;
  padding: 25px;
  width: 739px;
  height: 441px;
`;

const Study = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 739px;
  height: 441px;
`;

const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.color || "black"};
  display: inline-block;
  margin-right: 8px;
`;

const Mypage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState({
    user_idx: "",
    user_name: "이름",
    user_email: "abc@ewhain.net",
    user_image: "",
    user_manner: 50,
  });
  const [studies, setStudies] = useState([
    {
      studyprofile: "../assets/rectangle.png",
      name: "스터디명",
      date: "2021-11-11 ㅡ 2021-11-11",
      warning: "누적 경고 0회",
    },
    {
      studyprofile: "../assets/rectangle.png",
      name: "스터디명",
      date: "2021-11-11 ㅡ 2021-11-11",
      warning: "누적 경고 0회",
    },
    {
      studyprofile: "../assets/rectangle.png",
      name: "스터디명",
      date: "2021-11-11 ㅡ 2021-11-11",
      warning: "누적 경고 0회",
    },
    {
      studyprofile: "../assets/rectangle.png",
      name: "스터디명",
      date: "2021-11-11 ㅡ 2021-11-11",
      warning: "누적 경고 0회",
    },
  ]);

  const [times, setTimes] = useState([
    {
      day: "2021-11-13",
      time: "11:22:33 ㅡ 12:22:33",
      total: "12:34:56",
    },
    {
      day: "2021-11-13",
      time: "11:22:33 ㅡ 12:22:33",
      total: "12:34:56",
    },
    {
      day: "2021-11-13",
      time: "11:22:33 ㅡ 12:22:33",
      total: "12:34:56",
    },
  ]);
  useEffect(() => {
    const user_id = window.localStorage.getItem("id");
    dispatch(getUserInfo(user_id)).then((response) => {
      if (response.payload) {
        console.log(response.payload);
        setUser(response.payload);
      } else {
        console.log("회원정보 가져오기 에러");
      }
    });
    dispatch(getUserStudy(user_id)).then((response) => {
      if (response.payload) {
        console.log(response.payload);
        setStudies(response.payload);
      } else {
        console.log("스터디 목록 가져오기 에러");
      }
    });
    dispatch(getUserStopwatch(user_id)).then((response) => {
      if (response.payload) {
        setTimes(response.payload);
      } else {
        console.log("스톱워치 목록 가져오기 에러");
      }
    });
  }, []);

  const logout = () => {
    window.localStorage.setItem("isAuth", "false");
    window.localStorage.setItem("id", "");
    history.push("/");
  };

  return (
    <Wrapper>
      <Header page="3" />

      <Col>
        <Row
          style={{
            width: "1520px",
            marginTop: "118px",
            marginBottom: "18px",
            justifyContent: "flex-start",
          }}
        >
          <Title>내정보</Title>
        </Row>
        <ProfileBox>
          <Row style={{ justifyContent: "space-between", width: "850px" }}>
            <Col>
              <Image
                alt="profile"
                src={require("../assets/profile.png").default}
                width="124"
                height="124"
              />
            </Col>
            <Col style={{ width: "660px" }}>
              <Title size="32" color="#064538">
                이름
              </Title>
              <br />
              <Title size="24" weight="400" marginBottom="5">
                학교 인증 완료
              </Title>

              <Title size="24" weight="400" marginBottom="5">
                qwer1234@ewhain.net
              </Title>

              <Title size="24" weight="400" marginBottom="5">
                매너온도 60°C
              </Title>
            </Col>
          </Row>
          <Button
            name="회원정보수정"
            width="251px"
            height="65px"
            color="#CCCCCC"
            borderRadius="40px"
          ></Button>
          <Button
            name="로그아웃"
            width="251px"
            height="65px"
            color="#CCCCCC"
            borderRadius="40px"
            onClick={logout}
          ></Button>
        </ProfileBox>
        <Row
          style={{
            justifyContent: "space-between",
            marginTop: "103px",
            marginBottom: "18px",
          }}
        >
          <Row style={{ width: "739px", justifyContent: "space-between" }}>
            <Title>참여 스터디 목록</Title>
            <span style={{ float: "right" }}>
              <span style={{}}>
                <Circle />
                개인
              </span>
              <span style={{ color: "#cccccc" }}>
                <Circle color="#cccccc" />
                스터디
              </span>
            </span>
          </Row>
          <Row style={{ width: "739px", justifyContent: "flex-start" }}>
            <Title>스톱워치 사용 기록</Title>
          </Row>
        </Row>
        <Row>
          <ListBox style={{ marginRight: "40px" }}>
            {studies.map((study, i) => {
              if (i > 4) return false;
              return (
                <Study key={i}>
                  <img
                    alt="study profile"
                    src={require("../assets/rectangle.png").default}
                    style={{
                      width: "60px",
                      height: "60px",
                      marginLeft: "58px",
                    }}
                  />
                  <Col style={{ width: "350px" }}>
                    <div style={{ width: "97px" }}>
                      <Title size="20" weight="400">
                        {study.name}
                      </Title>
                    </div>
                    <div style={{ width: "270px" }}>{study.date}</div>
                  </Col>
                  <div style={{ width: "152px", marginRight: "58px" }}>
                    <Title size="20" weight="400" color="#56BE9C">
                      {study.warning}
                    </Title>
                  </div>
                </Study>
              );
            })}
          </ListBox>
          <ListBox>
            {times.map((study, i) => {
              if (i > 3) return false;
              return (
                <Study key={i}>
                  <Col style={{ marginLeft: "58px" }}>
                    <div style={{ width: "141px" }}>
                      <Title size="20" weight="400">
                        {study.day}
                      </Title>
                    </div>
                    <div style={{ width: "270px", marginLeft: "50px" }}>
                      {study.time}
                    </div>
                  </Col>
                  <div style={{ width: "152px", marginRight: "58px" }}>
                    <Title size="20" weight="400" color="#56BE9C">
                      {study.total}
                    </Title>
                  </div>
                </Study>
              );
            })}
          </ListBox>
        </Row>
      </Col>
    </Wrapper>
  );
};

export default Mypage;

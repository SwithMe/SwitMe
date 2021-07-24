import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Image from "../components/Image";
import Title from "../components/Title";
import { getStudydetail, getStudylist } from "../_actions/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const Fix = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  width: 1520px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 76px;
`;
const Detail = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 43px;
`;
const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 29px;
`;
const Content = styled.div`
  width: 274px;
  margin-left: 14px;
  margin-right: 55px;
`;
const Lower = styled.div`
  display: flex;
  flex-direction: row;
  width: 1520px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 140px;
  justify-content: space-between;
`;

const StudyDetail = ({ match }) => {
  const study_id = match.params;
  const dispatch = useDispatch();
  const history = useHistory();
  const [study, setStudy] = useState({
    title: "스터디 이름 쓰는 칸",
    outline:
      "스터디 한줄 소개 스터디 한줄 소개 스터디 한줄 소개 스터디 한줄 소개 스터디 한줄 소개 스터디 한줄 소개 스터디 한줄 소개 스터디 한줄 소개 스터디 한줄 소개 스터디 한줄 소개",
    leader: "스터디장 이름",
    temperature: "80",
    state: "모집중", //추후 삭제 필요
    startdate: "2021-11-11",
    enddate: "2021-11-11",
    type: "온라인",
    starttime: "AM 10:00",
    endtime: "AM 11:00",
    currentnum: 10,
    size: 20,
    tags: "태그1, 태그2, 태그3",
    link: "https://www.naver.com/",
    extra:
      "기타 사항 기타 사항 기타 사항 기타 사항 기타 사항 기타 사항 기타 사항 기타 사항 기타 사항 기타 사항 기타 사항 기타 사항 기타 사항 기타 사항 기타 사항",
  });
  const [isMember, setIsMember] = useState(true);
  const [member, setMember] = useState({
    date: "2021-11-11",
    participation: 3,
    warning: 0,
  });
  useEffect(() => {
    dispatch(getStudylist(study_id)).then((response) => {
      if (response.payload) {
        setStudy(response.payload);
      } else {
        console.log("스터디 상세정보 가져오기 실패");
      }
    });
  }, []);
  return (
    <Fix>
      <Header />
      <Info>
        <div>
          <Image
            alt="study profile"
            src={require("../assets/rectangle.png").default}
            radius="10px"
          ></Image>
        </div>
        <Detail>
          <Title size="32" color="#064538">
            {study.title}
          </Title>
          <Title size="24" weight="400" marginTop="17">
            {study.outline}
          </Title>
          <div
            style={{
              marginTop: "30px",
              marginBottom: "30px",
              border: "3px solid #56BE9C",
              background: "#56BE9C",
            }}
          ></div>
          <Row>
            <div style={{ width: "174px" }}>
              <Title size="20">스터디장</Title>
            </div>
            <Content>
              <Title weight="400" size="20">
                {study.leader}
              </Title>
            </Content>
            <div style={{ width: "174px" }}>
              <Title size="20">매너온도</Title>
            </div>
            <Content>
              <Title weight="400" size="20">
                {study.temperature}℃
              </Title>
            </Content>
          </Row>
          <Row>
            <div style={{ width: "174px" }}>
              <Title size="20">모집상태</Title>
            </div>
            <Content>
              <Title weight="400" size="20">
                {study.state}
              </Title>
            </Content>
            <div style={{ width: "174px" }}>
              <Title size="20">기간</Title>
            </div>
            <Content>
              <Title weight="400" size="20">
                {study.startdate} ~ {study.enddate}
              </Title>
            </Content>
          </Row>
          <Row>
            <div style={{ width: "174px" }}>
              <Title size="20">진행방식</Title>
            </div>
            <Content>
              <Title weight="400" size="20">
                {study.type}
              </Title>
            </Content>
            <div style={{ width: "174px" }}>
              <Title size="20">시간</Title>
            </div>
            <Content>
              <Title weight="400" size="20">
                {study.starttime} ~ {study.endtime}
              </Title>
            </Content>
          </Row>
          <Row>
            <div style={{ width: "174px" }}>
              <Title size="20">현재 / 최대 인원</Title>
            </div>
            <Content>
              <Title weight="400" size="20">
                {study.currentnum} / {study.size}명
              </Title>
            </Content>
            <div style={{ width: "174px" }}>
              <Title size="20">태그</Title>
            </div>
            <Content>
              <Title weight="400" size="20">
                {study.tags}
              </Title>
            </Content>
          </Row>
          <Row>
            <div style={{ width: "174px" }}>
              <Title size="20">링크</Title>
            </div>
            <Content>
              <Title weight="400" size="20">
                {study.link}
              </Title>
            </Content>
          </Row>
          <div
            style={{ border: "1px solid #56BE9C", marginBottom: "30px" }}
          ></div>
          <Row>
            <div style={{ width: "174px" }}>
              <Title size="20">기타사항</Title>
            </div>
            <Title weight="400" size="20">
              {study.extra}
            </Title>
          </Row>
        </Detail>
      </Info>
      <Lower>
        <button
          style={{
            width: "180px",
            height: "70px",
            background: "#cccccc",
            border: "none",
            borderRadius: "10px",
            fontSize: "24px",
            color: "#ffffff",
            fontWeight: "700",
            fontFamily: "NotoSans",
          }}
          onClick={() => history.push("/studylist")}
        >
          목록으로
        </button>
        {isMember ? (
          <div
            style={{
              background: "#56BE9C",
              borderRadius: "10px",
              width: "386px",
              height: "192px",
              marginTop: "-120px",
              marginLeft: "-530px",
              padding: "39px 27px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ width: "190px" }}>
                <Title color="white" size="20">
                  가입일자
                </Title>
              </div>
              <Title color="white" size="20" weight="400">
                {member.date}
              </Title>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "15px",
              }}
            >
              <div style={{ width: "190px" }}>
                <Title color="white" size="20">
                  나의 참여 횟수
                </Title>
              </div>
              <Title color="white" size="20" weight="400">
                {member.participation}회
              </Title>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "15px",
              }}
            >
              <div style={{ width: "190px" }}>
                <Title color="white" size="20">
                  누적 경고 횟수
                </Title>
              </div>
              <Title color="white" size="20" weight="400">
                {member.warning}회
              </Title>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {isMember ? (
          <button
            style={{
              width: "282px",
              height: "70px",
              background: "#cccccc",
              border: "none",
              borderRadius: "10px",
              fontSize: "24px",
              color: "#ffffff",
              fontWeight: "700",
              fontFamily: "NotoSans",
            }}
          >
            탈퇴하기
          </button>
        ) : (
          <button
            style={{
              width: "282px",
              height: "70px",
              background: "#56Be9c",
              border: "none",
              borderRadius: "10px",
              fontSize: "24px",
              color: "#ffffff",
              fontWeight: "700",
              fontFamily: "NotoSans",
            }}
          >
            가입 신청하기
          </button>
        )}
      </Lower>
    </Fix>
  );
};

export default StudyDetail;

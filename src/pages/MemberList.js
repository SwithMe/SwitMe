import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Title from "../components/Title";
import Input from "../components/Input";
import Search from "../assets/search.png";
import Image from "../components/Image";
import Chat_list from "../components/Chat_list";
import { getStudydetail, getMember, warnMember } from "../_actions/actions";
import { useDispatch } from "react-redux";

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

const MemberList = ({ match }) => {
  const { study_id } = match.params;
  console.log(study_id);
  const dispatch = useDispatch();
  const [study, setStudy] = useState("");
  const [members, setMembers] = useState([]);
  const [isLeader, setIsLeader] = useState(false);

  useEffect(() => {
    dispatch(getStudydetail(study_id)).then((response) => {
      if (response.payload) {
        console.log(response.payload);
        setStudy(response.payload.title);
        if (
          response.payload.leader.toString() ===
          window.localStorage.getItem("id")
        )
          setIsLeader(true);
      } else {
        console.log("기존 스터디 정보 가져오기 실패");
      }
    });
    dispatch(getMember(study_id)).then((response) => {
      if (response.payload) {
        console.log("스터디 멤버 정보 가져오기 성공");
        console.log(response.payload);
        setMembers(response.payload);
      } else {
        console.log("스터디 멤버 정보 가져오기 실패");
      }
    });
  }, []);

  const warn = (user_idx) => {
    const data = {
      study_idx: study_id,
      user_idx: user_idx,
    };
    console.log(data);
    dispatch(warnMember(data)).then((response) => {
      if (response.payload) {
        console.log("경고 성공");
      } else {
        console.log("경고 주기 에러 발생");
      }
    });
  };

  return (
    <>
      <Header page="3" />
      <Fix>
        <Row border="none" style={{ marginTop: "1%" }}>
          <Title size="32">{study}</Title>
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
        {members.map((member, i) => (
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
                <Image
                  alt="profile"
                  src={member.user_image}
                  // onerror={Default}
                  // src={require("../assets/circle.png").default}
                  width="80"
                  height="80"
                />
                &emsp;
                <Title weight="400" size="20">
                  {member.user_name}
                </Title>
              </div>
              <Title weight="400" size="20">
                {member.user_manner}°C
              </Title>
              <Title weight="400" size="20">
                {member.user_warning}회
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
              {isLeader ? (
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
                    cursor: "pointer",
                  }}
                  // onClick={openModal}
                  onClick={() => warn(member.user_idx)}
                >
                  경고하기
                </button>
              ) : (
                <></>
              )}
            </div>
          </Row>
        ))}
      </Fix>
    </>
  );
};

export default MemberList;

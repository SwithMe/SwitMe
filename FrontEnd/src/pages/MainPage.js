import React, { useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Title from "../components/Title";

const Fix = styled.div`
  min-height: 100vh;
  text-align: center;
`;

const Wrapper = styled.div`
  display: inline-block;
  flex-direction: column;
`;
const Upper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 74px;
  text-align: left;
`;

const Timer = styled.div`
  width: 1000px;
  height: 350px;
  background-color: #56be9c;
  display: inline-block;
  border-radius: 10px;
  margin-right: 40px;
  margin-top: 18px;
  padding: 97px 220px;
`;

const Time = styled.div`
  width: 560px;
  height: 160px;
  font-size: 110px;
  font-family: "NotoSans";
  font-weight: 700;
  color: white;
  line-height: 159.28px;
  text-align: center;
`;

const Rank = styled.div`
  border: 1px solid #56be9c;
  border-radius: 10px;
  padding: 40px 60px;
  display: flex;
  flex-direction: column;
  width: 480px;
  height: 350px;
  margin-top: 18px;
`;
const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.color || "black"};
  display: inline-block;
  margin-right: 8px;
`;

const MainPage = () => {
  const [ranking, setRanking] = useState([
    { name: "김김김", time: "00:00:00" },
    { name: "김김김", time: "00:00:00" },
    { name: "김김김", time: "00:00:00" },
    { name: "김김김", time: "00:00:00" },
    { name: "김김김", time: "00:00:00" },
  ]);
  return (
    <Fix>
      <Header />
      <Wrapper>
        <Upper>
          <div>
            <Title>나의 누적 공부 시간</Title>
            <div></div>
            <Timer>
              <Time>00:00:00</Time>
            </Timer>
          </div>
          <div>
            <Title>누적 공부 시간 랭킹</Title>
            <span style={{ float: "right" }}>
              <span style={{ marginRight: "31px" }}>
                <Circle />
                개인
              </span>
              <span style={{ color: "#cccccc" }}>
                <Circle color="#cccccc" />
                스터디
              </span>
            </span>
            <Rank>
              {ranking.map((person, i) => {
                return (
                  <div key={i} style={{ marginBottom: "16px", height: "43px" }}>
                    <Title
                      weight="400"
                      size="24"
                      lineHeight="34.75"
                      marginLeft="24"
                    >
                      {i + 1}위
                    </Title>
                    <Title
                      weight="400"
                      size="24"
                      lineHeight="34.75"
                      marginLeft="114"
                    >
                      {person.name}
                    </Title>
                    <Title
                      weight="700"
                      size="24"
                      lineHeight="34.75"
                      color="#56BE9C"
                    >
                      {person.time}
                    </Title>
                  </div>
                );
              })}
            </Rank>
          </div>
        </Upper>
      </Wrapper>
    </Fix>
  );
};

export default MainPage;

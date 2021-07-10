import React, { useEffect, useState, useRef } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Title from "../components/Title";
import Image from "../components/Image";

const Fix = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Upper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 74px;
  justify-content: center;
`;
const Lower = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 65px;
  align-items: center;
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
const Slider = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-direction: row;
  transition: 0.1s;
`;
const Study = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
`;

const MainPage = () => {
  const [ranking, setRanking] = useState([
    { name: "김김김", time: "00:00:00" },
    { name: "김김김", time: "00:00:00" },
    { name: "김김김", time: "00:00:00" },
    { name: "김김김", time: "00:00:00" },
    { name: "김김김", time: "00:00:00" },
  ]);
  const [studies, setStudies] = useState([
    {
      src: "../assets/books",
      name: "스터디명",
      people: 0,
      temperature: "0",
      tags: ["태그1", "태그2", "태그3", "태그4", "태그5", "태그6"],
    },
    {
      src: "../assets/books",
      name: "스터디명",
      people: 0,
      temperature: "0",
      tags: ["태그1", "태그2", "태그3", "태그4", "태그5", "태그6"],
    },
    {
      src: "../assets/books",
      name: "스터디명",
      people: 0,
      temperature: "0",
      tags: ["태그1", "태그2", "태그3", "태그4", "태그5", "태그6"],
    },
    {
      src: "../assets/books",
      name: "스터디명",
      people: 0,
      temperature: "0",
      tags: ["태그1", "태그2", "태그3", "태그4", "태그5", "태그6"],
    },
    {
      src: "../assets/books",
      name: "스터디명",
      people: 0,
      temperature: "0",
      tags: ["태그1", "태그2", "태그3", "태그4", "태그5", "태그6"],
    },
    {
      src: "../assets/books",
      name: "스터디명",
      people: 0,
      temperature: "0",
      tags: ["태그1", "태그2", "태그3", "태그4", "태그5", "태그6"],
    },
    {
      src: "../assets/books",
      name: "스터디명",
      people: 0,
      temperature: "0",
      tags: ["태그1", "태그2", "태그3", "태그4", "태그5", "태그6"],
    },
    {
      src: "../assets/books",
      name: "스터디명",
      people: 0,
      temperature: "0",
      tags: ["태그1", "태그2", "태그3", "태그4", "태그5", "태그6"],
    },
    {
      src: "../assets/books",
      name: "스터디명",
      people: 0,
      temperature: "0",
      tags: ["태그1", "태그2", "태그3", "태그4", "태그5", "태그6"],
    },
    {
      src: "../assets/books",
      name: "스터디명",
      people: 0,
      temperature: "0",
      tags: ["태그1", "태그2", "태그3", "태그4", "태그5", "태그6"],
    },
  ]);
  const move = useRef(0);
  const move_max = useRef((studies.length - 6) * 260);

  const slideRef = useRef();
  useEffect(() => {
    slideRef.current.style.transform = `translateX(-0%)`;
  }, []);

  const slide = (dir) => {
    if (dir === "left" && move.current !== 0) {
      move.current += 260;
      slideRef.current.style.transform = `translateX(${move.current}px)`;
    } else if (dir === "right" && move.current !== -move_max.current) {
      move.current -= 260;
      slideRef.current.style.transform = `translateX(${move.current}px)`;
    }
  };

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
        <Lower>
          <div
            style={{
              width: "1520px",
              display: "inline-block",
            }}
          >
            <Title marginBottom="18">추천 스터디</Title>
            <span style={{ float: "right" }}>
              <span style={{ marginRight: "31px" }}>
                <Circle />
                온라인
              </span>
              <span style={{ color: "#cccccc" }}>
                <Circle color="#cccccc" />
                오프라인
              </span>
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "1640px",
            }}
          >
            <div
              style={{
                width: "18.81px",
                height: "31.81px",
                marginTop: "80px",
                marginRight: "40px",
              }}
              onClick={() => slide("left")}
            >
              <Image
                alt="left arrow"
                src={require("../assets/leftarrow.png").default}
                width="18.81"
                height="31.81"
              />
            </div>
            <div style={{ overflowX: "hidden" }}>
              <Slider ref={slideRef}>
                {studies.map((study, i) => {
                  return (
                    <Study key={i}>
                      <Image
                        alt="스터디 이미지"
                        src="data:image/jpeg;base64,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"
                        height="190"
                      />
                      <Title lineHeight="34.75" size="24" marginTop="11">
                        스터디명
                      </Title>
                      <Title size="18" weight="400" lineHeight="26.06">
                        {study.people}명 / 매너온도 {study.temperature}°C
                      </Title>
                      <div>
                        {study.tags.map((tag, i) => {
                          return (
                            <span style={{ size: "18px", color: "#CCCCCC" }}>
                              #{tag}{" "}
                            </span>
                          );
                        })}
                      </div>
                    </Study>
                  );
                })}
              </Slider>
            </div>
            <div
              style={{
                width: "18.81px",
                height: "31.81px",
                marginTop: "80px",
                marginLeft: "40px",
              }}
              onClick={() => slide("right")}
            >
              <Image
                alt="right arrow"
                src={require("../assets/rightarrow.png").default}
                width="18.81"
                height="31.81"
              />
            </div>
          </div>
        </Lower>
      </Wrapper>
    </Fix>
  );
};

export default MainPage;

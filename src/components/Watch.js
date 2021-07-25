import React, { useState } from "react";
import styled from "styled-components";

const Num = styled.div`
  font-size: 100px;
  letter-spacing: 10px;
  font-weight: bold;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--middle);
  border-radius: 10px;
  margin-left: 40px;
  color: white;
  width: 1000px;
  height: 788px;
  justify-content: center;
  align-items: center;

  .name {
    font-size: 48px;
    height: 70px;
  }

  .timer {
    width: 662px;
    height: 188px;
    font-size: 130px;
    text-align: center;
    border-radius: 10px;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 164px;
  height: 65px;
  border-radius: 40px;
  background-color: var(--deep);
  color: white;
  font-size: 24px;
  margin: 100px 40px;
  font-weight: bold;
  outline: none;
  border: none;
`;

function Watch(props) {
  const { name } = props;
  const [time, setTime] = useState({ s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  //시작 status=0
  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 1000));
  };

  //작동 status=1
  var updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    updatedS++;
    return setTime({ s: updatedS, m: updatedM, h: updatedH });
  };

  //멈춤 status=2
  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const resume = () => {
    start();
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ s: 0, m: 0, h: 0 });
  };

  return (
    <Wrapper>
      <div style={{ height: "150px" }}></div>
      <div className="timerName">
        <div style={{ fontSize: "48px" }}>{name}</div>
      </div>
      <div
        className="display"
        time={time}
        style={{ display: "flex", flexDirection: "row" }}
      >
        <Num>{time.h >= 10 ? time.h : "0" + time.h}</Num>
        <Num>:</Num>
        <Num>{time.m >= 10 ? time.m : "0" + time.m}</Num>
        <Num>:</Num>
        <Num>{time.s >= 10 ? time.s : "0" + time.s}</Num>
      </div>

      <div className="buttons">
        {status === 0 ? <Button onClick={start}>시작하기</Button> : ""}

        {status === 1 ? (
          <div style={{ display: "flex", flexDirection: "row" }}>
            {/* <Button onClick={stop}>일시정지</Button>{" "} */}
            <Button
              style={{ backgroundColor: "white", color: "var(--deep)" }}
              onClick={reset}
            >
              초기화
            </Button>
          </div>
        ) : (
          ""
        )}

        {status === 2 ? (
          <div style={{ display: "flex", flexDirection: "row" }}>
            {/* <Button onClick={resume}>재개하기</Button>{" "} */}
            <Button
              style={{ backgroundColor: "white", color: "var(--deep)" }}
              onClick={reset}
            >
              정지
            </Button>
          </div>
        ) : (
          ""
        )}
      </div>
    </Wrapper>
  );
}

export default Watch;

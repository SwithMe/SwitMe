import React, { useState, useCallback, useRef, useEffect } from "react";
import styled from "styled-components";
import TimerListContent from "./TimerListContent";
import { addStopwatch, getTimerList } from "../_actions/actions";
import { useDispatch } from "react-redux";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 510px;
  height: 780px;
  border: 1px solid var(--middle);
  box-sizing: border-box;
  border-radius: 15px;
  font-size: 24px;

  .head {
    font-weight: bold;
    height: 84px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-color: var(--middle);
    color: white;
    justify-content: center;
  }
`;

const Button = styled.button`
  display: fixed;
  justify-content: center;
  align-items: center;
  width: 164px;
  height: 40px;
  border-radius: 20px;
  background-color: var(--deep);
  color: white;
  font-size: 24px;
  font-size: 20px;
  outline: none;
  border: none;
  margin-top: 50px;
`;

const AddTimer = styled.input`
  padding: 31px;
  font-size: 20px;
  height: 67px;
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid var(--middle);
`;

function TimerList({ openModal }) {
  //타이머 목록
  const [status, setStatus] = useState(0);
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const [timers, setTimers] = useState([
    {
      id: 1,
      name: "타이머1",
      time: "00",
    },
    {
      id: 2,
      name: "타이머2",
      time: "00",
    },
  ]);

  useEffect(() => {
    dispatch(getTimerList(window.localStorage.getItem("id"))).then(
      (response) => {
        if (response.payload) {
          console.log(response.payload);
          setTimers(response.payload);
        } else {
          console.log("스톱워치 리스트 에러");
        }
      }
    );
  }, [toggle]);

  //추가하기 status:1
  const Add = () => {
    setStatus(1);
  };

  //input
  const [value, setValue] = useState("");

  const onInputChange = useCallback((e) => {
    setValue(e.target.value);
    console.log(value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      dispatch(
        addStopwatch(window.localStorage.getItem("id"), { timer_name: value })
      ).then((response) => {
        if (response.payload) {
          console.log(response.payload);
          setToggle(!toggle);
        } else {
          console.log("스톱워치 추가 에러");
        }
      });
      setValue("");
      e.preventDefault();
      setStatus(0);
    },
    [value]
  );

  //삭제
  const onRemove = useCallback(
    (id) => {
      setTimers(timers.filter((timer) => timer.id !== id));
    },
    [timers]
  );

  //수정

  return (
    <Wrapper>
      <div class="head">2021.07.18. 일요일</div>

      <div>
        {timers.map((timer) => (
          <TimerListContent
            timer={timer}
            key={timer.id}
            onRemove={onRemove}
            openModal={openModal}
          ></TimerListContent>
        ))}
      </div>

      {status === 1 ? (
        <AddTimer
          type="text"
          placeholder="타이머명을 입력하세요"
          value={value}
          onChange={onInputChange}
        ></AddTimer>
      ) : (
        ""
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {status === 0 ? <Button onClick={Add}>+ 추가하기</Button> : ""}
        {status === 1 ? <Button onClick={onSubmit}>+ 추가하기</Button> : ""}
      </div>
    </Wrapper>
  );
}

export default TimerList;

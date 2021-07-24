import React, { useState, useCallback, useRef } from "react";
import styled from "styled-components";
import TimerListContent from "./TimerListContent";

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

function Watch(props) {
  //타이머 목록
  const [status, setStatus] = useState(0);
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

  const nextId = useRef(2);

  const onInsert = useCallback(
    (value) => {
      const timer = {
        id: nextId.current,
        name: value,
        time: "00",
      };
      setTimers(timers.concat(timer));
      nextId.current += 1;
    },
    [timers]
  );

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");
      e.preventDefault();
      setStatus(0);
    },
    [onInsert, value]
  );

  //삭제
  const onRemove = useCallback(
    (id) => {
      setTimers(timers.filter((timer) => timer.id !== id));
    },
    [timers]
  );

  return (
    <Wrapper>
      <div class="head">2021.07.18. 일요일</div>

      <div>
        {timers.map((timer) => (
          <TimerListContent
            timer={timer}
            key={timer.id}
            onRemove={onRemove}
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

export default Watch;

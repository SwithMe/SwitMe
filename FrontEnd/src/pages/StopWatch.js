import React, { useState } from "react";
import styled from "styled-components";
import Header_watch from "../components/Header_watch";
import Watch from "../components/Watch";
import TimerList from "../components/TimerList";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-right: 200px;
  padding-left: 200px;
  padding-top: 118px;
`;

const StopWatch = () => {
  const [status, setStatus] = useState(0);

  return (
    <div>
      <Header_watch />
      <Wrapper>
        <TimerList></TimerList>
        <Watch></Watch>
      </Wrapper>
    </div>
  );
};

export default StopWatch;

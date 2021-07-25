import React, { useState } from "react";
import styled from "styled-components";
import Header_watch from "../components/Header_watch";
import Watch from "../components/Watch";
import TimerList from "../components/TimerList";
import ModalTimer from "../components/ModalTimer";
import Modal from "../components/Modal";

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
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <ModalTimer
        open={modalOpen}
        close={closeModal}
        onInputChange={TimerList.onInputChange}
        onSubmit={TimerList.onSubmit}
      ></ModalTimer>
      <Header_watch />
      <Wrapper>
        <TimerList openModal={openModal}></TimerList>
        <Watch></Watch>
      </Wrapper>
    </div>
  );
};

export default StopWatch;

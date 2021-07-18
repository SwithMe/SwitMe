import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import pencil from "../assets/pencil.png";
import whitePencil from "../assets/whitepencil.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-right: 200px;
  padding-left: 200px;
  padding-top: 118px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 479px;
  height: 780px;
  border: 1px solid var(--middle);
  box-sizing: border-box;
  border-radius: 15px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 31px;
  border-bottom: 1px solid var(--middle);
  box-sizing: border-box;
  height: 67px;
  font-size: 20px;

  .name {
    width: 256px;
  }
  .time {
    display: flex;
    justify-content: center;
    color: var(--middle);
    width: 102px;
  }
  .edit {
    width: 19.1px;
    height: 19.1px;
    background: url(${pencil});
    background-size: 100%;
  }

  :hover {
    background-color: var(--middle);
    color: white;
    .name {
      color: white;
    }
    .time {
      color: white;
    }
    .edit {
      background: url(${whitePencil});
      background-size: 100%;
    }
  }
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

const Watch = styled.div`
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
`;

const StopWatch = () => {
  return (
    <div>
      <Header />
      <Wrapper>
        <List>
          <Content
            style={{
              backgroundColor: "var(--middle)",
              color: "white",
              fontSize: "24px",
              justifyContent: "center",
            }}
          >
            2021.07.18. 일요일
          </Content>

          <Content>
            <div class="name">타이머명</div>
            <div class="time">00:00:00</div>
            <div class="edit"></div>
          </Content>
          <Content>
            <div class="name">타이머명</div>
            <div class="time">00:00:00</div>
            <div class="edit"></div>
          </Content>
          <Content>
            <div class="name">타이머명</div>
            <div class="time">00:00:00</div>
            <div class="edit"></div>
          </Content>
          <Content>
            <div class="name">타이머명</div>
            <div class="time">00:00:00</div>
            <div class="edit"></div>
          </Content>

          <AddTimer type="text" placeholder="타이머명을 입력하세요"></AddTimer>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button style={{ height: "40px", fontSize: "20px" }}>
              + 추가하기
            </Button>
          </div>
        </List>

        <Watch>
          <div class="name">타이머명</div>
          <div class="timer">00:00:00</div>
          <Button>시작</Button>
        </Watch>
      </Wrapper>
    </div>
  );
};

export default StopWatch;

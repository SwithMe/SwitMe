import React from "react";
import styled from "styled-components";
import pencil from "../assets/pencil.png";
import whitePencil from "../assets/whitepencil.png";

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 31px;
  border-bottom: 1px solid var(--middle);
  box-sizing: border-box;
  height: 67px;
  font-size: 20px;

  .green {
    width: 180px;
    display: fixed;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .name {
    width: auto;
  }
  .time {
    font-weight: bold;
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
  .delete {
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
      background-size: 100%;
      background: url(${whitePencil});
    }
    .delete {
      background-size: 100%;
      background: url(${whitePencil});
    }
  }
`;

const TimerListContent = ({ timer, onRemove }) => {
  const { id, name, time } = timer;
  return (
    <Content>
      <div class="name">{name}</div>
      <div class="green">
        <div class="time">{time}</div>
        <div class="edit"></div>
        <div class="delete" onClick={() => onRemove(id)}></div>
      </div>
    </Content>
  );
};

export default TimerListContent;

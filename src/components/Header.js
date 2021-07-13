import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import dot from "../assets/search.png";

const Logo = styled.div`
  background: ${logo};
  background-size: contain;
  background-repeat: no-repeat;
  height: 60px;
  width: 262px;
  margin-right: 100px;
`;

const Menu = styled.li`
  list-style: none;
  display: table-cell;
  width: 80px;
  text-align: center;
  font-size: 15px;
  color: gray;
  padding-bottom: 12px;

  :hover {
    padding-bottom: 10px;
    border-bottom: 2px solid;
    border-color: var(--point);
    color: #56be9c;
  }
`;
const Search = styled.input`
  border-radius: 10px;
  height: 30px;
  outline: solid;
  border-radius: 10px;
  width: 330px;
`;

// const Header = () => {
//   return <div>헤더</div>;
// };

function Header() {
  return (
    <u1>
      <Logo></Logo>
      <Menu>홈</Menu>
      <Menu>스톱워치</Menu>
      <Menu>스터디</Menu>
    </u1>
  );
}
export default Header;

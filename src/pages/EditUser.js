import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import Image from "../components/Image";
import ImageUpload from "../components/ImageUpload";

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: content;
`;

const Input = styled.input`
  width: 480px;
  height: 65px;
  border-radius: 10px;
  border: 1px solid var(--middle);
  margin: 20px;
  outline: none;
  font-size: 20px;
  padding: 10px;
`;

const Box = styled.div`
  width: 480px;
  height: 65px;
  border-radius: 10px;
  border: 1px solid #cccccc;
  margin: 20px;
  outline: none;
  font-size: 20px;
  padding: 10px;
`;

const Button = styled.button`
  width: 228px;
  height: 70px;
  background: var(--middle);
  border-radius: 10px;
  margin: 10px;
  margin-top: 40px;
  color: white;
  font-size: 24px;
  outline: none;
  border: none;
`;

const Signup = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    realname: "",
    email: "",
    pw: "",
    pw2: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    if (name !== "useragree") setUser({ ...user, [name]: value });
    else setUser({ ...user, useragree: e.target.checked ? "Y" : "N" });
  };

  return (
    <Wrapper>
      <Image width="198px" height="198px" src={user.user_image}></Image>
      <Box>{user.user_name}</Box>
      <Box>{user.user_email}</Box>
      <Input
        placeholder="새 비밀번호 (영문, 숫자, 특수기호 포함 8~16자)"
        onChange={onInputChange}
      ></Input>
      <Input placeholder="비밀번호 확인" onChange={onInputChange}></Input>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <Button style={{ backgroundColor: "#cccccc" }}>뒤로가기</Button>
        <Button>수정하기</Button>
      </div>

      {/* </form> */}
    </Wrapper>
  );
};

export default Signup;

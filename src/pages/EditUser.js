import React, { useState } from "react";
import styled from "styled-components";
import Input2 from "../components/Input2";
import Button from "../components/Button";
import { useHistory } from "react-router";
import Image from "../components/Image";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 50vh;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  //justify-content: flex-start;
  width: 98%;
  color: #064538;
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
      {/* <form onSubmit={formSubmit}> */}
      <Image></Image>
      <Items>
        <Input2
          name="username"
          placeholder="이름"
          width="29rem"
          onChange={onInputChange}
        ></Input2>
        <Input2
          name="useremail"
          placeholder="ewhain 이메일 주소"
          width="29rem"
          onChange={onInputChange}
        ></Input2>
        <Input2
          name="userpassword"
          placeholder="비밀번호(영문, 숫자, 특수기호 포함 8~16자)"
          width="29rem"
          onChange={onInputChange}
        ></Input2>
        <Input2
          name="userpassword2"
          placeholder="비밀번호 확인"
          width="29rem"
          onChange={onInputChange}
        ></Input2>
        <Button
          type="submit"
          name="회원가입"
          width="29rem"
          color="#56BE9C"
        ></Button>
      </Items>
      {/* </form> */}
    </Wrapper>
  );
};

export default Signup;

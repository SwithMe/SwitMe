import React, { useState } from "react";
import styled from "styled-components";
import Input2 from "../components/Input2";
import Button from "../components/Button";
import logo from "../assets/logo.png";
import { useDispatch } from "react-redux";
import { signup } from "../_actions/actions";

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
  height: 500px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  //justify-content: flex-start;
  width: 98%;
  color: #064538;
`;

const Checkbox = styled.input`
  margin-right: 1rem;
  width: 2rem;
  height: 2rem;
  border: 1px solid #cccccc;
  border-radius: 10px;
  background-color: #56be9c;
  cursor: pointer;
`;

const Signup = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    useremail: "",
    userpassword: "",
    userpassword2: "",
    useragree: "N",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    if (name !== "useragree") setUser({ ...user, [name]: value });
    else setUser({ ...user, useragree: e.target.checked ? "Y" : "N" });
  };

  const formSubmit = async (evt) => {
    evt.preventDefault();
    if (user.useragree !== "Y") alert("개인 정보 수집 약관에 동의해야합니다.");
    else if (user.userpassword !== user.userpassword2)
      alert("비밀번호와 비밀번호 확인이 동일하지 않습니다.");
    else {
      const submitUser = {
        username: user.username,
        useremail: user.useremail,
        userpassword: user.userpassword,
        useragree: user.useragree,
      };
      // dispatch(signup(submitUser)).then((response) => {
      //   console.log(response);
      //   if (response.payload) {
      //     console.log("회원가입 성공");
      //   } else {
      //     alert("회원가입 오류");
      //   }
      // });
    }
  };

  return (
    <Wrapper>
      <form onSubmit={formSubmit}>
        <Items>
          <img alt="로고" src={logo} style={{ marginBottom: "1rem" }}></img>
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
          <TextBox>
            <Checkbox
              name="useragree"
              type="checkbox"
              id="agree"
              onChange={onInputChange}
            ></Checkbox>
            <label for="agree">
              <div>개인 정보 수집 약관에 동의합니다.</div>
            </label>
          </TextBox>
          <Button type="submit" name="회원가입" width="29rem" color="#56BE9C" />
        </Items>
      </form>
    </Wrapper>
  );
};

export default Signup;

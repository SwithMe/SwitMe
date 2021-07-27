import React, { useState } from "react";
import styled from "styled-components";
import Input2 from "../components/Input2";
import Button from "../components/Button";
import logo from "../assets/logo.png";

//findPassword 백 연동을 위함
import { find_password } from "../_actions/actions";
import { useDispatch } from "react-redux";

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
  height: 400px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 96%;
  color: #064538;
`;

const FindPassword = () => {
  //findPassword 백 연동 시작부분
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    useremail: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const formSubmit = async (evt) => {
    evt.preventDefault();
    dispatch(find_password(user)).then((response) => {
      console.log(response);
      if (response.payload) {
        console.log("비밀번호 찾기 성공");
      } else {
        alert("비밀번호 찾기 오류");
      }
    });
  };
  //findPassword 백 연동 끝부분

  return (
    <Wrapper>
      <form onSubmit={formSubmit}>
        <Items>
          <img alt="로고" src={logo} style={{ marginBottom: "1rem" }} />
          <Input2
            name="username"
            placeholder="가입된 실명을 입력해주세요"
            width="29rem"
            onChange={onInputChange}
          ></Input2>
          <Input2
            name="userpassword"
            placeholder="가입된 이메일 주소를 입력해주세요"
            width="29rem"
            onChange={onInputChange}
          ></Input2>
          <TextBox>
            <div>가입된 이메일 주소로 확인 메일이 발송됩니다.</div>
          </TextBox>
          <Button
            type="submit"
            name="비밀번호 찾기"
            width="29rem"
            color="#56BE9C"
          />
        </Items>
      </form>
    </Wrapper>
  );
};

export default FindPassword;

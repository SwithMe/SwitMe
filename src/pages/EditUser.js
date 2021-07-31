import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import Default from "../assets/profile.png";
import Edit from "../assets/edit.png";
import ImageUpload from "../components/ImageUpload";
import {
  getUserInfo,
  getUserStopwatch,
  getUserStudy,
} from "../_actions/actions";

const Wrapper = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: content;
`;

const Profile = styled.div`
  width: 198px;
  height: 198px;
  border-radius: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  background: url(${Default});
  background-size: 100%;
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
  cursor: pointer;
`;

const EditUser = () => {
  const [user, setUser] = useState({
    realname: "",
    email: "",
    pw: "",
    pw2: "",
  });

  const history = useHistory();

  const uploadImage = () => {
    var input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.click();
    input.onchange = function (e) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);

      reader.onload = function () {
        console.log(reader.result);
      };
    };
  };

  return (
    <Wrapper>
      <Profile>
        {/* <Image src={Profile}></Image> */}
        <img
          onClick={uploadImage}
          src={Edit}
          style={{ width: "51px", height: "51px", cursor: "pointer" }}
        ></img>
      </Profile>

      <div style={{ height: "50px" }}></div>
      <Box>{user.user_name}</Box>
      <Box>{user.user_email}</Box>
      <Input placeholder="새 비밀번호 (영문, 숫자, 특수기호 포함 8~16자)"></Input>
      <Input placeholder="비밀번호 확인"></Input>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <Button
          style={{ backgroundColor: "#cccccc" }}
          onClick={() => history.push("/mypage")}
        >
          뒤로가기
        </Button>
        <Button>수정하기</Button>
      </div>

      {/* </form> */}
    </Wrapper>
  );
};

export default EditUser;

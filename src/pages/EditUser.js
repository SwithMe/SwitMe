import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router";
import Default from "../assets/profile.png";
import { useDispatch } from "react-redux";
import Edit from "../assets/edit.png";
import { getUserInfo, editUser } from "../_actions/actions";
import ImageUpload from "../components/ImageUpload";
import { checkPropTypes } from "prop-types";

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
  background: url(${(props) => props.src});
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
  display: flex;
  align-items: center;
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

const EditUser = ({ match }) => {
  const { user_idx } = match.params;
  const history = useHistory();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    user_idx: "",
    user_name: "김선달",
    user_email: "whkakrkr@gmail.com",
    file: "",

    profile: Default,
    new_password: "",
    check_new_password: "",
  });

  useEffect(() => {
    dispatch(getUserInfo(user_idx)).then((response) => {
      if (response.payload) {
        setUser(response.payload);
        // setIsSet(true);
        console.log(user);
      } else {
        console.log("기존 유저 정보 가져오기 실패");
      }
    });
  }, []);

  //이미지업로드
  const onInputChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submit = () => {
    if (user.check_new_password !== user.new_password) {
      alert("비밀번호 확인이 일치하지 않습니다");
    } else {
      console.log(user.new_password);
    }
  };
  // const history = useHistory();

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
        setUser({ profile: reader.result });
      };
    };
  };

  return (
    <Wrapper>
      <Profile src={user.profile}>
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
      <Input
        name="new_password"
        onChange={onInputChange}
        value={user.new_password}
        placeholder="새 비밀번호 (영문, 숫자, 특수기호 포함 8~16자)"
        type="text"
      ></Input>
      <Input
        name="check_new_password"
        onChange={onInputChange}
        value={user.check_new_password}
        placeholder="비밀번호 확인"
        type="text"
      ></Input>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <Button
          style={{ backgroundColor: "#cccccc" }}
          onClick={() => history.push("/mypage")}
        >
          뒤로가기
        </Button>
        <Button onClick={submit}>수정하기</Button>
      </div>

      {/* </form> */}
    </Wrapper>
  );
};

export default EditUser;

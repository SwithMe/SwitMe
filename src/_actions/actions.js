import axios from "axios";
import { USER_SERVER } from "../config";

const LOGIN = "LOGIN";
const SIGNUP = "SIGNUP";
const GET_TOTAL_TIME = "GET_TOTAL_TIME";
const GET_RANK = "GET_RANK";
const GET_RANK_STUDY = "GET_RANK_STUDY";
const RECOMMENDED_STUDY = "RECOMMENDED_STUDY";
const GET_STUDYLIST = "GET_STUDYLIST";
const GET_STUDYDETAIL = "GET_STUDYDETAIL";
const JOIN_STUDY = "JOIN_STUDY";
const LEAVE_STUDY = "LEAVE_STUDY";
const MAKE_STUDY = "MAKE_STUDY";
const GET_MESSAGES = "GET_MESSAGES";
const GET_CHATLIST = "GET_CHATLIST";
const GET_USER_INFO = "GET_USER_INFO";
const GET_USER_STUDY = "GET_USER_STUDY";
const GET_USER_STOPWATCH = "GET_USER_STOPWATCH";
const EDIT_STUDY = "EDIT_STUDY";
const GET_MEMBER = "GET_MEMBER";
const WARN_MEMBER = "WARN_MEMBER";
const EDIT_USER = "EDIT_USER";

//로그인, 회원가입 관련
export const login = (dataToSubmit) => {
  const request = axios
    .post(`${USER_SERVER}/auth/login`, dataToSubmit)
    .then((response) => response.headers.get("Authorization"))
    .catch((error) => {});
  return {
    type: LOGIN,
    payload: request,
  };
};

export const signup = (dataToSubmit) => {
  const request = axios
    .post(`${USER_SERVER}/auth/signup`, dataToSubmit)
    .then((response) => response.data)
    .catch((error) => {});
  return {
    type: SIGNUP,
    payload: request,
  };
};

//메인페이지 관련
export const getTotalTime = (id) => {
  const request = axios
    .get(`${USER_SERVER}/main/mytime/${id}`)
    .then((response) => response.data)
    .catch((error) => {});
  return { type: GET_TOTAL_TIME, payload: request };
};

export const getRanking = () => {
  const request = axios
    .get(`${USER_SERVER}/main/rank/individual`)
    .then((response) => response.data)
    .catch((error) => {});
  return { type: GET_RANK, payload: request };
};

export const getRankingstudy = () => {
  const request = axios
    .get(`${USER_SERVER}/main/rank/study`)
    .then((response) => response.data)
    .catch((error) => {
      if (error.response) console.log(error.response);
    });
  return { type: GET_RANK_STUDY, payload: request };
};

export const recommendedStudy = () => {
  const request = axios
    .get(`${USER_SERVER}/main/recomstudy`)
    .then((response) => response.data)
    .catch((error) => {});
  return { type: RECOMMENDED_STUDY, payload: request };
};

//스터디 리스트 불러오기
export const getStudylist = (dataToSubmit) => {
  const request = axios
    .post(`${USER_SERVER}/list/array`, dataToSubmit)
    .then((response) => response.data)
    .catch((error) => {});
  return { type: GET_STUDYLIST, payload: request };
};

//스터디 세부사항 불러오기
export const getStudydetail = (id) => {
  const request = axios
    .get(`${USER_SERVER}/list/array/study/${id}`)
    .then((response) => response.data)
    .catch((error) => {});
  return { type: GET_STUDYDETAIL, payload: request };
};

//스터디 가입
export const joinStudy = (user_id, study_id) => {
  const request = axios
    .put(`${USER_SERVER}/list/join/${user_id}/${study_id}`)
    .then((response) => response.data)
    .catch((error) => {});
  return { type: JOIN_STUDY, payload: request };
};

//스터디 탈퇴
export const leaveStudy = (user_id, study_id) => {
  const request = axios
    .delete(`${USER_SERVER}/list/leave/${user_id}/${study_id}`)
    .then((response) => response.data)
    .catch((error) => {});
  return { type: LEAVE_STUDY, payload: request };
};

//스터디 개설
export const makestudy = (dataToSubmit) => {
  const request = axios
    .post(`${USER_SERVER}/list/array/enroll`, dataToSubmit)
    .then((request) => request.data)
    .catch((error) => {});
  return {
    type: MAKE_STUDY,
    payload: request,
  };
};

//메세지 내역 다 가져오기
export const getMessages = (room_idx) => {
  const request = axios
    .get(`${USER_SERVER}/chat/room/${room_idx}`)
    .then((request) => request.data)
    .catch((error) => {});
  return { type: GET_MESSAGES, payload: request };
};

//채팅 리스트 다 가져오기
export const getChatlist = (user_idx) => {
  const request = axios
    .get(`${USER_SERVER}/chat/room_list/${user_idx}`)
    .then((request) => request.data)
    .catch((error) => {});
  return { type: GET_CHATLIST, payload: request };
};

//마이페이지
//사용자 정보 가져오기
export const getUserInfo = (user_idx) => {
  const request = axios
    .get(`${USER_SERVER}/api/mypage/user/${user_idx}`)
    .then((request) => request.data)
    .catch((error) => {});
  return { type: GET_USER_INFO, payload: request };
};

//사용자가 가입한 스터디 가져오기
export const getUserStudy = (user_idx) => {
  const request = axios
    .get(`${USER_SERVER}/api/mypage/study_list/${user_idx}`)
    .then((request) => request.data)
    .catch((error) => {});
  return { type: GET_USER_STUDY, payload: request };
};

//사용자 스톱워치 내역 가져오기
export const getUserStopwatch = (user_idx) => {
  const request = axios
    .get(`${USER_SERVER}/api/mypage/timer_log/${user_idx}`)
    .then((request) => request.data)
    .catch((error) => {});
  return { type: GET_USER_STOPWATCH, payload: request };
};

//스터디 수정
export const editstudy = (study_id, dataToSubmit) => {
  const request = axios
    .post(`${USER_SERVER}/list/array/fix/${study_id}`, dataToSubmit)
    .then((request) => request.data)
    .catch((error) => {});
  return {
    type: EDIT_STUDY,
    payload: request,
  };
};

//스터디 멤버리스트 불러오기
export const getMember = (study_id) => {
  const request = axios
    .get(`${USER_SERVER}/api/study/members/${study_id}`)
    .then((request) => request.data)
    .catch((error) => {});
  return {
    type: GET_MEMBER,
    payload: request,
  };
};

//스터디원 경고 주기
export const warnMember = (dataToSubmit) => {
  const request = axios
    .post(`${USER_SERVER}/api/study/members/warning`, dataToSubmit)
    .then((response) => response.payload)
    .catch((error) => {
      console.log("error");
    });
  return {
    type: WARN_MEMBER,
    payload: request,
  };
};

const actions = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isAuth: "true" };
    default:
      return state;
  }
};

export default actions;

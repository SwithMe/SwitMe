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
const EDIT_STUDY = "EDIT_STUDY";
const GET_MESSAGES = "GET_MESSAGES";
const GET_CHATLIST = "GET_CHATLIST";
const GET_USER_INFO = "GET_USER_INFO";

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

export const getTotalTime = (id) => {
  const request = axios
    .get(`${USER_SERVER}/main/mytime?user_idx=${id}`)
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
    .catch((error) => {});
  return { type: GET_RANK, payload: request };
};

export const recommendedStudy = () => {
  const request = axios
    .get(`${USER_SERVER}/main/recomstudy`)
    .then((response) => response.data)
    .catch((error) => {});
  return { type: RECOMMENDED_STUDY, payload: request };
};

export const getStudylist = (dataToSubmit) => {
  const request = axios
    .post(`${USER_SERVER}/list/array`, dataToSubmit)
    .then((response) => response.data)
    .catch((error) => {});
  return { type: GET_STUDYLIST, payload: request };
};

export const getStudydetail = (id) => {
  const request = axios
    .get(`${USER_SERVER}/list/array?study_idx=${id}`)
    .then((response) => response.data)
    .catch((error) => {});
  return { type: GET_STUDYDETAIL, payload: request };
};

export const joinStudy = (user_id, study_id) => {
  const request = axios
    .put(`${USER_SERVER}/list/join?user_idx=${user_id}&sutdy_idx=${study_id}`)
    .then((response) => response.data)
    .catch((error) => {});
  return { tyoe: JOIN_STUDY, payload: request };
};

export const leaveStudy = (user_id, study_id) => {
  const request = axios
    .delete(
      `${USER_SERVER}/mylist/leave?user_idx=${user_id}&study_idx=${study_id}`
    )
    .then((response) => response.data)
    .catch((error) => {});
  return { type: LEAVE_STUDY, payload: request };
};

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

export const editstudy = (study_id) => {
  const request = axios
    .get(`${USER_SERVER}/list/array/fix?study_idx=${study_id}`)
    .then((request) => request.data)
    .catch((error) => {});
  return {
    type: EDIT_STUDY,
    payload: request,
  };
};

export const getMessages = (room_idx) => {
  const request = axios
    .get(`${USER_SERVER}/chat/room?room_idx=${room_idx}`)
    .then((request) => request.data)
    .catch((error) => {});
  return { type: GET_MESSAGES, payload: request };
};

export const getChatlist = (user_idx) => {
  const request = axios
    .get(`${USER_SERVER}/chat/room_list?user_idx=${user_idx}`)
    .then((request) => request.data)
    .catch((error) => {});
  return { type: GET_CHATLIST, payload: request };
};

export const getUserInfo = (user_idx) => {
  const request = axios
    .get(`${USER_SERVER}/api/mypage/user?user_idx=${user_idx}`)
    .then((request) => request.data)
    .catch((error) => {});
  return { type: GET_USER_INFO, payload: request };
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

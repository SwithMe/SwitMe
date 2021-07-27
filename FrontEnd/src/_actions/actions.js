import axios from "axios";
import { USER_SERVER } from "../config";

const LOGIN = "LOGIN";
const FIND_PASSWORD = "FIND_PASSWORD";
const SIGNUP = "SIGNUP";
const GET_TOTAL_TIME = "GET_TOTAL_TIME";
const GET_RANK = "GET_RANK";
const RECOMMENDED_STUDY = "RECOMMENDED_STUDY";
const GET_STUDYLIST = "GET_STUDYLIST";
const GET_STUDYDETAIL = "GET_STUDYDETAIL";
const JOIN_STUDY = "JOIN_STUDY";
const LEAVE_STUDY = "LEAVE_STUDY";
const MAKE_STUDY = "MAKE_STUDY";
const USER_INFO = "USER_INFO";
const USER_STUDY_LIST = "USER_STUDY_LIST";
const USER_WATCH_LOG = "USER_WATCH_LOG";

export const login = (dataToSubmit) => {
  const request = axios
    .post(`${USER_SERVER}/auth/login`, dataToSubmit)
    .then((response) => response.data)
    .catch((error) => {});
  return {
    type: LOGIN,
    payload: request,
  };
};

export const find_password = (dataToSubmit) => {
  const request = axios
    .post(`${USER_SERVER}/auth/find`, dataToSubmit)
    .then((response) => response.data)
    .catch((error) => {});
  return {
    type: FIND_PASSWORD,
    payload: request,
  };
};

export const signup = (dataToSubmit) => {
  const request = axios
    .post(`${USER_SERVER}/auth/signin`, dataToSubmit)
    .then((response) => response.data)
    .catch((error) => {});
  return {
    type: SIGNUP,
    payload: request,
  };
};

//mypage
export const userInfo = (id) => {
  const request = axios
    .get(`${USER_SERVER}/mypage/user?user_idx=${id}`)
    .then((response) => response.data)
    .catch((error) => {});
  return { type: USER_INFO, payload: request };
};

export const userStudyList = (id) => {
  const request = axios
    .get(`${USER_SERVER}/mypage/study_list?user_idx=${id}`)
    .then((response) => response.data)
    .catch((error) => {});
  return { type: USER_STUDY_LIST, payload: request };
};

export const userWatchLog = (id) => {
  const request = axios
    .get(`${USER_SERVER}/mypage/watch_log?user_idx=${id}`)
    .then((response) => response.data)
    .catch((error) => {});
  return { type: USER_WATCH_LOG, payload: request };
};

//mainpage
export const getTotalTime = (id) => {
  const request = axios
    .get(`${USER_SERVER}/main/mytime?user_idx=${id}`)
    .then((response) => response.data)
    .catch((error) => {});
  return { type: GET_TOTAL_TIME, payload: request };
};

export const getRanking = () => {
  const request = axios
    .get(`${USER_SERVER}/main/rank`)
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

const actions = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isAuth: action.payload.success };
    default:
      return state;
  }
};

export default actions;

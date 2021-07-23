import axios from "axios";
import { USER_SERVER } from "../config";

const LOGIN = "LOGIN";
const SIGNUP = "SIGNUP";
const GET_TOTAL_TIME = "GET_TOTAL_TIME";
const GET_RANK = "GET_RANK";

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

const actions = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isAuth: action.payload.success };
    default:
      return state;
  }
};

export default actions;

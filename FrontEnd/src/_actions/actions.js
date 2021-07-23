import axios from "axios";
import { USER_SERVER } from "../config";

const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const login = (dataToSubmit) => {
  const request = axios
    .post(`${USER_SERVER}/api/login`, dataToSubmit)
    .then((response) => response.data)
    .catch((error) => {});
  return {
    type: LOGIN_SUCCESS,
    payload: request,
  };
};

const initialState = {
  isAuth: false,
};

const actions = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, isAuth: action.payload.success };
    default:
      return state;
  }
};

export default actions;

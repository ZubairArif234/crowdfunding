import custAxios from "../../services/axiosConfig";
import { getToken } from "../../hooks/auth";
import { chatConstants } from "../constants/chatConstants";
import { attachToken } from "../../services/axiosConfig";

export const getChats = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: chatConstants.GET_CHATS_REQUEST });
      attachToken();
      const res = await custAxios.get("/chat/getChats");
      if (res) {
        dispatch({
          type: chatConstants.GET_CHATS_SUCCESS,
          payload: res.data,
        });
      }
    } catch (err) {
      dispatch({ type: chatConstants.GET_CHATS_FAILURE, payload: err });
    }
  };
};

export const getChat = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: chatConstants.GET_CHAT_REQUEST });
      attachToken();
      const res = await custAxios.get(`/chat/getChat/${id}`);
      if (res) {
        dispatch({
          type: chatConstants.GET_CHAT_SUCCESS,
          payload: res.data,
        });
      }
    } catch (err) {
      dispatch({ type: chatConstants.GET_CHAT_FAILURE, payload: err });
    }
  };
};

export const createChat = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: chatConstants.CREATE_CHAT_REQUEST });
      attachToken();
      const res = await custAxios.post("/chat/createChat", data);
      if (res) {
        dispatch({
          type: chatConstants.CREATE_CHAT_SUCCESS,
          payload: res.data,
        });
      }
    } catch (err) {
      dispatch({ type: chatConstants.CREATE_CHAT_FAILURE, payload: err });
    }
  };
};

export const sendMessage = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: chatConstants.SEND_MESSAGE_REQUEST });
      attachToken();
      const res = await custAxios.post("/chat/sendMessage", data);
      if (res) {
        dispatch({
          type: chatConstants.SEND_MESSAGE_SUCCESS,
          payload: res.data,
        });
      }
    } catch (err) {
      dispatch({ type: chatConstants.SEND_MESSAGE_FAILURE, payload: err });
    }
  };
};

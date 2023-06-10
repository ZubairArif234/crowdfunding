import custAxios from "../../services/axiosConfig";
import { getToken } from "../../hooks/auth";
import { userConstants } from "../constants/userConstants";
import { attachToken } from "../../services/axiosConfig";

export const getProfile = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: userConstants.GET_PROFILE_REQUEST });
      attachToken();
      const res = await custAxios.get("/user/");
      if (res) {
        dispatch({
          type: userConstants.GET_PROFILE_SUCCESS,
          payload: res.data,
        });
      }
    } catch (err) {
      dispatch({ type: userConstants.GET_PROFILE_FAILURE, payload: err });
    }
  };
};

export const completeInvestorProfile = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: userConstants.COMPLETE_INVESTOR_PROFILE_REQUEST });
      attachToken();
      const res = await custAxios.post("/user/completeInvestorProfile", data);
      if (res) {
        dispatch({
          type: userConstants.COMPLETE_INVESTOR_PROFILE_SUCCESS,
          payload: res.data,
        });
      }
    } catch (err) {
      dispatch({
        type: userConstants.COMPLETE_INVESTOR_PROFILE_FAILURE,
        payload: err,
      });
    }
  };
};

export const completeCreatorProfile = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: userConstants.COMPLETE_CREATOR_PROFILE_REQUEST });
      attachToken();
      const res = await custAxios.post("/user/completeCreatorProfile", data);
      if (res) {
        dispatch({
          type: userConstants.COMPLETE_CREATOR_PROFILE_SUCCESS,
          payload: res.data,
        });
      }
    } catch (error) {
      dispatch({
        type: userConstants.COMPLETE_CREATOR_PROFILE_FAILURE,
        payload: error,
      });
    }
  };
};

export const globalSearch = (query) => {
  return async (dispatch) => {
    try {
      dispatch({ type: userConstants.GLOBAL_SEARCH_REQUEST });
      attachToken();
      const res = await custAxios.post(`/user/globalSearch`, query);
      if (res) {
        dispatch({
          type: userConstants.GLOBAL_SEARCH_SUCCESS,
          payload: res.data,
        });
      }
    } catch (error) {
      dispatch({
        type: userConstants.GLOBAL_SEARCH_FAILURE,
        payload: error,
      });
    }
  };
};

export const updatePassword = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: userConstants.UPDATE_PASSWORD_REQUEST });
      attachToken();
      const res = await custAxios.put("/user/updatePassword", data);
      if (res) {
        dispatch({
          type: userConstants.UPDATE_PASSWORD_SUCCESS,
          payload: res.data,
        });
      }
    } catch (error) {
      dispatch({
        type: userConstants.UPDATE_PASSWORD_FAILURE,
        payload: error,
      });
    }
  };
};

export const updateInvestorProfile = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: userConstants.UPDATE_INVESTOR_PROFILE_REQUEST });
      attachToken();
      const res = await custAxios.put("/user/updateInvestorProfile", data);
      if (res) {
        dispatch({
          type: userConstants.UPDATE_INVESTOR_PROFILE_SUCCESS,
          payload: res.data,
        });
      }
    } catch (error) {
      dispatch({
        type: userConstants.UPDATE_INVESTOR_PROFILE_FAILURE,
        payload: error,
      });
    }
  };
};

export const updateCreatorProfile = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: userConstants.UPDATE_CREATOR_PROFILE_REQUEST });
      attachToken();
      const res = await custAxios.put("/user/updateCreatorProfile", data);
      if (res) {
        dispatch({
          type: userConstants.UPDATE_CREATOR_PROFILE_SUCCESS,
          payload: res.data,
        });
      }
    } catch (error) {
      dispatch({
        type: userConstants.UPDATE_CREATOR_PROFILE_FAILURE,
        payload: error,
      });
    }
  };
};

import custAxios from "../../services/axiosConfig";
import { getToken } from "../../hooks/auth";
import { campaignConstants } from "../constants/campaignConstants";
import { attachToken } from "../../services/axiosConfig";

export const createCampaign = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: campaignConstants.CREATE_CAMPAIGN_REQUEST });
      attachToken();
      const res = await custAxios.post("/campaign/create", data);
      if (res) {
        dispatch({
          type: campaignConstants.CREATE_CAMPAIGN_SUCCESS,
          payload: res.data,
        });
      }
    } catch (err) {
      dispatch({
        type: campaignConstants.CREATE_CAMPAIGN_FAILURE,
        payload: err,
      });
    }
  };
};

export const updateCampaign = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: campaignConstants.UPDATE_CAMPAIGN_REQUEST });
      attachToken();
      const res = await custAxios.put("/campaign/update", data);
      if (res) {
        dispatch({
          type: campaignConstants.UPDATE_CAMPAIGN_SUCCESS,
          payload: res.data,
        });
      }
    } catch (err) {
      dispatch({
        type: campaignConstants.UPDATE_CAMPAIGN_FAILURE,
        payload: err,
      });
    }
  };
};

export const getAllCampaigns = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: campaignConstants.GETALL_CAMPAIGN_REQUEST });
      attachToken();
      const res = await custAxios.post("/campaign/getAll", data);
      if (res) {
        dispatch({
          type: campaignConstants.GETALL_CAMPAIGN_SUCCESS,
          payload: res.data,
        });
      }
    } catch (err) {
      dispatch({
        type: campaignConstants.GETALL_CAMPAIGN_FAILURE,
        payload: err,
      });
    }
  };
};

export const getMineCampaigns = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: campaignConstants.GETMINE_CAMPAIGN_REQUEST });
      attachToken();
      const res = await custAxios.post("/campaign/getMine", data);
      if (res) {
        dispatch({
          type: campaignConstants.GETMINE_CAMPAIGN_SUCCESS,
          payload: res.data,
        });
      }
    } catch (err) {
      dispatch({
        type: campaignConstants.GETMINE_CAMPAIGN_FAILURE,
        payload: err,
      });
    }
  };
};

export const getInvested = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: campaignConstants.GETINVESTED_CAMPAIGN_REQUEST });
      attachToken();
      const res = await custAxios.post("/campaign/getInvested", data);
      if (res) {
        dispatch({
          type: campaignConstants.GETINVESTED_CAMPAIGN_SUCCESS,
          payload: res.data,
        });
      }
    } catch (err) {
      dispatch({
        type: campaignConstants.GETINVESTED_CAMPAIGN_FAILURE,
        payload: err,
      });
    }
  };
};

export const getFeatured = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: campaignConstants.GETFEATURED_CAMPAIGN_REQUEST });
      attachToken();
      const res = await custAxios.get("/campaign/getFeatured");
      if (res) {
        dispatch({
          type: campaignConstants.GETFEATURED_CAMPAIGN_SUCCESS,
          payload: res.data,
        });
      }
    } catch (err) {
      dispatch({
        type: campaignConstants.GETFEATURED_CAMPAIGN_FAILURE,
        payload: err,
      });
    }
  };
};

export const getEditorPicks = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: campaignConstants.GETEDITORPICK_CAMPAIGN_REQUEST });
      attachToken();
      const res = await custAxios.get("/campaign/getEditorPicks");
      if (res) {
        dispatch({
          type: campaignConstants.GETEDITORPICK_CAMPAIGN_SUCCESS,
          payload: res.data,
        });
      }
    } catch (err) {
      dispatch({
        type: campaignConstants.GETEDITORPICK_CAMPAIGN_FAILURE,
        payload: err,
      });
    }
  };
};

export const invest = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: campaignConstants.INVEST_CAMPAIGN_REQUEST });
      attachToken();
      const res = await custAxios.post("/campaign/invest", data);
      if (res) {
        dispatch({
          type: campaignConstants.INVEST_CAMPAIGN_SUCCESS,
          payload: res.data,
        });
      }
    } catch (err) {
      dispatch({
        type: campaignConstants.INVEST_CAMPAIGN_FAILURE,
        payload: err,
      });
    }
  };
};

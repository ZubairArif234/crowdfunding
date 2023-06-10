import { message } from "antd";
import { adminConstants } from "../constants/adminConstants";
import custAxios from "../../services/axiosConfig";

export const approveCampaign = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: adminConstants.APPROVE_CAMPAIGN_REQUEST });
      const res = await custAxios.put(`/admin/approveCampaign/${id}`);
      if (res) {
        dispatch({
          type: adminConstants.APPROVE_CAMPAIGN_SUCCESS,
          payload: res.data,
        });
        message.success("Campaign Approved Successfully");
      }
    } catch (err) {
      dispatch({ type: adminConstants.APPROVE_CAMPAIGN_FAILURE, payload: err });
    }
  };
};

export const rejectCampaign = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: adminConstants.REJECT_CAMPAIGN_REQUEST });
      const res = await custAxios.put(`/admin/rejectCampaign/${id}`);
      if (res) {
        dispatch({
          type: adminConstants.REJECT_CAMPAIGN_SUCCESS,
          payload: res.data,
        });
        message.success("Campaign Rejected Successfully");
      }
    } catch (err) {
      dispatch({ type: adminConstants.REJECT_CAMPAIGN_FAILURE, payload: err });
    }
  };
};

export const getAllCampaigns = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: adminConstants.GET_CAMPAIGN_REQUEST });
      const res = await custAxios.get("/admin/getAllCampaigns");
      if (res) {
        dispatch({
          type: adminConstants.GET_CAMPAIGN_SUCCESS,
          payload: res.data,
        });
      }
    } catch (err) {
      dispatch({
        type: adminConstants.GET_CAMPAIGN_FAILURE,
        payload: err,
      });
    }
  };
};

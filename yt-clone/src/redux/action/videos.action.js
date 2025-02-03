import request from "../../api";
import { HOME_VIDEO_FAIL, HOME_VIDEO_REQUEST, HOME_VIDEO_SUCCESS } from "../actionType";

export const getPopularVideos = () => async dispatch => {
  try {
    dispatch({
      type: HOME_VIDEO_REQUEST
    });

    const {data} = await request.get("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        regionCode: "IN",
        maxResults: 20,
        pageToken: '', 
      },
    });

    dispatch({
      type: HOME_VIDEO_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: 'All'
      },
    })

  } catch (error) {
    console.log(error.message)
    dispatch({
      type: HOME_VIDEO_FAIL,
      payload: error.message
    })
    
  }
};

export const getVideosByCategory = (keyword) => async (dispatch,getState) => {
  try {
    dispatch({
      type: HOME_VIDEO_REQUEST
    });

    const {data} = await request.get("/search", {
      params: {
        part: "snippet",
        
        maxResults: 20,
        pageToken: getState().homeVideos.nextPageToken,
        q:keyword,
        type: 'video' 
      },
    });

    dispatch({
      type: HOME_VIDEO_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: keyword
      },
    })

  } catch (error) {
    console.log(error.message)
    dispatch({
      type: HOME_VIDEO_FAIL,
      payload: error.message
    })
    
  }
};

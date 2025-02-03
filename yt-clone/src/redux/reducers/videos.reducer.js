import { HOME_VIDEO_FAIL, HOME_VIDEO_REQUEST, HOME_VIDEO_SUCCESS } from "../actionType";

export const homeVideosReducer = (state = {
    videos: [],
    loading: false,
    nextPageToken: null,
    activeCategory: 'All'
}, action) => {
    const { type, payload } = action

    switch (type) {
        case HOME_VIDEO_SUCCESS: 
        return {
            ...state,
            videos: payload.videos,
            loading: false,
            nextPageToken: payload.nextPageToken,
            activeCategory: payload.category,
        }

        case HOME_VIDEO_FAIL: return {
            ...state,
            loading: false,
            erroe: payload
        }

        case HOME_VIDEO_REQUEST: return {
            ...state,
            loading: true,
            
        }
            break;

        default:
            return state
    }
}
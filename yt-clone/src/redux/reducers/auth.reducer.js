import { LOAD_PROFILE, LOG_OUT, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionType";

const initialstate = {
    accessToken : sessionStorage.getItem('yt-access-token') ? sessionStorage.getItem('yt-access-token') : null,
    user : sessionStorage.getItem('yt-user') ? JSON.parse(sessionStorage.getItem('yt-user')) : null,
    loading : false,
}

export const authReducer = (prevstate = initialstate, action) =>{
  const {type,payload} = action 

  switch (type) {
    case LOGIN_REQUEST:
        return{
            ...prevstate,
            loading: true
        }
        
    break;

    case LOGIN_SUCCESS:
        return{
            ...prevstate,
            accessToken: payload,
            loading: false

        }
    break;

    case LOGIN_FAIL:
        return{
            ...prevstate,
            accessToken: null,
            loading: false,
            error : payload

        }
    break;

    case LOAD_PROFILE:
        return{
            ...prevstate,
            user : payload

        }
    break;

    case LOG_OUT:
        return{
            ...prevstate,
            accessToken: null,
            user: null,
        }

  
    default:
        return prevstate
  }
}
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '../../firebase';
import { LOAD_PROFILE, LOG_OUT, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from '../actionType';

const auth = getAuth(app);

const login = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });

    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl') 

    const res = await signInWithPopup(auth, provider);
    const accessToken = await res.user.getIdToken(); 

    const profile = {
      name: res.user.displayName,
      photoURL: res.user.photoURL,
    };

    sessionStorage.setItem('yt-access-token', accessToken);
    sessionStorage.setItem('yt-user', JSON.stringify(profile));

    dispatch({
      type: LOGIN_SUCCESS,
      payload: accessToken,
    });

    dispatch({
      type: LOAD_PROFILE,
      payload: profile,
    });

  } catch (error) {
    console.log("Login failed with error:", error.message);
    dispatch({
      type: LOGIN_FAIL,
      payload: error.message || "An unknown error occurred",
    });
  }
};

export default login;

export const log_out = () => async dispatch => {
  await auth.signOut();
  dispatch({
    type: LOG_OUT,

  })

  sessionStorage.removeItem("yt-access-token")
  sessionStorage.removeItem("yt-user")

}

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, googleProvider } from "../firebase.config";
import './googleLogin.css'

// eslint-disable-next-line react/prop-types
function GoogleLogin({ setUser, setIsLogin }) {

  const requestGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        
        console.log(token)
        setIsLogin(true)
        setUser(user.email)
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...

        console.error(errorCode, errorMessage, email, credential)
      });
  };
  return <button className="google-login-button" onClick={requestGoogleLogin}>Google 로그인</button>;
}

export default GoogleLogin;

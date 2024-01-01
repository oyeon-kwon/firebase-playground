import './googleLogin.css'

// eslint-disable-next-line react/prop-types
function GoogleLogin({ setUser, setIsLogin }) {

  const requestGoogleLogin = () => {
    // TODO 구글 로그인에 필요한 코드를 작성하세요.

  };
  return <button className="google-login-button" onClick={requestGoogleLogin}>Google 로그인</button>;
}

export default GoogleLogin;

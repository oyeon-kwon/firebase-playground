import { useState } from "react";
import GoogleLogin from "./GoogleLogin";
import './login.css';
// TODO import 

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false)
  const [user, setUser] = useState("")

  const requestSignUp = () => {
    // TODO 회원가입 하는 코드를 작성하세요.
  };

  const requestSignIn = () => {
    // TODO 로그인 하는 코드를 작성하세요.
  };

  return (
    <div>
      {
        isLogin ? <div className="nav-text">{user} 님 안녕하세요!</div> : <>
          <input className="login-input" placeholder="아이디" onChange={(e) => setEmail(e.target.value)}></input>
          <input className="login-input" type="password" placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)}></input>
          <button className="login-button" onClick={requestSignUp}>회원가입</button>
          <button className="login-button" onClick={requestSignIn}>로그인</button>
          <GoogleLogin setIsLogin={setIsLogin} setUser={setUser} />
        </>
      }
    </div>
  );
}

export default Login;

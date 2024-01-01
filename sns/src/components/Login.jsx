import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase.config";
import GoogleLogin from "./GoogleLogin";
import './login.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false)
  const [user, setUser] = useState("")

  const requestSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert(`${user.email}님 가입을 축하합니다!`)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.error(errorCode, errorMessage)
      });
  };

  const requestSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setIsLogin(true)
        console.log(user)
        setUser(user.email)
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.error(errorCode, errorMessage)
      });
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

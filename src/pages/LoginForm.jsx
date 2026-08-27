import AuthForm from "../components/AuthForm";
import { login } from "../api/authApi";

function LoginForm({ setIsLoggedIn, setUserInfo }) {
  const handleLogin = async (id, password) => {
    try {
      const result = await login(id, password);

      console.log("로그인 성공:", result);

      localStorage.setItem("token", result.token);
      localStorage.setItem("userInfo", JSON.stringify(result.userInfo));

      setIsLoggedIn(true);
      setUserInfo(result.userInfo);

      return true;
    } catch (error) {
      console.error("로그인 실패:", error.message);

      return false;
    }
  };

  return (
    <AuthForm
      mode="login"
      onSubmit={handleLogin}
      setIsLoggedIn={setIsLoggedIn}
      setUserInfo={setUserInfo}
    />
  );
}

export default LoginForm;

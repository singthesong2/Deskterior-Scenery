import AuthForm from "../components/AuthForm";
import { login } from "../api/authApi";

function LoginForm({ setIsLoggedIn, setUserInfo }) {
  const handleLogin = async (id, password) => {
    const result = await login(id, password);

    localStorage.setItem("token", result.token);
    localStorage.setItem("userInfo", JSON.stringify(result.userInfo));

    setIsLoggedIn(true);
    setUserInfo(result.userInfo);

    return true;
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

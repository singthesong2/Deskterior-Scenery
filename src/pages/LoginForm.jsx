import AuthForm from "../components/AuthForm";
import { login } from "../api/authApi";
import {
  LoginPage,
  LoginImage,
  LoginCard,
  Title,
  SignupLink,
} from "../styles/LoginForm.styles";

function LoginForm({ setIsLoggedIn, setUserInfo }) {
  const handleLogin = async (data) => {
    const result = await login(data);

    localStorage.setItem("token", result.token);
    localStorage.setItem("userInfo", JSON.stringify(result.userInfo));

    setIsLoggedIn(true);
    setUserInfo(result.userInfo);

    return true;
  };

  return (
    <>
      <LoginPage>
        <LoginImage />

        <LoginCard>
          <Title>Log In</Title>

          <AuthForm
            mode="login"
            onSubmit={handleLogin}
            setIsLoggedIn={setIsLoggedIn}
            setUserInfo={setUserInfo}
          />

          <SignupLink to="/signup">Create an account</SignupLink>
        </LoginCard>
      </LoginPage>
    </>
  );
}

export default LoginForm;

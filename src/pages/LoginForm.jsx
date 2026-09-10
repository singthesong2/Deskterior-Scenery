import AuthForm from "../components/AuthForm";
import { login } from "../api/authApi";
import useCartStore from "../store/cartStore";

import {
  LoginPage,
  LoginImage,
  LoginCard,
  Title,
  SignupLink,
} from "../styles/LoginForm.styles";

function LoginForm({ setIsLoggedIn, setUserInfo }) {
  // 장바구니 병합 함수
  const { mergeLocalCartToServer } = useCartStore();

  const handleLogin = async (data) => {
    const result = await login(data);

    localStorage.setItem("token", result.token);
    localStorage.setItem("userInfo", JSON.stringify(result.userInfo));

    setIsLoggedIn(true);
    setUserInfo(result.userInfo);

    // 장바구니 로컬데이터 옮김
    try {
      await mergeLocalCartToServer();
    } catch (error) {
      console.error("장바구니 병합 중 에러 발생:", error);
    }

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

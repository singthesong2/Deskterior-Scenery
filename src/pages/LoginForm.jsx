import AuthForm from "../components/AuthForm";

function LoginForm() {
  const handleLogin = (id, password) => {
    console.log("로그인", id, password);
  }; //나중에 서버에 정보 보낼때 쓸 함수

  return <AuthForm mode="login" onSubmit={handleLogin} />;
}

export default LoginForm;

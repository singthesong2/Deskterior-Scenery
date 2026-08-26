import AuthForm from "../components/AuthForm";

function SignupForm() {
  const handleSignUp = (id, password) => {
    console.log("회원가입", id, password);
  }; //나중에 서버에 정보 보낼때 쓸 함수

  return <AuthForm mode="signup" onSubmit={handleSignUp} />;
}

export default SignupForm;

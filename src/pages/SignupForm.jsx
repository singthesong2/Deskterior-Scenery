import AuthForm from "../components/AuthForm";
import { signUp } from "../api/authApi";

function SignupForm() {
  const handleSignUp = async (id, password) => {
    const result = await signUp(id, password);

    console.log("회원가입 성공:", result);
  };

  return <AuthForm mode="signup" onSubmit={handleSignUp} />;
}

export default SignupForm;

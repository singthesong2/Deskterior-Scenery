import AuthForm from "../components/AuthForm";
import { signUp } from "../api/authApi";

function SignupForm() {
  const handleSignUp = async (id, password) => {
    try {
      const result = await signUp(id, password);

      console.log("회원가입 성공:", result);

      return true;
    } catch (error) {
      console.error("회원가입 실패:", error.message);

      return false;
    }
  };

  return <AuthForm mode="signup" onSubmit={handleSignUp} />;
}

export default SignupForm;

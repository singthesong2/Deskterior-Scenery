import AuthForm from "../components/AuthForm";
import { signUp } from "../api/authApi";
import {
  SignupPage,
  SignupImage,
  SignupCard,
  Title,
} from "../styles/SignupForm.styles";

function SignupForm() {
  const handleSignUp = async (id, password) => {
    const result = await signUp(id, password);

    console.log("회원가입 성공:", result);
  };

  return (
    <>
      <SignupPage>
        <SignupImage />

        <SignupCard>
          <Title>Create an account</Title>
          <AuthForm mode="signup" onSubmit={handleSignUp} />
        </SignupCard>
      </SignupPage>
    </>
  );
}

export default SignupForm;

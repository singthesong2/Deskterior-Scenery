import AuthForm from "../components/AuthForm";
import signupbanner from "../assets/signupbanner.webp";
import { signUp } from "../api/authApi";
import {
  SignupPage,
  SignupImageWrap,
  SignupImage,
  SignupCard,
  Title,
} from "../styles/SignupForm.styles";

function SignupForm() {
  const handleSignUp = async (data) => {
    const result = await signUp(data);

    console.log("회원가입 성공:", result);
  };

  return (
    <>
      <SignupPage>
        <SignupImageWrap>
          <SignupImage src={signupbanner} alt="Signup banner" />
        </SignupImageWrap>

        <SignupCard>
          <Title>Create an account</Title>
          <AuthForm mode="signup" onSubmit={handleSignUp} />
        </SignupCard>
      </SignupPage>
    </>
  );
}

export default SignupForm;

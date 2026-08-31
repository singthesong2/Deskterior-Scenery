import { useState } from "react";
import { checkId } from "../api/authApi";
import { useForm } from "react-hook-form";
import { Form, Label, Input, Button, Message } from "../styles/AuthForm.styles";

function AuthForm({ mode, onSubmit, setIsLoggedIn, setUserInfo }) {
  const [idCheck, setIdCheck] = useState(false);
  const [message, setMessage] = useState("");

  const { register, handleSubmit, reset, getValues } = useForm({
    defaultValues: {
      id: "",
      password: "",
    },
  });

  const submitForm = async (data) => {
    if (mode === "signup") {
      if (!data.id) {
        setMessage("아이디를 입력해주세요.");
        return;
      }

      if (!data.password) {
        setMessage("비밀번호를 입력해주세요.");
        return;
      }

      if (!idCheck) {
        setMessage("아이디 중복 확인을 해주세요.");
        return;
      }
    }

    try {
      await onSubmit(data.id, data.password);

      resetUser();
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleIdCheck = async () => {
    const id = getValues("id");

    if (!id) {
      setMessage("아이디를 입력해주세요.");
      return;
    }

    try {
      const result = await checkId(id);

      setIdCheck(true);
      setMessage(result.message);
    } catch (error) {
      setIdCheck(false);
      setMessage(error.message);
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");

    setIsLoggedIn(false);
    setUserInfo(null);

    console.log("로그아웃");
    resetUser();
  };

  const handleCancel = () => {
    console.log("취소");
    resetUser();
  };

  const resetUser = () => {
    reset();
    setIdCheck(false);
    setMessage("");
  };

  return (
    <>
      <Form onSubmit={handleSubmit(submitForm)}>
        <Label>
          ID
          <Input
            type="text"
            {...register("id", {
              onChange: () => {
                setIdCheck(false);
                setMessage("");
              },
            })}
          />
        </Label>

        {mode === "signup" && (
          <Button type="button" onClick={handleIdCheck}>
            아이디 중복 확인
          </Button>
        )}

        <Label>
          Password
          <Input
            type="password"
            {...register("password", {
              onChange: () => {
                setMessage("");
              },
            })}
          />
        </Label>

        {message && <Message>{message}</Message>}

        <Button type="submit">
          {mode === "signup" ? "Sign Up" : "Log in"}
        </Button>

        {/*{mode === "login" && (
          <Button type="button" onClick={handleLogOut}>
            로그아웃
          </Button>
        )}*/}

        {/*}Button type="button" onClick={handleCancel}>
          취소
        </Button>*/}
      </Form>
    </>
  );
}

export default AuthForm;

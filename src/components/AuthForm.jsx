import { useState } from "react";
import { checkId } from "../api/authApi";
import { useForm } from "react-hook-form";
import {
  Form,
  Label,
  Input,
  Button,
  Message,
  NameGroup,
  AllTerms,
  TermsGroup,
  ErrorMessage,
  Required,
} from "../styles/AuthForm.styles";

function AuthForm({ mode, onSubmit, setIsLoggedIn, setUserInfo }) {
  const [idCheck, setIdCheck] = useState(false);
  const [message, setMessage] = useState("");

  const { register, handleSubmit, reset, getValues, watch, setValue } = useForm(
    {
      defaultValues: {
        id: "",
        password: "",
        terms: false,
        privacy: false,
        marketing: false,
      },
    },
  );

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

  const terms = watch("terms");
  const privacy = watch("privacy");
  const marketing = watch("marketing");

  const isAllChecked = terms && privacy && marketing;

  const handleAllCheck = (e) => {
    const checked = e.target.checked;

    setValue("terms", checked);
    setValue("privacy", checked);
    setValue("marketing", checked);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(submitForm)}>
        {mode === "signup" && (
          <NameGroup>
            <Label>
              <span>
                First Name <Required>*</Required>
              </span>
              <Input type="text" placeholder="홍" />
            </Label>

            <Label>
              <span>
                Last Name <Required>*</Required>
              </span>
              <Input type="text" placeholder="길동" />
            </Label>
          </NameGroup>
        )}

        <Label>
          <span>ID {mode === "signup" && <Required>*</Required>}</span>
          <Input
            type="text"
            placeholder={mode === "signup" ? "ID" : ""}
            {...register("id", {
              onChange: () => {
                setIdCheck(false);
                setMessage("");
              },
            })}
          />
        </Label>

        {/*{mode === "signup" && (
          <Button type="button" onClick={handleIdCheck}>
            아이디 중복 확인
          </Button>
        )}*/}

        <Label>
          <span>Password {mode === "signup" && <Required>*</Required>}</span>
          <Input
            type="password"
            placeholder={mode === "signup" ? "Password" : ""}
            {...register("password", {
              onChange: () => {
                setMessage("");
              },
            })}
          />
        </Label>

        {/*{mode === "login" && (
          <Button type="button" onClick={handleLogOut}>
            로그아웃
          </Button>
        )}*/}

        {mode === "signup" && (
          <>
            <Label>
              Contact
              <Input type="tel" placeholder="010-0000-0000" />
            </Label>

            <Label>
              Address
              <Input type="text" placeholder="주소" />
            </Label>
          </>
        )}

        {mode === "signup" && (
          <TermsGroup>
            <p>약관 동의</p>
            <AllTerms>
              <label>
                <input
                  type="checkbox"
                  checked={isAllChecked}
                  onChange={handleAllCheck}
                />
                전체 동의
              </label>
            </AllTerms>

            <label>
              <input type="checkbox" {...register("terms")} />
              [필수] 이용약관 동의
            </label>

            <label>
              <input type="checkbox" {...register("privacy")} />
              [필수] 개인정보 수집 및 이용 동의
            </label>

            <label>
              <input type="checkbox" {...register("marketing")} />
              [선택] 마케팅 정보 수신 동의
            </label>
          </TermsGroup>
        )}

        {message && <Message>{message}</Message>}

        {/*<ErrorMessage></ErrorMessage>*/}

        <Button type="submit">
          {mode === "signup" ? "Sign Up" : "Log in"}
        </Button>

        {/*}Button type="button" onClick={handleCancel}>
          취소
        </Button>*/}
      </Form>
    </>
  );
}

export default AuthForm;

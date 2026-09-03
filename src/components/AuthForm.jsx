import { useState } from "react";
import { checkId } from "../api/authApi";
import { useForm } from "react-hook-form";
import { IconEye, IconEyeClosed } from "@tabler/icons-react";
import {
  Form,
  Label,
  Input,
  Button,
  InputIdGroup,
  IdCheckButton,
  NameGroup,
  AllTerms,
  TermsGroup,
  ErrorMessage,
  ErrorIcon,
  Required,
  PasswordGroup,
  PasswordHidenButton,
} from "../styles/AuthForm.styles";

function AuthForm({ mode, onSubmit, setIsLoggedIn, setUserInfo }) {
  const [idCheck, setIdCheck] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    watch,
    setValue,
    setFocus,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      id: "",
      password: "",
      contact: "",
      address: "",
      terms: false,
      privacy: false,
      marketing: false,
    },
  });

  const submitForm = async (data) => {
    if (mode === "signup") {
      data.firstName = data.firstName.trim();
      data.lastName = data.lastName.trim();

      if (idCheck !== data.id) {
        setMessage("아이디 중복 확인을 해주세요.");
        setFocus("id");
        return;
      }

      if (!terms || !privacy) {
        setMessage("필수 약관에 동의해 주세요.");

        if (!terms) setFocus("terms");
        else setFocus("privacy");

        return;
      }

      if (data.contact) data.contact = formatPhoneNumber(data.contact);
    }

    try {
      await onSubmit(data);
      resetUser();
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleLimitError = (error) => {
    const firstError = Object.values(error)[0];

    if (firstError) setMessage(firstError.message);
  };

  const handleIdCheck = async () => {
    const id = getValues("id");

    if (!id) {
      setMessage("아이디를 입력해주세요.");
      setFocus("id");
      return;
    }

    try {
      const result = await checkId(id);

      if (getValues("id") !== id) {
        return;
      }

      setIdCheck(id);
      setMessage("");
      //setMessage(result.message); 삭제 X
    } catch (error) {
      if (getValues("id") !== id) {
        return;
      }
      setIdCheck("");
      setMessage(error.message);
      setFocus("id");
      //setMessage("이미 사용 중인 아이디입니다."); 삭제 X
    }
  };

  const formatPhoneNumber = (phone) => {
    const numbers = phone.replace(/-/g, "");

    return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7)}`;
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
    setIdCheck("");
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
      <Form onSubmit={handleSubmit(submitForm, handleLimitError)}>
        {mode === "signup" && (
          <NameGroup>
            <Label>
              <span>
                First Name <Required>*</Required>
              </span>
              <Input
                type="text"
                placeholder="홍"
                {...register("firstName", {
                  required: "First Name을 입력해주세요.",
                  validate: (value) =>
                    value.trim().length > 0 || "First Name을 입력해주세요.",
                  onChange: () => setMessage(""),
                })}
              />
            </Label>

            <Label>
              <span>
                Last Name <Required>*</Required>
              </span>
              <Input
                type="text"
                placeholder="길동"
                {...register("lastName", {
                  required: "Last Name을 입력해주세요.",
                  validate: (value) =>
                    value.trim().length > 0 || "Last Name을 입력해주세요.",
                  onChange: () => setMessage(""),
                })}
              />
            </Label>
          </NameGroup>
        )}

        <Label>
          <span>ID {mode === "signup" && <Required>*</Required>}</span>
          <InputIdGroup>
            <Input
              type="text"
              placeholder={
                mode === "signup"
                  ? "ID (특수문자와 한글을 제외한 4자 이상)"
                  : ""
              }
              {...register("id", {
                required: "아이디를 입력해주세요.",

                ...(mode === "signup" && {
                  minLength: {
                    value: 4,
                    message: "아이디는 4자 이상 입력해주세요.",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9]+$/,
                    message: "아이디는 영문과 숫자만 사용할 수 있습니다.",
                  },
                }),
                onChange: () => {
                  setIdCheck("");
                  setMessage("");
                },
              })}
            />

            {mode === "signup" && (
              <IdCheckButton type="button" onClick={handleIdCheck}>
                중복 확인
              </IdCheckButton>
            )}
          </InputIdGroup>
        </Label>

        <Label>
          <span>Password {mode === "signup" && <Required>*</Required>}</span>
          <PasswordGroup>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder={mode === "signup" ? "Password (4자 이상)" : ""}
              {...register("password", {
                required: "비밀번호를 입력해주세요.",
                ...(mode === "signup" && {
                  minLength: {
                    value: 4,
                    message: "비밀번호는 4자 이상 입력해주세요.",
                  },
                  validate: (value) =>
                    !/\s/.test(value) ||
                    "비밀번호에 공백을 입력할 수 없습니다.",
                }),
                onChange: () => {
                  setMessage("");
                },
              })}
            />
            <PasswordHidenButton
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <IconEyeClosed size={25} />
              ) : (
                <IconEye size={25} />
              )}
            </PasswordHidenButton>
          </PasswordGroup>
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
              <Input
                type="tel"
                placeholder="010-0000-0000"
                {...register("contact", {
                  validate: (value) => {
                    if (!value) return true;

                    const rawPhone = /^010\d{8}$/;
                    const formattedPhone = /^010-\d{4}-\d{4}$/;

                    if (!rawPhone.test(value) && !formattedPhone.test(value))
                      return "전화번호를 010-0000-0000 형식으로 입력해주세요.";

                    return true;
                  },
                  onChange: () => {
                    setMessage("");
                  },
                })}
              />
            </Label>

            <Label>
              Address
              <Input type="text" placeholder="주소" {...register("address")} />
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

        {message && (
          <ErrorMessage>
            <ErrorIcon />
            <span>{message}</span>
          </ErrorMessage>
        )}

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

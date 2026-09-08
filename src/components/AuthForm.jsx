import { useState, useRef } from "react";
import { checkId } from "../api/authApi";
import { IconEye, IconEyeClosed } from "@tabler/icons-react";
import { showSuccessToast } from "./common/ShowToast";
import { useNavigate } from "react-router";
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
  ItemCheckbox,
  ErrorMessage,
  ErrorIcon,
  Required,
  PasswordGroup,
  PasswordHidenButton,
} from "../styles/AuthForm.styles";

const inputForm = {
  firstName: "",
  lastName: "",
  id: "",
  password: "",
  contact: "",
  address: "",
  terms: false,
  privacy: false,
  marketing: false,
};

function AuthForm({ mode, onSubmit, setIsLoggedIn, setUserInfo }) {
  const [formData, setFormData] = useState(inputForm);
  const [idCheck, setIdCheck] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [shakingButton, setShakingButton] = useState(false);
  const navigate = useNavigate();

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const idRef = useRef(null);
  const passwordRef = useRef(null);
  const contactRef = useRef(null);
  const termsRef = useRef(null);
  const privacyRef = useRef(null);
  const currentIdRef = useRef("");

  const { terms, privacy, marketing } = formData;
  const isAllChecked = terms && privacy && marketing;

  const submitForm = async (e) => {
    e.preventDefault();

    const data = { ...formData };

    if (!dataCheckForm(data)) {
      return;
    }

    if (mode === "signup") {
      data.firstName = data.firstName.trim();
      data.lastName = data.lastName.trim();

      if (data.contact) {
        data.contact = formatPhoneNumber(data.contact);
      }
    }

    try {
      await onSubmit(data);

      resetUser();

      if (mode === "login") showSuccessToast("Login successful");
      else if (mode === "signup") showSuccessToast("Sign-up successful");

      navigate("/");
    } catch (error) {
      setMessage(error.message);
      setShakingButton(true);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((data) => ({
      ...data,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "id") {
      currentIdRef.current = value;
      setIdCheck("");
    }
  };

  const dataCheckForm = (data) => {
    if (mode === "signup") {
      if (!data.firstName.trim()) {
        showError("First Name을 입력해주세요.", firstNameRef);
        return false;
      }

      if (!data.lastName.trim()) {
        showError("Last Name을 입력해주세요.", lastNameRef);
        return false;
      }
    }

    if (!data.id) {
      showError("아이디를 입력해주세요.", idRef);
      return false;
    }

    if (!data.password) {
      showError("비밀번호를 입력해주세요.", passwordRef);
      return false;
    }

    if (mode === "signup") {
      if (data.id.length < 4) {
        showError("아이디는 4자 이상 입력해주세요.", idRef);
        return false;
      }

      if (!/^[a-zA-Z0-9]+$/.test(data.id)) {
        showError("아이디는 영문과 숫자만 사용할 수 있습니다.", idRef);
        return false;
      }

      if (data.password.length < 4) {
        showError("비밀번호는 4자 이상 입력해주세요.", passwordRef);
        return false;
      }

      if (/\s/.test(data.password)) {
        showError("비밀번호에 공백을 입력할 수 없습니다.", passwordRef);
        return false;
      }

      if (data.contact) {
        const phoneNumber = /^010\d{8}$/;
        const formattedPhone = /^010-\d{4}-\d{4}$/;

        if (
          !phoneNumber.test(data.contact) &&
          !formattedPhone.test(data.contact)
        ) {
          showError(
            "전화번호를 010-0000-0000 형식으로 입력해주세요.",
            contactRef,
          );
          return false;
        }
      }

      if (idCheck !== data.id) {
        showError("아이디 중복 확인을 해주세요.", idRef);
        return false;
      }

      if (!data.terms || !data.privacy) {
        showError(
          "필수 약관에 동의해 주세요.",
          !data.terms ? termsRef : privacyRef,
        );
        return false;
      }
    }

    return true;
  };

  const handleIdCheck = async () => {
    const id = formData.id;

    if (!id) {
      showError("아이디를 입력해주세요.", idRef);
      return;
    }

    try {
      const result = await checkId(id);

      if (currentIdRef.current !== id) return;

      setIdCheck(id);
      setMessage("");
      //setMessage(result.message); 삭제 X
    } catch (error) {
      if (currentIdRef.current !== id) {
        return;
      }

      setIdCheck("");
      showError(error.message, idRef);
    }
  };

  const formatPhoneNumber = (phone) => {
    const numbers = phone.replace(/\D/g, "");

    if (numbers.length !== 11) return phone;

    return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7)}`;
  };

  const showError = (errorMessage, ref) => {
    setMessage(errorMessage);
    setShakingButton(true);
    ref?.current?.focus();
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
    setFormData({ ...inputForm });
    currentIdRef.current = "";
    setIdCheck("");
    setMessage("");
  };

  const handleAllCheck = (e) => {
    const checked = e.target.checked;

    setFormData((data) => ({
      ...data,
      terms: checked,
      privacy: checked,
      marketing: checked,
    }));

    setMessage("");
  };

  return (
    <>
      <Form onSubmit={submitForm}>
        {mode === "signup" && (
          <NameGroup>
            <Label>
              <span>
                First Name <Required>*</Required>
              </span>
              <Input
                ref={firstNameRef}
                name="firstName"
                type="text"
                placeholder="홍"
                value={formData.firstName}
                onChange={handleChange}
              />
            </Label>

            <Label>
              <span>
                Last Name <Required>*</Required>
              </span>
              <Input
                ref={lastNameRef}
                name="lastName"
                type="text"
                placeholder="길동"
                value={formData.lastName}
                onChange={handleChange}
              />
            </Label>
          </NameGroup>
        )}

        <Label>
          <span>ID {mode === "signup" && <Required>*</Required>}</span>
          <InputIdGroup>
            <Input
              ref={idRef}
              name="id"
              type="text"
              placeholder={
                mode === "signup"
                  ? "ID (특수문자와 한글을 제외한 4자 이상)"
                  : ""
              }
              value={formData.id}
              onChange={handleChange}
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
              ref={passwordRef}
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder={mode === "signup" ? "Password (4자 이상)" : ""}
              value={formData.password}
              onChange={handleChange}
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

        {/* 로그아웃 테스트 버튼
        {mode === "login" && (
          <Button type="button" onClick={handleLogOut}>
            로그아웃
          </Button>
        )}
        */}

        {mode === "signup" && (
          <>
            <Label>
              Contact
              <Input
                ref={contactRef}
                name="contact"
                type="tel"
                placeholder="010-0000-0000"
                value={formData.contact}
                onChange={handleChange}
                onBlur={() => {
                  setFormData((data) => ({
                    ...data,
                    contact: formatPhoneNumber(data.contact),
                  }));
                }}
              />
            </Label>

            <Label>
              Address
              <Input
                name="address"
                type="text"
                placeholder="주소"
                value={formData.address}
                onChange={handleChange}
              />
            </Label>
          </>
        )}

        {mode === "signup" && (
          <TermsGroup>
            <p>약관 동의</p>

            <AllTerms>
              <label>
                <ItemCheckbox
                  type="checkbox"
                  checked={isAllChecked}
                  onChange={handleAllCheck}
                />
                전체 동의
              </label>
            </AllTerms>

            <label>
              <ItemCheckbox
                ref={termsRef}
                name="terms"
                type="checkbox"
                checked={terms}
                onChange={handleChange}
              />
              [필수] 이용약관 동의
            </label>

            <label>
              <ItemCheckbox
                ref={privacyRef}
                name="privacy"
                type="checkbox"
                checked={privacy}
                onChange={handleChange}
              />
              [필수] 개인정보 수집 및 이용 동의
            </label>

            <label>
              <ItemCheckbox
                name="marketing"
                type="checkbox"
                checked={marketing}
                onChange={handleChange}
              />
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

        <Button
          type="submit"
          className={shakingButton ? "shake" : ""}
          onAnimationEnd={() => setShakingButton(false)}
        >
          {mode === "signup" ? "Sign Up" : "Log in"}
        </Button>

        {/* 취소 테스트 버튼
        <Button type="button" onClick={handleCancel}>
          취소
        </Button>
        */}
      </Form>
    </>
  );
}

export default AuthForm;

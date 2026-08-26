import { useState } from "react";

function AuthForm({ mode, onSubmit }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(id, password);
    resetUser();
  };
  const handleLogOut = (e) => {
    e.preventDefault();
    console.log("로그아웃");
    resetUser();
  };

  const handleCancel = (e) => {
    e.preventDefault();
    console.log("취소");
    resetUser();
  };

  const resetUser = () => {
    setId("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        아이디를 입력해주세요.
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.currentTarget.value)}
        />
      </label>

      <label>
        비밀번호를 입력해주세요.
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
      </label>

      <button type="submit">{mode === "signup" ? "회원가입" : "로그인"}</button>
      {mode === "login" && (
        <button type="button" onClick={handleLogOut}>
          로그아웃
        </button>
      )}
      <button type="button" onClick={handleCancel}>
        취소
      </button>
    </form>
  );
}

export default AuthForm;

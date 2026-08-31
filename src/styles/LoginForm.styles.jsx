import styled from "@emotion/styled";
import { Link } from "react-router";

export const LoginPage = styled.main({
  height: "80vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "stretch",
  gap: "20px",
  padding: "60px 40px",
});

export const LoginImage = styled.div({
  width: "50vw",
  height: "465px",
  /* 이미지 넣으면 높이 삭제 */
  backgroundColor: "#e8e6df",
});

export const LoginCard = styled.section({
  width: "50vw",
  padding: "50px 30px",
  border: "1px solid #eee",
  borderRadius: "5px",
  backgroundColor: "#fff",
});

export const Title = styled.h1({
  margin: "0 0 40px",
  textAlign: "center",
  fontSize: "60px",
});

export const SignupLink = styled(Link)({
  display: "block",
  textAlign: "center",
  marginTop: "20px",
  fontSize: "15px",
  textDecoration: "none",
  color: "#000000",
});

import styled from "@emotion/styled";
import { Link } from "react-router";

export const SignupPage = styled.main({
  display: "flex",
  justifyContent: "center",
  alignItems: "stretch",
  gap: "20px",
  padding: "60px 40px",
});

export const SignupImage = styled.div({
  width: "50vw",
  backgroundColor: "#e8e6df",
});

export const SignupCard = styled.section({
  width: "50vw",
  padding: "50px 30px",
  border: "1px solid #eee",
  borderRadius: "5px",
  backgroundColor: "#fff",
});

export const Title = styled.h1({
  margin: "0 0 40px",
  textAlign: "left",
  fontSize: "20px",
  fontWeight: 550,
});

export const SignupLink = styled(Link)({
  display: "block",
  textAlign: "center",
  marginTop: "20px",
  fontSize: "15px",
  textDecoration: "none",
  color: "#000000",
});

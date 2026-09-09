import styled from "@emotion/styled";
import loginbanner from "../assets/loginbanner.webp";
import { Link } from "react-router";

export const LoginPage = styled.main({
  display: "flex",
  justifyContent: "center",
  alignItems: "stretch",
  gap: "20px",
  padding: "60px 96px",

  "@media (max-width: 768px)": {
    padding: "30px 16px",
    alignItems: "center",
  },
});

export const LoginImage = styled.div({
  flex: 1,
  backgroundImage: `url(${loginbanner})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",

  "@media (max-width: 768px)": {
    display: "none",
  },
});

export const LoginCard = styled.section({
  flex: 1,
  height: "500px",
  padding: "50px 30px",
  border: "1px solid #eee",
  borderRadius: "5px",
  backgroundColor: "#fff",

  "@media (max-width: 768px)": {
    flex: "none",
    height: "auto",
    width: "100%",
    maxWidth: "360px",
    padding: "36px 24px",
  },
});

export const Title = styled.h1(({ theme }) => ({
  fontFamily: theme.fontFamily.display,
  margin: "0 0 40px",
  textAlign: "center",
  fontSize: "40px",

  "@media (max-width: 768px)": {
    marginBottom: "30px",
    fontSize: "32px",
  },
}));

export const SignupLink = styled(Link)({
  display: "block",
  textAlign: "center",
  marginTop: "30px",
  fontSize: "15px",
  textDecoration: "none",
  color: "#000000",

  "@media (max-width: 768px)": {
    marginTop: "24px",
    fontSize: "13px",
  },
});

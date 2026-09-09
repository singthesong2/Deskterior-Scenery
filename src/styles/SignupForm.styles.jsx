import styled from "@emotion/styled";
import signupbanner from "../assets/signupbanner.webp";
import { Link } from "react-router";

export const SignupPage = styled.main({
  display: "flex",
  justifyContent: "center",
  alignItems: "stretch",
  gap: "20px",
  padding: "60px 96px",

  "@media (max-width: 768px)": {
    padding: "30px 130px",
    alignItems: "center",
  },
});

export const SignupImage = styled.div({
  flex: 1,
  backgroundImage: `url(${signupbanner})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",

  "@media (max-width: 768px)": {
    display: "none",
  },
});

export const SignupCard = styled.section({
  flex: 1,
  padding: "50px 30px",
  border: "1px solid #eee",
  borderRadius: "5px",
  backgroundColor: "#fff",

  "@media (max-width: 768px)": {
    flex: "none",
    width: "100%",
    //maxWidth: "360px",
    padding: "28px 20px",
  },
});

export const Title = styled.h1({
  margin: "0 0 40px",
  textAlign: "left",
  fontSize: "20px",
  fontWeight: 550,

  "@media (max-width: 768px)": {
    marginBottom: "28px",
    fontSize: "16px",
  },
});

export const SignupLink = styled(Link)({
  display: "block",
  textAlign: "center",
  marginTop: "20px",
  fontSize: "15px",
  textDecoration: "none",
  color: "#000000",

  "@media (max-width: 768px)": {
    marginTop: "16px",
    fontSize: "13px",
  },
});

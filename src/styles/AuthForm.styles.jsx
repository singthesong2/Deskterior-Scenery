import styled from "@emotion/styled";

export const Form = styled.form({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "20px",
});

export const NameGroup = styled.div({
  display: "flex",
  width: "100%",
  gap: "20px",
});

export const AllTerms = styled.div({
  marginBottom: "15px",
});

export const Label = styled.label({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "5px",
  fontSize: "15px",
  color: "#000000",
  fontWeight: 600,
  flex: 1,
});

export const Input = styled.input({
  width: "100%",
  padding: "8px 0",
  border: "none",
  borderBottom: "2px solid #e6e6e6",
  outline: "none",
  backgroundColor: "transparent",
  "&:focus": {
    borderBottomColor: "#000000",
  },
  "&::placeholder": {
    color: "#b0b0b0",
  },
});

export const TermsGroup = styled.label({
  display: "flex",
  flexDirection: "column",
  fontSize: "15px",
  gap: "10px",
  color: "#5f5e5e",
  textAlign: "left",
  "& p": {
    color: "#000000",
    fontWeight: 600,
    marginBottom: "5px",
  },
  "& label": {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  "& input[type='checkbox']": {
    margin: 0,
  },
});

export const ErrorMessage = styled.p({
  width: "100%",
  marginTop: "20px",
  border: "1px solid #000000",
  minHeight: "30px",
});

export const Button = styled.button({
  width: "100%",
  padding: "12px",
  marginTop: "10px",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "#000000",
  color: "#fff",
  cursor: "pointer",
  "&:hover": {
    filter: "brightness(1.2)",
  },
});

export const Message = styled.p({
  marginTop: "8px",
  fontSize: "12px",
});

export const Required = styled.span({
  color: "#ff6b35",
});

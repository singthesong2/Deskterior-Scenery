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

export const InputIdGroup = styled.div({
  display: "flex",
  alignItems: "center",
  width: "100%",
  borderBottom: "2px solid #e6e6e6",
  "& input": {
    flex: 1,
    width: "auto",
    borderBottom: "none",
  },

  "&:focus-within": {
    borderBottomColor: "#000000",
  },
});

export const IdCheckButton = styled.button({
  flexShrink: 0,
  padding: "6px 14px",
  border: "none",
  borderRadius: "20px",
  backgroundColor: "#000000",
  color: "#ffffff",
  fontSize: "12px",
  lineHeight: 1,
  cursor: "pointer",
});

export const PasswordGroup = styled.div({
  display: "flex",
  alignItems: "center",
  width: "100%",
  borderBottom: "2px solid #e6e6e6",
  "& input": {
    flex: 1,
    minWidth: 0,
    width: "auto",
    borderBottom: "none",
  },
  "&:focus-within": {
    borderBottomColor: "#000",
  },
});

export const PasswordHidenButton = styled.button({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  padding: "6px",
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
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
    transform: "translateY(3px)",
  },
});

export const ErrorMessage = styled.div({
  width: "100%",
  display: "flex",
  alignItems: "center",
  marginTop: "15px",
  gap: "12px",
  padding: "8px 10px",
  boxSizing: "border-box",
  backgroundColor: "#f8d1bd",
  borderRadius: "6px",
  fontSize: "14px",
  color: "#000000",
  textAlign: "left",
});

export const ErrorIcon = styled.span({
  position: "relative",
  width: "20px",
  height: "20px",
  flexShrink: 0,
  border: "1.5px solid #e32626",
  borderRadius: "50%",
  "&::before, &::after": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "52%",
    width: "9px",
    height: "1.5px",
    backgroundColor: "#e32626",
  },
  "&::before": {
    transform: "translate(-50%, -50%) rotate(45deg)",
  },
  "&::after": {
    transform: "translate(-50%, -50%) rotate(-45deg)",
  },
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
  "@media (prefers-reduced-motion: no-preference)": {
    "&.shake": {
      animation: "shake 0.35s ease-in-out",
    },
  },
  "@media (prefers-reduced-motion: reduce)": {
    "&.shake": {
      animation: "none",
    },
  },
  "@keyframes shake": {
    "0%": {
      transform: "translateX(0)",
    },
    "20%": {
      transform: "translateX(-6px)",
    },
    "40%": {
      transform: "translateX(6px)",
    },
    "60%": {
      transform: "translateX(-4px)",
    },
    "80%": {
      transform: "translateX(4px)",
    },
    "100%": {
      transform: "translateX(0)",
    },
  },
});

export const Message = styled.p({
  marginTop: "8px",
  fontSize: "12px",
});

export const Required = styled.span({
  color: "#ff6b35",
});

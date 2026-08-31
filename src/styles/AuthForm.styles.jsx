import styled from "@emotion/styled";

export const Form = styled.form({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "20px",
});

export const Label = styled.label({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "5px",
  fontSize: "15px",
  color: "#000000",
  fontWeight: 600,
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
});

export const Button = styled.button({
  width: "100%",
  padding: "12px",
  marginTop: "30px",
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

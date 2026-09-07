import styled from "@emotion/styled";

export const FailToastStyle = {
  border: "1px solid #F87171",
  borderRadius: "10px",
};

export const FailBox = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  width: "100%",
  padding: 0,
  "& svg": {
    color: "#F87171",
    flexShrink: 0,
  },
});

export const ToastText = styled.p({
  margin: 0,
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "20px",
  transform: "translateY(-2px)",
  color: "#222",
});

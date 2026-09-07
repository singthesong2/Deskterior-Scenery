import styled from "@emotion/styled";

export const SuccessToastStyle = {
  border: "1px solid #18a83b",
  borderRadius: "10px",
};

export const SuccessBox = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  width: "100%",
  padding: 0,
  "& svg": {
    color: "#18a83b",
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

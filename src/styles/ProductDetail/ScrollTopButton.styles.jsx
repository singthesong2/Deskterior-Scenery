import styled from "@emotion/styled";

export const Button = styled.button(({ theme }) => ({
  position: "fixed",
  right: "20px",
  bottom: "calc(20px + env(safe-area-inset-bottom, 0px))",
  zIndex: 50,
  cursor: "pointer",

  display: "flex",
  width: "40px",
  height: "40px",
  padding: 0,
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing.xs,
  borderRadius: theme.radius.full,
  border: `${theme.borderWidth.default} solid ${theme.colors.subtle}`,
  background: theme.colors.textMain,
}));

export const Icon = styled.svg({
  width: "1.5rem", // 24px — 40px 버튼에 맞춤
  height: "1.5rem",
  flexShrink: 0,
});

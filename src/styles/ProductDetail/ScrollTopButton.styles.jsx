import styled from "@emotion/styled";

export const Button = styled.button(({ theme }) => ({
  position: "fixed",
  right: "20px",
  bottom: "calc(20px + env(safe-area-inset-bottom, 0px))",
  zIndex: 50,
  cursor: "pointer",

  display: "flex",
  width: "3.5rem",
  height: "3.5rem",
  padding: theme.spacing.xs,
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing.xs,
  borderRadius: theme.radius.full,
  border: `${theme.borderWidth.default} solid ${theme.colors.subtle}`,
  background: theme.colors.textMain,
}));

export const Icon = styled.svg({
  width: "2.25rem",
  height: "2.25rem",
  flexShrink: 0,
});

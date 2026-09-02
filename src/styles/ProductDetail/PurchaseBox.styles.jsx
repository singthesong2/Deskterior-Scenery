import styled from "@emotion/styled";

export const Wrapper = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.lg,
}));

export const Stepper = styled.div(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  alignSelf: "flex-start",
  gap: theme.spacing.sm,
}));

export const StepButton = styled.button(({ theme }) => ({
  display: "flex",
  width: "2.5rem",
  height: "2.5rem",
  padding: "0 0.4375rem 0.125rem",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.625rem",
  borderRadius: theme.radius.full, // 피그마 62.4375rem = 완전 원형
  border: `${theme.borderWidth.default} solid ${theme.colors.subtle}`,
  background: "#fff",
  fontSize: theme.fontSize.md, // 1rem
  fontWeight: theme.fontWeight.regular, // 400
  lineHeight: "normal",
  color: theme.colors.textMain,

  "&:disabled": {
    color: theme.colors.secondText,
    cursor: "not-allowed",
  },
}));

export const Qty = styled.span(({ theme }) => ({
  minWidth: "18px",
  textAlign: "center",
  fontSize: theme.fontSize.sm,
}));

export const ButtonRow = styled.div(({ theme }) => ({
  display: "flex",
  gap: theme.spacing.xs,
}));

export const CartButton = styled.button(({ theme }) => ({
  display: "flex",
  width: "8.875rem",
  height: "2.5rem",
  padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing.xs,
  borderRadius: theme.radius.md,
  background: theme.colors.textMain,
  color: "#fff",
  textAlign: "center",
  fontSize: theme.fontSize.sm, // 0.875rem
  fontWeight: theme.fontWeight.medium, // 500
  lineHeight: "normal",
  letterSpacing: "-0.00875rem",

  "&:disabled": { opacity: 0.5, cursor: "not-allowed" },
}));

export const WishButton = styled.button(({ theme }) => ({
  display: "grid",
  placeItems: "center",
  width: "2.4375rem",
  height: "2.5rem",
  borderRadius: theme.radius.md,
  background: theme.colors.subtle, // #EBEAE4
  color: theme.colors.textMain,
}));

export const CheckoutButton = styled.button(({ theme }) => ({
  display: "flex",
  height: "3rem",
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "stretch",
  borderRadius: theme.radius.md,
  border: `${theme.borderWidth.default} solid ${theme.colors.textMain}`,
  background: theme.colors.textMain,
  color: theme.colors.cards, // #FDFDFD
  fontSize: theme.fontSize.md, // 1rem
  fontWeight: theme.fontWeight.medium, // 500
  lineHeight: "normal",
  letterSpacing: "-0.01rem",

  "&:disabled": { opacity: 0.5, cursor: "not-allowed" },
}));

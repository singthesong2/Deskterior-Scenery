import styled from "@emotion/styled";

export const StyledBadge = styled.span(({ theme, top, left }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "62px",
  height: "22px",

  backgroundColor: theme.colors.emphasis,
  color: theme.colors.cards,

  fontSize: theme.fontSize.xs,
  fontWeight: theme.fontWeight.semiBold,
  borderRadius: theme.radius.md,

  position: "absolute",
  top: top || theme.spacing.md,
  left: left || theme.spacing.md,
  zIndex: 10,
}));

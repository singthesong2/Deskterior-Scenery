import styled from "@emotion/styled";
import { ChevronLeftIcon, ChevronRightIcon } from "../components/icons/Icons";

export const PaginationWrapper = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing.md,
  margin: `${theme.spacing["2xl"]} 0`,
}));

const chevronStyle = ({ theme, $disabled }) => ({
  cursor: $disabled ? "default" : "pointer",
  pointerEvents: $disabled ? "none" : "auto",
  color: $disabled ? theme.colors.secondText : theme.colors.textMain,
  padding: theme.spacing["2xs"],

  "&:focus-visible": {
    outline: `2px solid ${theme.colors.textMain}`,
    outlineOffset: "2px",
    borderRadius: theme.radius.full,
  },
});

export const StyledChevronLeftIcon = styled(ChevronLeftIcon)(chevronStyle);
export const StyledChevronRightIcon = styled(ChevronRightIcon)(chevronStyle);

export const Ellipsis = styled.span(({ theme }) => ({
  color: theme.colors.secondText,
}));

export const PageButton = styled.button(({ theme, $active }) => ({
  width: "28px",
  height: "28px",
  borderRadius: theme.radius.full,
  border: "none",
  cursor: "pointer",
  fontSize: theme.fontSize.sm,
  background: $active ? theme.colors.textMain : "transparent",
  color: $active ? "#fff" : theme.colors.textMain,
  transition: "background 0.15s ease",

  "&:hover": {
    background: $active ? theme.colors.textMain : theme.colors.subtle,
  },

  "&:focus-visible": {
    outline: `2px solid ${theme.colors.textMain}`,
    outlineOffset: "2px",
  },
}));

import styled from "@emotion/styled";
import { SearchIcon } from "../../components/icons/Icons";

export const StyledSearchIcon = styled(SearchIcon)(({ theme }) => ({
  color: theme.colors.secondText,
  flexShrink: 0,
}));

export const ToolbarWrapper = styled.div(({ theme }) => ({
  display: "flex",
  padding: `0 ${theme.spacing.md}`,
  justifyContent: "space-between",
  alignItems: "flex-start",
  alignSelf: "stretch",
  margin: `${theme.spacing.xl} 0 ${theme.spacing.lg}`,
}));

export const SearchBox = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  alignSelf: "stretch",
  gap: "167px",
  border: `${theme.borderWidth.default} solid ${theme.colors.subtle}`,
  borderRadius: theme.radius.full,
  background: theme.colors.cards,
  padding: `${theme.spacing.sm} ${theme.spacing.md}`,
  width: "260px",
}));

export const SearchInput = styled.input(({ theme }) => ({
  border: "none",
  outline: "none",
  fontSize: theme.fontSize.sm,
  width: "100%",
  background: "transparent",
  color: theme.colors.textMain,

  "&::placeholder": {
    color: theme.colors.secondText,
  },
}));

export const SortBox = styled.div(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing.xs,
  border: `${theme.borderWidth.default} solid ${theme.colors.subtle}`,
  borderRadius: theme.radius.sm,
  background: theme.colors.cards,
  padding: `${theme.spacing.sm} ${theme.spacing.md}`,
  fontSize: theme.fontSize.sm,
  cursor: "pointer",
}));

export const SortLabel = styled.span(({ theme }) => ({
  color: theme.colors.secondText,
}));

export const SortMenu = styled.ul(({ theme }) => ({
  position: "absolute",
  top: "calc(100% + 4px)",
  right: 0,
  minWidth: "140px",
  background: theme.colors.cards,
  border: `${theme.borderWidth.default} solid ${theme.colors.subtle}`,
  borderRadius: theme.radius.md,
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
  listStyle: "none",
  margin: 0,
  padding: theme.spacing["2xs"],
  zIndex: 10,
}));

export const SortMenuItem = styled.li(({ theme, $active }) => ({
  padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
  borderRadius: theme.radius.sm,
  cursor: "pointer",
  fontFamily: theme.fontFamily.base,
  fontSize: theme.fontSize.sm,
  fontWeight: theme.fontWeight.medium,
  lineHeight: "normal",
  letterSpacing: "-0.14px",
  color: theme.colors.textMain,
  background: $active ? theme.colors.subtle : "transparent",

  "&:hover": {
    background: theme.colors.subtle,
  },
}));

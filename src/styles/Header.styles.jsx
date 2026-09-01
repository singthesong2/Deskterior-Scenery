import styled from "@emotion/styled";

export const HeaderSection = styled.header(({theme}) => ({
  width: "100%",
  height: "80px",
  padding: `0 ${theme.spacing.xl}`,
  display: "flex",
  alignItems: "center",
  backgroundColor: theme.colors.background,
}));

export const Logo = styled.h1(({theme}) => ({
  flex: "0 0 96px",
  color: theme.colors.textMain,
  fontSize: theme.fontSize.xl,
  letterSpacing: "-2px",
}));

export const Navigation = styled.nav({
  display: "flex",
  flex: 1,
  justifyContent: "center",
});

export const NavList = styled.ul(({theme}) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing.lg,
}));

export const NavItem = styled.li({});

export const NavButton = styled.a(({theme, isActive}) => ({
  fontSize: theme.fontSize.sm,
  fontWeight: isActive
    ? theme.fontWeight.semiBold
    : theme.fontWeight.regular,
  color: isActive
    ? theme.colors.textMain
    : theme.colors.secondText,
    cursor: "pointer",
  "&:hover": {
    color: theme.colors.textMain,
  },
}));

export const IconContainer = styled.div(({theme}) => ({
  display: "flex",
  flex: "0 0 96px",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: theme.spacing.sm,
}));

export const IconButton = styled.button(({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
}));

 
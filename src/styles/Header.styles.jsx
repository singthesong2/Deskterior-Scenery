import styled from "@emotion/styled";

export const HeaderSection = styled.header(({ theme }) => ({
  position: "sticky",
  top: 0,
  zIndex: 50,
  width: "100%",
  height: theme.layout.headerHeight,
  padding: `0 ${theme.spacing.xl}`,
  display: "flex",
  alignItems: "center",
  backgroundColor: `${theme.colors.background}BF`, // BF: 불투명도 약 80%

  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)", // 사파리 호환용

  "@media ((min-width: 320px) and (width < 768px))": {
    position: "relative",
    padding: "0 16px",
    justifyContent: "space-between",
  },
}));

export const Logo = styled.h1(({ theme }) => ({
  flex: "0 0 96px",
  color: theme.colors.textMain,
  fontSize: theme.fontSize.xl,
  fontFamily: theme.fontFamily.display,

  "@media (min-width: 320px) and (width < 768px)": {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    flex: "none",
    fontSize: "24px",
    letterSpacing: "-1px",
  },
}));

export const Navigation = styled.nav({
  display: "flex",
  flex: 1,
  justifyContent: "center",

  "@media (min-width: 320px) and (width < 768px)": {
    display: "none",
  },
});

export const NavList = styled.ul(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing.lg,
}));

export const NavItem = styled.li({});

export const NavButton = styled("a", {
  shouldForwardProp: (prop) => prop !== "isActive" && prop !== "as",
})(({ theme, isActive }) => ({
  position: "relative",
  fontSize: `clamp(12px, 1.1vw, ${theme.fontSize.sm})`,
  fontWeight: isActive ? theme.fontWeight.semiBold : theme.fontWeight.regular,
  color: isActive ? theme.colors.textMain : theme.colors.secondText,
  cursor: "pointer",
  whiteSpace: "nowrap",
  "&:hover": {
    color: theme.colors.textMain,
  },
  "&::after": {
    content: '""',
    position: "absolute",
    left: "50%",
    bottom: `-${theme.spacing["2xs"]}`,
    height: "1.5px",
    background: theme.colors.textMain,
    width: "0%",
    transform: "translateX(-50%)",
    transition: "width 0.25s ease",
  },
  "&:hover::after": {
    width: "100%",
  },
}));

export const IconContainer = styled.div(({ theme }) => ({
  display: "flex",
  flex: "0 0 96px",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: theme.spacing.sm,

  "@media (min-width: 320px) and (width < 768px)": {
    flex: "none",
    marginLeft: "auto",
    gap: "8px",
  },
}));

export const IconButton = styled.button({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
});

export const MenuButton = styled.button({
  display: "none",

  "@media (min-width: 320px) and (width < 768px)": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "24px",
    height: "20px",
    padding: 0,
    cursor: "pointer",

    "& span": {
      display: "block",
      width: "100%",
      height: "1.5px",
      backgroundColor: "#000000",
    },
  },
});

export const CartIconWrapper = styled.div({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const CartBadge = styled.span(({ theme }) => ({
  position: "absolute",
  top: "-4px",
  right: "-8px",
  backgroundColor: theme.colors.emphasis,
  color: "#FFFFFF",
  fontSize: "12px",
  fontWeight: 700,
  minWidth: "18px",
  height: "18px",
  padding: "0 4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "999px",
  boxSizing: "border-box",
}));

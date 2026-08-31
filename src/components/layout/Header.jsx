import { BasketIcon, LoginIcon } from "../icons/Icons";
import styled from "@emotion/styled";

const navLinks = [
  "Lighting",
  "Organization",
  "Digital / Electronics",
  "Desk Accessories",
  "Stationery",
];

const Header = ({ activeLink }) => {
  return (
    <HeaderSection>
      <Logo>SCENERY</Logo>

      <Navigation>
        <NavList>
          {navLinks.map((link)=>(
            <NavItem key={link}>
              <NavButton
              type="button"
              isActive={link === activeLink}
              >
                {link}
              </NavButton>
            </NavItem>
          ))}
        </NavList>
      </Navigation>

      <IconContainer>
        <IconButton>
          <LoginIcon />
        </IconButton>

        <IconButton>
          <BasketIcon />
        </IconButton>
      </IconContainer>
    </HeaderSection>
  );
};

const HeaderSection = styled.header(({theme}) => ({
  width: "100%",
  height: "80px",
  padding: `0 ${theme.spacing.xl}`,
  display: "flex",
  alignItems: "center",
  backgroundColor: theme.colors.background,
}));

const Logo = styled.h1(({theme}) => ({
  flex: "0 0 96px",
  color: theme.colors.textMain,
  fontSize: theme.fontSize.xl,
  letterSpacing: "-2px",
}));

const Navigation = styled.nav({
  display: "flex",
  flex: 1,
  justifyContent: "center",
});

const NavList = styled.ul(({theme}) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing.lg,
}));

const NavItem = styled.li({});

const NavButton = styled.a(({theme, isActive}) => ({
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

const IconContainer = styled.div(({theme}) => ({
  display: "flex",
  flex: "0 0 96px",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: theme.spacing.sm,
}));

const IconButton = styled.button(({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
}));

export default Header;

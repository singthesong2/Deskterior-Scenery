import { BasketIcon, LoginIcon } from "../icons/Icons";
import { HeaderSection,
  Logo,
  Navigation,
  NavList,
  NavItem,
  NavButton,
  IconContainer,
  IconButton,
 } from "../../styles/Header.styles";

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

export default Header;

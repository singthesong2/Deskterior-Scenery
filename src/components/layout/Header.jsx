import { Link } from "react-router";
import categories from "../../data/categories";
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

const Header = ({ activeLink }) => {
  return (
    <HeaderSection>
      <Logo as={Link} to="/">SCENERY</Logo>

      <Navigation>
        <NavList>
          {categories.map((category)=>(
            <NavItem key={category.id}>
              <NavButton
              as={Link}
              to={category.path}
              isActive={category.name === activeLink}
              >
                {category.name}
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
          <BasketIcon width={30} height={30} />
        </IconButton>
      </IconContainer>
    </HeaderSection>
  );
};

export default Header;

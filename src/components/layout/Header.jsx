import { Link } from "react-router";
import categories from "../../data/categories";
import { BasketIcon, LoginIcon } from "../icons/Icons";
import {
  HeaderSection,
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
      <Logo as={Link} to="/" aria-label="타이틀 메인화면 버튼">
        SCENERY
      </Logo>

      <Navigation>
        <NavList>
          {categories.map((category) => (
            <NavItem key={category.id}>
              <NavButton
                as={Link}
                to={category.path}
                isActive={category.name === activeLink}
                aria-label={`${category.name} 버튼`}
              >
                {category.name}
              </NavButton>
            </NavItem>
          ))}
        </NavList>
      </Navigation>

      <IconContainer>
        <IconButton as={Link} to="/login" aria-label="로그인 버튼">
          <LoginIcon />
        </IconButton>

        <IconButton as={Link} to="/cartpage" aria-label="장바구니 버튼">
          <BasketIcon width={30} height={30} />
        </IconButton>
      </IconContainer>
    </HeaderSection>
  );
};

export default Header;

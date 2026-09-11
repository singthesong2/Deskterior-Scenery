import { useEffect, useState } from "react";
import { Link } from "react-router";
import { getCategories } from "../../api/categoriesApi";
import { BasketIcon, LoginIcon } from "../icons/Icons";
import useCartStore from "../../store/cartStore";
import {
  HeaderSection,
  Logo,
  Navigation,
  NavList,
  NavItem,
  NavButton,
  IconContainer,
  IconButton,
  MenuButton,
  CartIconWrapper,
  CartBadge,
} from "../../styles/Header.styles";

const Header = ({ activeLink }) => {
  // 스토어에서 cartiTRem 가져옴
  const { cartItems, syncCartWithServer } = useCartStore();
  // 로그인 확인
  const isLoggedIn = !!localStorage.getItem("token");
  // 뱃지 갯수 계산
  const cartCount = cartItems.length;

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories()
      .then(setCategories)
      .catch((err) => console.error("카테고리 로딩 실패:", err));
  }, []);
  // 장바구니 동기화
  useEffect(() => {
    if (isLoggedIn) {
      syncCartWithServer();
    }
  }, [isLoggedIn, syncCartWithServer]);

  return (
    <HeaderSection>
      <MenuButton type="button" aria-label="메뉴 열기">
        <span />
        <span />
        <span />
      </MenuButton>

      <Logo>
        <Link to="/" aria-label="타이틀 메인화면 버튼">
          SCENERY
        </Link>
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
          <CartIconWrapper>
            <BasketIcon width={30} height={30} />
            {cartCount > 0 && <CartBadge>{cartCount}</CartBadge>}
          </CartIconWrapper>
        </IconButton>
      </IconContainer>
    </HeaderSection>
  );
};

export default Header;

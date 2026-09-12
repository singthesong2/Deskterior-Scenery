import useAuthStore from "../../store/UseAuthStore";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { getCategories } from "../../api/categoriesApi";
import { logout } from "../../api/authApi";
import { BasketIcon, LoginIcon, LogoutIcon } from "../icons/Icons";
import useCartStore from "../../store/cartStore";
import { showFailToast, showSuccessToast } from "../common/ShowToast";
import { useNavigate } from "react-router";
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
  const navigate = useNavigate();
  // 스토어에서 cartiTRem 가져옴
  const { cartItems, syncCartWithServer, clearLocalCart } = useCartStore();

  // 로그인 확인
  const user = useAuthStore((state) => state.user);

  const clearUser = useAuthStore((state) => state.clearUser);
  // 뱃지 갯수 계산
  const cartCount = cartItems.length;

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories()
      .then(setCategories)
      .catch((err) => console.error("카테고리 로딩 실패:", err));
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("로그아웃 API 실패:", error);
      showFailToast("Logout Fail");
    } finally {
      // 서버 요청 성공/실패와 상관없이 로컬(토큰·유저·장바구니)은 항상 정리한다
      localStorage.removeItem("token");
      clearUser();
      clearLocalCart();

      showSuccessToast("Logout successful");
      navigate("/");
    }
  };

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
        {user ? (
          <IconButton
            type="button"
            aria-label="로그아웃 버튼"
            onClick={handleLogout}
          >
            <LogoutIcon />
          </IconButton>
        ) : (
          <IconButton as={Link} to="/login" aria-label="로그인 버튼">
            <LoginIcon />
          </IconButton>
        )}

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

import { useNavigate } from "react-router";
import { ArrowLeftIcon } from "../icons/Icons";
import * as S from "../../styles/ProductDetail/ProductBreadcrumb.styles";

/**
 * 상단 네비 — 뒤로가기 + "Home > Category > 상품명" 경로.
 * 전부 현재 위치 표시용 텍스트일 뿐, 클릭되지 않는다.
 */
const ProductBreadcrumb = ({ category, productName }) => {
  const navigate = useNavigate();
  const trail = ["Home", category, productName].filter(Boolean);

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <S.Nav aria-label="현재 위치">
      <S.BackButton type="button" onClick={handleBack}>
        <ArrowLeftIcon aria-hidden="true" focusable="false" />
        Prev
      </S.BackButton>

      <S.Trail>
        {trail.map((label, index) => {
          const isLast = index === trail.length - 1;
          return (
            <S.Crumb
              key={index}
              aria-current={isLast ? "page" : undefined}
            >
              {label}
            </S.Crumb>
          );
        })}
      </S.Trail>
    </S.Nav>
  );
};

export default ProductBreadcrumb;

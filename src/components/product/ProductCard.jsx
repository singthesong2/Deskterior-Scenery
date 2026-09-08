import { useState } from "react";
import { useNavigate } from "react-router";
import { BasketIcon, HeartIcon, StarIcon } from "../icons/Icons";
import Badge from "../common/Badge";
import * as S from "../../styles/ListPageStyles/ProductCard.styles";

const ProductCard = ({ product, onAddToCart, onToggleLike }) => {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(!!product.liked);

  const safeRating = Math.min(5, Math.max(0, Number(product.rating) || 0));
  const safeCount = Number(product.reviewCount) || 0;
  const safePrice = Number(product.price) || 0;

  // 빈(placeholder) 카드는 클릭 이동 없음
  const isClickable = Boolean(product?.id) && product.id !== "placeholder";

  const handleCardClick = () => {
    if (!isClickable) return;
    //라우트가 /products/:id 로 바뀌면 navigate(`/products/${product.id}`)
    navigate("/detailpage");
  };

  // 키보드(Tab 으로 포커스 → Enter / Space)로도 상세 이동
  const handleCardKeyDown = (event) => {
    if (!isClickable) return;
    // 카드 안 버튼(찜/장바구니)에서 올라온 키 이벤트는 무시
    if (event.target !== event.currentTarget) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault(); // Space 로 인한 페이지 스크롤 방지
      handleCardClick();
    }
  };

  const handleToggleLike = (event) => {
    event.stopPropagation(); // 카드 클릭(상세 이동)으로 전파 방지
    setLiked((prev) => !prev);
    onToggleLike?.(product.id);
  };

  const handleAddToCart = (event) => {
    event.stopPropagation();
    onAddToCart?.(product.id);
  };

  return (
    <S.Card
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
      role={isClickable ? "button" : undefined}
      tabIndex={isClickable ? 0 : undefined}
      aria-label={isClickable ? `${product.name} 상세 보기` : undefined}
      style={isClickable ? { cursor: "pointer" } : undefined}
    >
      <S.ImageWrapper>
        {product.soldOut && <S.ImageOverlay />}
        {product.soldOut && <Badge text="Sold out" top="8px" left="8px" />}

        {product.imageUrl && (
          <S.ProductImage src={product.imageUrl} alt={product.name} />
        )}

        <S.IconStack>
          <S.LikeButton
            type="button"
            aria-pressed={liked}
            aria-label="찜하기"
            onClick={handleToggleLike}
          >
            <HeartIcon filled={liked} width={20} height={20} />
          </S.LikeButton>
          <S.CartButton
            type="button"
            aria-label="장바구니 담기"
            onClick={handleAddToCart}
          >
            <BasketIcon width={16} height={16} />
          </S.CartButton>
        </S.IconStack>
      </S.ImageWrapper>

      <S.Info>
        <S.ProductName>{product.name}</S.ProductName>
        <S.Price>₩ {safePrice.toLocaleString("ko-KR")}</S.Price>
        <S.Rating>
          <S.Star>
            <StarIcon width={12} height={12} />
          </S.Star>{" "}
          {safeRating.toFixed(1)}({safeCount})
        </S.Rating>
      </S.Info>
    </S.Card>
  );
};

export default ProductCard;

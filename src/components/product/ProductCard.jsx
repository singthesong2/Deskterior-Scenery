import { useState } from "react";
import { useTheme } from "@emotion/react";
import { BasketIcon, HeartIcon, StarIcon } from "../icons/Icons";
import Badge from "../common/Badge";
import * as S from "../../styles/ListPageStyles/ProductCard.styles";

const ProductCard = ({
  product,
  onAddToCart,
  onToggleLike,
  showCategory = false,
  isBest = false,
  isNew = false,
}) => {
  const theme = useTheme();
  const [liked, setLiked] = useState(!!product.liked);

  const safeRating = Math.min(5, Math.max(0, Number(product.rating) || 0));
  const safeCount = Number(product.reviewCount) || 0;
  const safePrice = Number(product.price) || 0;

  // 빈(placeholder) 카드는 링크 없음
  const isClickable = Boolean(product?.id) && product.id !== "placeholder";

  const handleToggleLike = () => {
    setLiked((prev) => !prev);
    onToggleLike?.(product.id);
  };

  const handleAddToCart = () => onAddToCart?.(product.id);

  return (
    <S.Card>
      <S.ImageWrapper>
        {product.soldOut && <S.ImageOverlay />}

        {(product.soldOut || isBest || isNew) && (
          <S.BadgeGroup>
            {product.soldOut && <Badge text="Sold out" />}
            {isBest && <Badge text="Best" size="sm" />}
            {isNew && (
              <Badge text="New" background={theme.colors.textMain} size="sm" />
            )}
          </S.BadgeGroup>
        )}

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
            <HeartIcon filled={liked} width={28} height={28} />
          </S.LikeButton>
          <S.CartButton
            type="button"
            aria-label="장바구니 담기"
            onClick={handleAddToCart}
          >
            <BasketIcon width={24} height={24} />
          </S.CartButton>
        </S.IconStack>
      </S.ImageWrapper>

      <S.Info>
        {showCategory && product.categoryName && (
          <S.CategoryName>{product.categoryName}</S.CategoryName>
        )}
        <S.ProductName>{product.name}</S.ProductName>
        <S.Price>₩ {safePrice.toLocaleString("ko-KR")}</S.Price>
        <S.Rating>
          <S.Star>
            <StarIcon width={12} height={12} />
          </S.Star>{" "}
          {safeRating.toFixed(1)}({safeCount})
        </S.Rating>
      </S.Info>

      {/* 카드 전체를 덮는 투명 링크 */}
      {isClickable && (
        <S.StretchedLink
          to={`/products/${product.id}`}
          aria-label={`${product.name} 상세 보기`}
        />
      )}
    </S.Card>
  );
};

export default ProductCard;

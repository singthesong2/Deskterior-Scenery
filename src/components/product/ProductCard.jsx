import { useState } from "react";
import { BasketIcon, HeartIcon, StarIcon } from "../icons/Icons";
import * as S from "../../styles/ListPageStyles/ProductCard.styles";

const ProductCard = ({ product, onAddToCart, onToggleLike }) => {
  const [liked, setLiked] = useState(!!product.liked);

  const safeRating = Math.min(5, Math.max(0, Number(product.rating) || 0));
  const safeCount = Number(product.reviewCount) || 0;
  const safePrice = Number(product.price) || 0;

  const handleToggleLike = () => {
    setLiked((prev) => !prev);
    onToggleLike?.(product.id);
  };

  const handleAddToCart = () => onAddToCart?.(product.id);

  return (
    <S.Card>
      <S.ImageWrapper>
        {product.soldOut && <S.SoldOutBadge>Sold out</S.SoldOutBadge>}

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

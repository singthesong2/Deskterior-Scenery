import { useState } from "react";
import SafeImage from "../common/SafeImage";
import SceneryBox from "../common/SceneryBox";
import * as S from "../../styles/ProductImageGallery.styles";

const ProductImageGallery = ({ images, alt }) => {
  const [current, setCurrent] = useState(0);

  if (!images?.length) return null;

  const safeCurrent = current < images.length ? current : 0;

  return (
    <div>
      {/* 큰 사진 (없거나 실패하면 SCENERY) */}
      <S.MainImageFrame>
        <SafeImage
          src={images[safeCurrent]}
          alt={alt}
          fallback={
            <SceneryBox
              label="등록된 이미지가 없습니다"
              aspectRatio="25 / 27"
              big
            />
          }
          style={S.mainImage}
        />
      </S.MainImageFrame>

      {/* 큰 사진 밑 작은 사진들 */}
      <S.ThumbRow>
        {images.map((src, i) => {
          const selected = i === safeCurrent;
          return (
            <S.ThumbButton
              key={i}
              type="button"
              $active={selected}
              onClick={() => setCurrent(i)}
              aria-current={selected ? "true" : undefined}
              aria-label={`${alt} ${i + 1}번 이미지 보기`}
            >
              <SafeImage
                src={src}
                alt=""
                fallback={<SceneryBox />}
                style={S.fillImage}
              />
            </S.ThumbButton>
          );
        })}
      </S.ThumbRow>
    </div>
  );
};

export default ProductImageGallery;

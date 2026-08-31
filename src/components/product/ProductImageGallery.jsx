import { useState } from "react";
import SafeImage from "../common/SafeImage";
import SceneryBox from "../common/SceneryBox";

const ProductImageGallery = ({ images, alt }) => {
  const [current, setCurrent] = useState(0);

  if (!images?.length) return null;

  const safeCurrent = current < images.length ? current : 0;

  return (
    <div>
      {/* 큰 사진 (없거나 실패하면 SCENERY) */}
      <SafeImage
        src={images[safeCurrent]}
        alt={alt}
        fallback={
          <SceneryBox
            fontSize={24}
            radius={8}
            label="등록된 이미지가 없습니다"
          />
        }
        style={{
          width: "100%",
          aspectRatio: "1 / 1",
          objectFit: "cover",
          borderRadius: 8,
          background: "#f2f2f2",
        }}
      />

      {/* 큰 사진 밑 작은 사진들 */}
      <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
        {images.map((src, i) => {
          const selected = i === safeCurrent;
          return (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              aria-current={selected ? "true" : undefined}
              aria-label={`${alt} ${i + 1}번 이미지 보기`}
              style={{
                flex: 1,
                minWidth: 0,
                padding: 0,
                lineHeight: 0,
                border: "none",
                background: "none",
                cursor: "pointer",
              }}
            >
              <SafeImage
                src={src}
                alt=""
                fallback={<SceneryBox fontSize={9} />}
                style={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  objectFit: "cover",
                  borderRadius: 4,
                  display: "block",
                }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductImageGallery;

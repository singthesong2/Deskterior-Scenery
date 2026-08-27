import { useState } from "react";

const ProductImageGallery = ({ images, alt }) => {
  const [current, setCurrent] = useState(0);

  if (!images?.length) return null;

  const safeCurrent = current < images.length ? current : 0;

  return (
    <div>
      {/* 큰 사진 */}
      <img
        src={images[safeCurrent]}
        alt={alt}
        style={{
          width: "100%",
          aspectRatio: "1 / 1",
          objectFit: "cover",
          borderRadius: 8,
          background: "#f2f2f2",
        }}
      />

      {/* 큰 사진 밑 작은 사진들 (현재 보고 있는 사진 제외) */}
      <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
        {images.map((src, i) =>
          i === safeCurrent ? null : (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              style={{
                padding: 0,
                lineHeight: 0,
                borderRadius: 6,
                border: "1px solid #ccc",
                cursor: "pointer",
              }}
            >
              <img
                src={src}
                alt={`${alt} ${i + 1}`}
                width={96}
                height={96}
                style={{
                  objectFit: "cover",
                  borderRadius: 4,
                  display: "block",
                }}
              />
            </button>
          ),
        )}
      </div>
    </div>
  );
};

export default ProductImageGallery;

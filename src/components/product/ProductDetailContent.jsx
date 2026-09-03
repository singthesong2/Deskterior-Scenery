import SafeImage from "../common/SafeImage";
import SceneryBox from "../common/SceneryBox";

const ProductDetailContent = ({ sections = [] }) => {
  if (!sections.length) return null;

  return (
    <section
      style={{
        maxWidth: 700,
        margin: "48px auto 0",
        padding: "0 40px",
      }}
    >
      <h2
        style={{
          margin: "0 0 24px",
          fontFamily: "'DM Serif Text', Georgia, 'Times New Roman', serif", // font-family-display
          fontSize: "3rem", // m-display-md-size
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "normal",
          letterSpacing: "-0.01em", // letter-spacing-default
          color: "#1F211F", // color-text-primary
        }}
      >
        Item Detail
      </h2>

      {sections.map((section) => (
        <article key={section.id} style={{ marginBottom: 56 }}>
          {section.image && (
            <SafeImage
              src={section.image}
              alt={section.title || ""}
              loading="lazy"
              fallback={
                <SceneryBox
                  aspectRatio="3 / 2"
                  radius={8}
                  label="이미지를 불러올 수 없습니다"
                  big
                />
              }
              style={{ width: "100%", borderRadius: 8, display: "block" }}
            />
          )}

          {section.title && (
            <h3
              style={{
                margin: "20px 0 8px",
                fontFamily: "'Pretendard Variable', system-ui, sans-serif",
                fontSize: "0.875rem",
                fontStyle: "normal",
                fontWeight: 500, // Label/MD
                lineHeight: "normal",
                letterSpacing: "-0.00875rem",
                color: "#1F211F", // color-text-primary
              }}
            >
              {section.title}
            </h3>
          )}

          {section.body && (
            <p
              style={{
                margin: 0,
                fontFamily: "'Pretendard Variable', system-ui, sans-serif",
                fontSize: "0.875rem",
                fontStyle: "normal",
                fontWeight: 400, // Body/MD
                lineHeight: "normal",
                letterSpacing: "-0.00875rem",
                color: "#74766F", // color-text-secondary
              }}
            >
              {section.body}
            </p>
          )}
        </article>
      ))}
    </section>
  );
};

export default ProductDetailContent;

const ProductDetailContent = ({ sections }) => {
  if (!sections?.length) return null;

  return (
    <section
      style={{
        maxWidth: 700,
        margin: "48px auto 0",
        padding: "0 40px",
      }}
    >
      <h2 style={{ fontSize: 22, marginBottom: 24 }}>상세 설명</h2>

      {sections.map((section) => (
        <article key={section.id} style={{ marginBottom: 56 }}>
          {section.image && (
            <img
              src={section.image}
              alt={section.title || ""}
              loading="lazy"
              style={{ width: "100%", borderRadius: 8, display: "block" }}
            />
          )}

          {section.title && (
            <h3 style={{ margin: "20px 0 8px", fontSize: 18 }}>
              {section.title}
            </h3>
          )}

          {section.body && (
            <p style={{ lineHeight: 1.7, color: "#444" }}>{section.body}</p>
          )}
        </article>
      ))}
    </section>
  );
};

export default ProductDetailContent;

const ProductDetails = ({ details }) => {
  if (!details?.length) return null;

  return (
    <div style={{ borderTop: "1px solid #eee", paddingTop: 16 }}>
      <h3 style={{ fontWeight: "bold", marginBottom: 8 }}>상품정보</h3>
      <ul style={{ lineHeight: 1.8, paddingLeft: 20, margin: 0 }}>
        {details.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetails;

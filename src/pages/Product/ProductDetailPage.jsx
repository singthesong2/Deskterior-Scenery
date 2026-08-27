import { useState } from "react";
import { mockProduct } from "../../constants/mockProduct";
import ProductImageGallery from "../../components/product/ProductImageGallery";
import ProductInfo from "../../components/product/ProductInfo";
import PurchaseBox from "../../components/product/PurchaseBox";
import ProductDetails from "../../components/product/ProductDetails";

const ProductDetailPage = ({ product = mockProduct }) => {
  const [quantity, setQuantity] = useState(1);

  const totalPrice = product.price * quantity;

  /* localStorage("cartItems")에 병합하도록 채울 예정 */
  const handleAddToCart = () => {
    console.log("장바구니 담기", {
      productId: product.id,
      quantity,
      price: product.price,
    });
  };

  const handleBuyNow = () => {
    console.log("바로 구매", {
      productId: product.id,
      quantity,
      totalPrice,
    });
  };

  return (
    <div
      style={{
        maxWidth: 1080,
        margin: "0 auto",
        padding: 24,
        textAlign: "left",
      }}
    >
      <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 360px" }}>
          <ProductImageGallery images={product.images} alt={product.name} />
        </div>

        <div
          style={{
            flex: "1 1 360px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <ProductInfo
            name={product.name}
            rating={product.rating}
            reviewCount={product.reviewCount}
            price={product.price}
            description={product.description}
          />
          <ProductDetails details={product.details} />
          <PurchaseBox
            quantity={quantity}
            onQuantityChange={setQuantity}
            totalPrice={totalPrice}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

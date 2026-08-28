import { useState } from "react";
import { mockLighting } from "../../constants/mockLighting";
import Header from "../../components/layout/Header";
import ProductCard from "../../components/product/ProductCard";
import ProductToolbar from "../../components/product/ProductToolbar";
import Pagination from "../../components/product/Pagination";

const TOTAL_PAGES = 6;

const LightingPage = ({ products = mockLighting }) => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  const handleAddToCart = (productId) => {
    console.log("장바구니 담기", { productId });
  };

  return (
    <div>
      <Header activeLink="Lighting" />

      <main style={{ padding: "40px 32px", textAlign: "left" }}>
        <h1
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: 36,
            fontWeight: 700,
            margin: "0 0 24px",
          }}
        >
          Take your SCENERY
        </h1>

        <div
          style={{
            width: "100%",
            height: 220,
            background: "#e9e5db",
          }}
        />

        <hr style={{ border: "none", borderTop: "1px solid #ece9e2", margin: "40px 0" }} />

        <h2
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: 24,
            fontWeight: 700,
            textAlign: "center",
            margin: "0 0 32px",
          }}
        >
          Lighting
        </h2>

        <ProductToolbar search={search} onSearchChange={setSearch} />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={TOTAL_PAGES}
          onPageChange={setCurrentPage}
        />
      </main>
    </div>
  );
};

export default LightingPage;

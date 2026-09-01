import { useState } from "react";
import { mockLighting } from "../../constants/mockLighting";
import ProductCard from "../../components/product/ProductCard";
import ProductToolbar from "../../components/product/ProductToolbar";
import Pagination from "../../components/product/Pagination";
import { NoResultIcon } from "../../components/icons/Icons";

const TOTAL_PAGES = 2;

const SORT_COMPARATORS = {
  name: (a, b) => a.name.localeCompare(b.name),
  priceHigh: (a, b) => b.price - a.price,
  priceLow: (a, b) => a.price - b.price,
  reviewCount: (a, b) => b.reviewCount - a.reviewCount,
};

const LightingPage = ({ products = mockLighting }) => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("name");

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()),
    )
    .sort(SORT_COMPARATORS[sortBy]);

  const duplicateProducts = products.map((product) => ({
    ...product,
    id: `${product.id}-copy`,
  }));

  const pagedProducts =
    currentPage === 1
      ? filteredProducts
      : duplicateProducts
          .filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase()),
          )
          .sort(SORT_COMPARATORS[sortBy])
          .reverse();

  const handleAddToCart = (productId) => {
    console.log("장바구니 담기", { productId });
  };

  return (
    <div>
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

        <hr
          style={{
            border: "none",
            borderTop: "1px solid #ece9e2",
            margin: "40px 0",
          }}
        />

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

        <ProductToolbar
          search={search}
          onSearchChange={setSearch}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        {filteredProducts.length === 0 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "120px 0",
            }}
          >
            <NoResultIcon width={64} height={64} style={{ color: "#e2ded3" }} />
            <p
              style={{
                marginTop: 20,
                fontSize: 15,
                color: "#1F211F",
              }}
            >
              "{search}"에 대한 검색 결과가 없습니다
            </p>
            <p
              style={{
                marginTop: 6,
                fontSize: 13,
                color: "#a19d92",
              }}
            >
              검색어를 확인하거나 다시 입력해주세요
            </p>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
          >
            {pagedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}

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

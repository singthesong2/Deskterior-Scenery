import { useState } from "react";
import allProducts from "../../data/products";
import ProductCard from "../../components/product/ProductCard";
import ProductToolbar from "../../components/product/ProductToolbar";
import Pagination from "../../components/product/Pagination";
import * as S from "../../styles/LightingPage.styles";

const TOTAL_PAGES = 2;

const SORT_COMPARATORS = {
  name: (a, b) => a.name.localeCompare(b.name),
  priceHigh: (a, b) => b.price - a.price,
  priceLow: (a, b) => a.price - b.price,
  reviewCount: (a, b) => b.reviewCount - a.reviewCount,
};

const stripAngleBrackets = (url) => url.replace(/^<|>$/g, "");

const lightingProducts = allProducts
  .filter((product) => product.categoryId === "lighting")
  .map((product) => ({
    ...product,
    imageUrl: stripAngleBrackets(product.imageUrl),
  }));

const LightingPage = ({ products = lightingProducts }) => {
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
      <S.Main>
        <S.PageTitle>Take your SCENERY</S.PageTitle>

        <S.HeroPlaceholder />

        <S.Divider />

        <S.SectionTitle>Lighting</S.SectionTitle>

        <ProductToolbar
          search={search}
          onSearchChange={setSearch}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        {filteredProducts.length === 0 ? (
          <S.EmptyState>
            <S.StyledNoResultIcon width={64} height={64} />
            <S.EmptyTitle>"{search}"에 대한 검색 결과가 없습니다</S.EmptyTitle>
            <S.EmptySubtitle>
              검색어를 확인하거나 다시 입력해주세요
            </S.EmptySubtitle>
          </S.EmptyState>
        ) : (
          <S.ProductGrid>
            {pagedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </S.ProductGrid>
        )}

        <Pagination
          currentPage={currentPage}
          totalPages={TOTAL_PAGES}
          onPageChange={setCurrentPage}
        />
      </S.Main>
    </div>
  );
};

export default LightingPage;

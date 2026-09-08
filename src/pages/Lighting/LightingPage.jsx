import { useState } from "react";
import { Link } from "react-router";
import allProducts from "../../data/products";
import ProductCard from "../../components/product/ProductCard";
import ProductToolbar from "../../components/product/ProductToolbar";
import Pagination from "../../components/product/Pagination";
import * as S from "../../styles/ListPageStyles/LightingPage.styles";

const PAGE_SIZE = 6;
const ROW_SIZE = 3;

const BREADCRUMB_TRAIL = [
  { label: "Home", to: "/" },
  { label: "Lighting" },
];

const PLACEHOLDER_PRODUCT = { id: "placeholder", name: " ", price: 0 };

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

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / PAGE_SIZE),
  );

  const pagedProducts = filteredProducts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  const placeholderCount = PAGE_SIZE - pagedProducts.length;

  const gridItems = [
    ...pagedProducts.map((product) => ({ key: String(product.id), product })),
    ...Array.from({ length: placeholderCount }).map((_, index) => ({
      key: `placeholder-${index}`,
      product: PLACEHOLDER_PRODUCT,
      isPlaceholder: true,
    })),
  ];

  const rows = [];
  for (let i = 0; i < gridItems.length; i += ROW_SIZE) {
    rows.push(gridItems.slice(i, i + ROW_SIZE));
  }

  const handleAddToCart = (productId) => {
    console.log("장바구니 담기", { productId });
  };

  return (
    <div>
      <S.Main>
        <S.Header>
          <S.Breadcrumb aria-label="현재 위치">
            <S.Trail>
              {BREADCRUMB_TRAIL.map((crumb, index) => {
                const isCurrent = index === BREADCRUMB_TRAIL.length - 1;
                return (
                  <S.Crumb
                    key={crumb.label}
                    aria-current={isCurrent ? "page" : undefined}
                  >
                    {isCurrent || !crumb.to ? (
                      crumb.label
                    ) : (
                      <Link to={crumb.to}>{crumb.label}</Link>
                    )}
                  </S.Crumb>
                );
              })}
            </S.Trail>
          </S.Breadcrumb>
          <S.PageTitle>Lighting</S.PageTitle>
          <S.PageSubtitle>Take Your SCENERY</S.PageSubtitle>
        </S.Header>

        <S.Content>
          <ProductToolbar
            search={search}
            onSearchChange={(value) => {
              setSearch(value);
              setCurrentPage(1);
            }}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />

          {filteredProducts.length === 0 ? (
            <S.EmptyState>
              <S.StyledNoResultIcon width={64} height={64} aria-hidden="true" />
              <S.EmptyTitle>"{search}"에 대한 검색 결과가 없습니다</S.EmptyTitle>
              <S.EmptySubtitle>
                검색어를 확인하거나 다시 입력해주세요
              </S.EmptySubtitle>
            </S.EmptyState>
          ) : (
            <S.ProductGrid>
              {rows.map((row, rowIndex) => (
                <S.Row key={`row-${rowIndex}`}>
                  {row.map((item) =>
                    item.isPlaceholder ? (
                      <S.GridPlaceholder key={item.key} aria-hidden="true">
                        <ProductCard product={item.product} />
                      </S.GridPlaceholder>
                    ) : (
                      <ProductCard
                        key={item.key}
                        product={item.product}
                        onAddToCart={handleAddToCart}
                      />
                    ),
                  )}
                </S.Row>
              ))}
            </S.ProductGrid>
          )}

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </S.Content>
      </S.Main>
    </div>
  );
};

export default LightingPage;

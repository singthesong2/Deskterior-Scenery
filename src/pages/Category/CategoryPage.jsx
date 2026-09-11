import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { isBestProduct, isNewProduct } from "../../data/products";
import { getCategoryById } from "../../data/categories";
import { getProducts, isForceSoldOut } from "../../api/productsApi";
import useCartStore from "../../store/cartStore";
import {
  showSuccessToast,
  showFailToast,
} from "../../components/common/ShowToast";
import ProductCard from "../../components/product/ProductCard";
import ProductToolbar from "../../components/product/ProductToolbar";
import Pagination from "../../components/product/Pagination";
import Loading from "../../components/common/Loading";
import * as S from "../../styles/ListPageStyles/CategoryPage.styles";

const PAGE_SIZE = 6;
const ROW_SIZE = 3;
// sort/q가 서버에 반영되기 전까지, 카테고리 내 전체 상품을 한 번에 받아 검색/정렬/페이징은 클라이언트에서 처리
const FETCH_LIMIT = 100;

const PLACEHOLDER_PRODUCT = { id: "placeholder", name: " ", price: 0 };

const SORT_COMPARATORS = {
  name: (a, b) => a.name.localeCompare(b.name),
  priceHigh: (a, b) => b.price - a.price,
  priceLow: (a, b) => a.price - b.price,
  reviewCount: (a, b) => b.reviewCount - a.reviewCount,
};

const CategoryPage = ({ categoryId = "lighting" }) => {
  const category = getCategoryById(categoryId);
  const addToCart = useCartStore((s) => s.addToCart);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("q") ?? "";
  const currentPage = Number(searchParams.get("page")) || 1;
  const sortBy = searchParams.get("sort") ?? "name";

  const updateSearchParams = (updates, options) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      Object.entries(updates).forEach(([key, value]) => {
        if (value === null || value === "") {
          next.delete(key);
        } else {
          next.set(key, String(value));
        }
      });
      return next;
    }, options);
  };

  const [categoryProducts, setCategoryProducts] = useState(null);
  const [loadedCategoryId, setLoadedCategoryId] = useState(null);
  const [erroredCategoryId, setErroredCategoryId] = useState(null);

  useEffect(() => {
    let alive = true;
    getProducts({ category: categoryId, limit: FETCH_LIMIT })
      .then((data) => {
        if (!alive) return;
        setCategoryProducts(
          data.products.map((product) => ({
            ...product,
            soldOut: isForceSoldOut(product.id),
          })),
        );
        setLoadedCategoryId(categoryId);
      })
      .catch((err) => {
        console.error("상품목록 로딩 실패:", err);
        if (alive) setErroredCategoryId(categoryId);
      });
    return () => {
      alive = false;
    };
  }, [categoryId]);

  const isCurrentCategory =
    categoryProducts !== null && loadedCategoryId === categoryId;
  const isCurrentError = erroredCategoryId === categoryId;

  if (!category) {
    return null;
  }

  const breadcrumbTrail = [{ label: "Home" }, { label: category.name }];

  if (isCurrentError) {
    return (
      <S.Main>
        <S.Header>
          <S.PageTitle>{category.name}</S.PageTitle>
        </S.Header>
        <p>상품목록을 불러올 수 없어요.</p>
      </S.Main>
    );
  }

  if (!isCurrentCategory) {
    return <Loading />;
  }

  const filteredProducts = categoryProducts
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

  const handleAddToCart = async (productId) => {
    const product = categoryProducts.find((p) => p.id === productId);
    if (!product) return;

    try {
      await addToCart({
        productId: product.id,
        name: product.name,
        price: product.discountPrice || product.price,
        imageUrl: product.imageUrl,
        isSoldOut: product.soldOut,
      });
      showSuccessToast("장바구니에 담겼습니다");
    } catch (err) {
      console.error("장바구니 담기 실패:", err);
      showFailToast("장바구니 담기에 실패했습니다");
    }
  };

  return (
    <div>
      <S.Main>
        <S.Header>
          <S.Breadcrumb aria-label="현재 위치">
            <S.Trail>
              {breadcrumbTrail.map((crumb, index) => {
                const isCurrent = index === breadcrumbTrail.length - 1;
                return (
                  <S.Crumb
                    key={crumb.label}
                    aria-current={isCurrent ? "page" : undefined}
                  >
                    {crumb.label}
                  </S.Crumb>
                );
              })}
            </S.Trail>
          </S.Breadcrumb>
          <S.PageTitle>{category.name}</S.PageTitle>
          <S.PageSubtitle>Take Your SCENERY</S.PageSubtitle>
        </S.Header>

        <S.Content>
          <ProductToolbar
            search={search}
            onSearchChange={(value) => {
              updateSearchParams({ q: value, page: 1 }, { replace: true });
            }}
            sortBy={sortBy}
            onSortChange={(value) =>
              updateSearchParams({ sort: value }, { replace: true })
            }
          />

          {filteredProducts.length === 0 ? (
            <S.EmptyState>
              <S.StyledNoResultIcon width={64} height={64} aria-hidden="true" />
              <S.EmptyTitle>
                "{search}"에 대한 검색 결과가 없습니다
              </S.EmptyTitle>
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
                        isBest={isBestProduct(item.product.id)}
                        isNew={isNewProduct(item.product.id)}
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
            onPageChange={(page) => updateSearchParams({ page })}
          />
        </S.Content>
      </S.Main>
    </div>
  );
};

export default CategoryPage;

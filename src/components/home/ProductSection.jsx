import {
    ProductsSection,
    ProductContainer,
    ProductTitle,
    ProductSlider,
    SliderButton,
    PageIndicator,
    IndicatorButton,
} from "../../styles/MainStyles/ProductSection.styles";
import {
    ChevronLeftIcon,
    ChevronRightIcon,
} from "../icons/Icons";
import products, { isBestProduct, isNewProduct } from "../../data/products";
import ProductCard from "../product/ProductCard";
import categories from "../../data/categories";
import { useState } from "react";

const ITEMS_PER_PAGE = 3;

// getCategoryname(): 카테고리 이름을 찾는 함수, 일치하는 categoryId를 찾으면 category name을 반환하고 찾지 못하면 categoryId를 반환함
function getCategoryName(categoryId) {
    const category = categories.find(
        (item) => item.id === categoryId
    );
    return category?.name ?? categoryId;
}

function ProductGroup({title, items, isBest = false, }) {
    const [currentPage, setCurrentPage] = useState(0);
    const startIndex = currentPage * ITEMS_PER_PAGE;
    const visibleProducts = items.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );
    // 제품 개수를 3으로 나누면 페이지 수가 나옴
    const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

    // Page Indicator
    const pageNumbers = [];

    for(let page = 0; page < totalPages; page++) {
        pageNumbers.push(page);
    }

    // handlePrevious(): 제품 카드의 이전 페이지로 이동하는 함수
    function handlePrevious() {
        if(totalPages <= 1) return;

        setCurrentPage((previousPage) =>
            previousPage === 0
                ? totalPages - 1
                : previousPage - 1
            );
    };

    // handleNext(): 제품 카드의 다음 페이지로 이동하는 함수
    function handleNext() {
        if(totalPages <= 1) return;

        setCurrentPage((previousPage) =>
        (previousPage + 1) % totalPages
        );
    };

    return (
        <ProductsSection isBest={isBest}>
            <ProductTitle>{title}</ProductTitle>

            <ProductSlider>
                <SliderButton
                    type="button"
                    onClick={handlePrevious}
                    aria-label={`${title} 이전 상품`}
                    style={{
                        left: 0,
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    <ChevronLeftIcon width={24} height={24} />
                </SliderButton>

                <ProductContainer>
                    {visibleProducts.map((product) => (
                    <ProductCard
                    key={product.id}
                    product={{
                        ...product,
                        categoryName: getCategoryName(product.categoryId),
                    }}
                    showCategory
                    isBest={isBestProduct(product.id)}
                    isNew={isNewProduct(product.id)}
                    />
                ))}
                </ProductContainer>

                <SliderButton
                    type="button"
                    onClick={handleNext}
                    aria-label={`${title} 다음 상품`}
                    style={{
                        right: 0,
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    <ChevronRightIcon width={24} height={24} />
                </SliderButton>
            </ProductSlider>

            <PageIndicator>
                {pageNumbers.map((pageIndex) => (
                    <IndicatorButton
                        key={pageIndex}
                        type="button"
                        aria-label={`${title} ${pageIndex + 1}페이지`}
                        aria-current={
                            pageIndex === currentPage ? "page" : undefined
                        }
                        onClick={() => setCurrentPage(pageIndex)}
                    />
                ))}
            </PageIndicator>
        </ProductsSection>
    );
}

function ProductSection() {
    const bestProducts = products.filter(
        (product) => product.isBest && !product.soldOut
    );
    const newProducts = products.filter(
        (product) => product.isNew && !product.soldOut
    );

    return (
        <>
            <ProductGroup
                title="Best Items"
                items={bestProducts}
                isBest
            />
            <ProductGroup
                title="New Items"
                items={newProducts}
            />
        </>
  )
}

export { ProductSection };
import {
    ProductsSection,
    ProductContainer,
    ProductTitle,
    ProductSlider,
    SliderButton,
} from "../../styles/MainStyles/ProductSection.styles";
import {
    ChevronLeftIcon,
    ChevronRightIcon,
} from "../icons/Icons";
import products from "../../data/products";
import ProductCard from "../product/ProductCard";
import { useState } from "react";

const ITEMS_PER_PAGE = 3;

function ProductGroup({title, items}) {
    const [currentPage, setCurrentPage] = useState(0);
    const startIndex = currentPage * ITEMS_PER_PAGE;
    const visibleProducts = items.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );
    // 제품 개수를 3으로 나누면 페이지 수가 나옴
    const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

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
        <ProductsSection>
            <ProductTitle>{title}</ProductTitle>

            <ProductSlider>
                <SliderButton
                    type="button"
                    onClick={handlePrevious}
                    aria-label={`${title} 이전 상품`}
                    style={{
                        left: 0,
                        transform: "translate(=50%, -50%)",
                    }}
                >
                    <ChevronLeftIcon width={24} height={24} />
                </SliderButton>

                <ProductContainer>
                    {visibleProducts.map((product) => (
                    <ProductCard 
                    key={product.id}
                    product={product}
                    />
                ))}
                </ProductContainer>
                <SliderButton
                    type="button"
                    onClick={handleNext}
                    aria-label={`${title} 다음 상품`}
                    style={{
                        right: 0,
                        transform: "translate(=50%, -50%)",
                    }}
                >
                    <ChevronRightIcon width={24} height={24} />
                </SliderButton>
            </ProductSlider>
        </ProductsSection>
    );
}

function ProductSection() {
    // API 연결 전 임시 사용
    const bestProducts = products.slice(0, 9);
    const newProducts = products.slice(-9);

    return (
        <>
            <ProductGroup
                title="Best Items"
                items={bestProducts}
            />
            <ProductGroup
                title="New Items"
                items={newProducts}
            />
        </>
  )
}

export { ProductSection };
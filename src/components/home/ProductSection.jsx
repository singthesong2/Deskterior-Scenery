import {
    ProductsSection,
    ProductTitle,
    ProductSlider,
    SliderButton,
    PageIndicator,
    IndicatorButton,
    SliderViewport,
    SliderTrack,
} from "../../styles/MainStyles/ProductSection.styles";
import {
    ChevronLeftIcon,
    ChevronRightIcon,
} from "../icons/Icons";
import products, { isBestProduct, isNewProduct } from "../../data/products";
import ProductCard from "../product/ProductCard";
import categories from "../../data/categories";
import { useState, useEffect } from "react";

// 페이지별 상품 표시 개수
const ITEMS_PER_PAGE = 3;
const CARD_WIDTH = 280;
const CARD_GAP = 24;
const CARD_STEP = CARD_WIDTH + CARD_GAP;
const SLIDER_SIDE_SPACE = 68;

// getCategoryname(): 카테고리 이름을 찾는 함수, 일치하는 categoryId를 찾으면 category name을 반환하고 찾지 못하면 categoryId를 반환함
function getCategoryName(categoryId) {
    const category = categories.find(
        (item) => item.id === categoryId
    );
    return category?.name ?? categoryId;
}

function ProductGroup({title, items, isBest = false, }) {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [direction, setDirection] = useState(1);
    const [isResetting, setIsResetting] = useState(false);

    useEffect(() => {
        if(!isResetting) return;

        const frameId = requestAnimationFrame(() => {
            setIsResetting(false);
        });

        return() => cancelAnimationFrame(frameId);
    }, [isResetting]);

    const sliderProducts = [
        items[items.length - 1],
        ...items,
        items[0],
        items[1],
        items[2],
    ];

    // 제품 개수를 3으로 나누면 페이지 수가 나옴
    const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
    const activePage = Math.floor(currentIndex / ITEMS_PER_PAGE);

    // Page Indicator
    const pageNumbers = [];

    for(let page = 0; page < totalPages; page++) {
        pageNumbers.push(page);
    }

    // handlePrevious(): 제품 카드의 이전 페이지로 이동하는 함수
    function handlePrevious() {
        if(items.length <= 1) return;

        setDirection(-1);

        setCurrentIndex((previousIndex) => {
            if(previousIndex <= 0) {
                return previousIndex;
            }
            return previousIndex - 1;
        });
    }

    // handleNext(): 제품 카드의 다음 페이지로 이동하는 함수
    function handleNext() {
        if(items.length <= 1) return;

        setDirection(1);

        setCurrentIndex((previousIndex) => {
            if(previousIndex >= items.length + 1) {
                return previousIndex;
            }
            return previousIndex + 1;
        });
    };

    // handleAnimationComplete(): 애니메이션 완료 함수
    function handleAnimationComplete() {
        if(currentIndex === 0) {
            setIsResetting(true);
            setCurrentIndex(items.length);
        }

        if(currentIndex === items.length + 1) {
            setIsResetting(true);
            setCurrentIndex(1);
        }
    }

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
                        transform: "translate(-50%, 50%)",
                    }}
                >
                    <ChevronLeftIcon width={24} height={24} />
                </SliderButton>

                <SliderViewport>
                    <SliderTrack
                    animate={{
                        x: SLIDER_SIDE_SPACE - currentIndex * CARD_STEP,
                    }}
                    transition={
                        isResetting
                        ? { duration: 0 }
                        : {
                        type: "spring",
                        stiffness: 300,
                        damping: 70,
                        mass: 0.4,
                    }
                }
                onAnimationComplete={handleAnimationComplete}
                    >
                        {sliderProducts.map((product, index) => (
                        <ProductCard 
                        key={`${product.id}-${index}`}
                        product={{
                            ...product,
                            categoryName: getCategoryName(product.categoryId),
                        }}
                        showCategory
                        />
                    ))}
                    </SliderTrack>
                </SliderViewport>

                <SliderButton
                    type="button"
                    onClick={handleNext}
                    aria-label={`${title} 다음 상품`}
                    style={{
                        right: 0,
                        transform: "translate(50%, -50%)",
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
                            pageIndex === activePage ? "page" : undefined
                        }
                        onClick={() => {
                            const nextIndex = pageIndex * ITEMS_PER_PAGE;

                            setDirection(
                                nextIndex > currentIndex ? 1 : -1
                            );

                            setCurrentIndex(nextIndex)
                        }}
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
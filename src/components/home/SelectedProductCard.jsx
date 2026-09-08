import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "../icons/Icons";
import {
  ProductArea,
  ProductTitleBox,
  ProductTitle,
  ProductNumber,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductDescription,
  ProductTagContainer,
  ProductTag,
  ViewMoreButton,
  ProductPagination,
  PaginationButton,
  PaginationText,
} from "../../styles/MainStyles/DeskCurationSection.styles";


function SelectedProductCard({
    selectedProduct,
    selectedCategory,
    selectedStyleName,
    activeProductIndex,
    totalProducts,
    onPrevious,
    onNext,
    }) {
        return (
          <ProductArea>
            <ProductTitleBox>
              <ProductNumber>
                {String(activeProductIndex + 1).padStart(2, "0")}
              </ProductNumber>
              <ProductTitle>Selected Product</ProductTitle>
            </ProductTitleBox>

            {selectedProduct && (
              <>
                <ProductImage
                  src={selectedProduct.imageUrl}
                  alt={selectedProduct.name}
                />

                <ProductInfo>
                  <ProductName>{selectedProduct.name}</ProductName>
                  <ProductPrice>₩ {selectedProduct.price.toLocaleString()}</ProductPrice>
                  <ProductDescription>{selectedProduct.description}</ProductDescription>
                
                  <ProductTagContainer>
                    <ProductTag>{selectedCategory.name}</ProductTag>
                    <ProductTag>{selectedStyleName}</ProductTag>
                  </ProductTagContainer>
                </ProductInfo>

                <ViewMoreButton type="button">View More</ViewMoreButton>

                <ProductPagination>
                  <PaginationButton
                  type="button"
                  onClick={onPrevious}
                  disabled={activeProductIndex <= 0}
                  aria-label="이전 상품"
                  >
                    <ChevronLeftIcon width={24} height={24}/>
                  </PaginationButton>

                  <PaginationText>
                    {String(activeProductIndex + 1).padStart(2, "0")}
                    {" / "}
                    {String(totalProducts).padStart(2, "0")}                  
                  </PaginationText>

                  <PaginationButton
                  type="button"
                  onClick={onNext}
                  disabled={activeProductIndex >= totalProducts - 1}
                  aria-label="다음 상품"
                  >
                    <ChevronRightIcon width={24} height={24}/>
                  </PaginationButton>
                </ProductPagination>
              </>
            )}
          </ProductArea>
        )
}

export { SelectedProductCard };
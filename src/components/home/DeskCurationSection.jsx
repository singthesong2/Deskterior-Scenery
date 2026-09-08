import { useState, useEffect } from "react";
import {
  CurationSection,
  CurationTitleBox,
  CurationSubtitle,
  CurationTitle,
  CurationTitle2,
  MoodKeywordBox,
  MoodKeywordText,
  KeywordChipContainer,
  KeywordButton,
  ClickableProductMap,
  DeskImage,
  HotspotButton,
  DeskArea,
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
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "../icons/Icons";
import products from "../../data/products";
import categories from "../../data/categories";

function DeskCurationSection({items = [] }) {
  const [selectedStyleId, setSelectedStyleId] = useState(null);
  const [selectedProductNumber, setSelectedProductNumber] = useState(null);

  // 아무것도 선택되지 않았을 때 첫 번째 키워드를 자동으로 선택(1, Minimal)
  const activeStyleId = selectedStyleId ?? items[0]?.styleId;
  const selectedStyle = items.find(
    (item) => item.styleId === activeStyleId
  );

  const activeProductNumber = selectedProductNumber ?? selectedStyle?.coordinate?.[0]?.productId;
  const selectedProduct = products.find((product) => product.id === activeProductNumber);
  const selectedCategory = categories.find((category) => category.id === selectedProduct?.categoryId);
  // selectedStyle에 coordinate가 있으면 가져오고 undefined이거나 null 이면 빈 배열을 반환함
  const coordinates = selectedStyle?.coordinate ?? [];
  // 현재 상품 순서 계산
  const activeProductIndex = coordinates.findIndex(
    (item) => item.productId === activeProductNumber
  );

  // 화면이 처음 열릴 때 imageUrl을 미리 저장
  useEffect(() => {
    items.forEach((item) => {
      const image = new Image();
      image.src = item.imageUrl;
    });
  }, [items]);

  // handlePreviousProduct(): 이전 상품 정보를 불러오는 함수
  const handlePreviousProduct = () => {
    if(activeProductIndex <= 0) return;

    const previousProduct = coordinates[activeProductIndex - 1];
    setSelectedProductNumber(previousProduct.productId);
  }

  // handleNextProduct(): 다음 상품 정보를 불러오는 함수
  const handleNextProduct = () => {
    if(activeProductIndex >= coordinates.length - 1) return;

    const nextProduct = coordinates[activeProductIndex + 1];
    setSelectedProductNumber(nextProduct.productId);
  };

// handleCoordinate(): 클릭 좌표를 %로 계산하는 함수, getBoundingClientRect()로 상대적인 위치 정보를 제공하는 객체를 반환
  const handleCoordinate = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    console.log({
      x: Number(x.toFixed(1)),
      y: Number(y.toFixed(1)),
    });
  };

  return (
    <CurationSection>
      <CurationTitleBox>
        <CurationSubtitle>
          <strong>데스크 테리어,</strong>
          <br />
          어떻게 시작해야 할지 모르겠다면
          </CurationSubtitle>
        <CurationTitle>내 데스크 취향부터 찾아보세요</CurationTitle>
      </CurationTitleBox>

      <MoodKeywordBox>
        <MoodKeywordText>둘러보고 싶은 스타일 키워드를 선택해 보세요</MoodKeywordText>
        <KeywordChipContainer>
          {/* main.js에서 keyword의 name을 가져옴 */}
          {items.map((item) => (
            <KeywordButton
            key={item.styleId}
            type="button"
            isSelected={item.styleId === activeStyleId}
            aria-pressed={item.styleId === activeStyleId}
            onClick={() => {
              setSelectedStyleId(item.styleId)
              setSelectedProductNumber(null);
            }}
            >
              {item.name}
            </KeywordButton>
          ))}
        </KeywordChipContainer>
      </MoodKeywordBox>

        <CurationTitle2>What's on this desk?</CurationTitle2>

        <ClickableProductMap>
          <DeskArea onClick={handleCoordinate}>
            {selectedStyle && (
              <>
                <DeskImage
                src={selectedStyle.imageUrl}
                alt={`${selectedStyle.name} style desk`}
                style={{objectPosition: selectedStyle.objectPosition ?? "center",}}
                />
                {/* coordinate(좌표 정보)가 있으면 해당 배열을 사용하고 없으면 빈 배열을 사용함 */}
                {(selectedStyle.coordinate ?? []).map((product, index) => (
                  <HotspotButton
                    key={product.productId}
                    type="button"
                    isSelected={product.productId === activeProductNumber}
                    style={{
                      left: `${product.x}%`,
                      top: `${product.y}%`,
                    }}
                    onClick={(event) => {
                      event.stopPropagation();
                      setSelectedProductNumber(product.productId);
                    }}
                    >
                      {index + 1}
                  </HotspotButton>
                ))}
              </>
            )}
          </DeskArea>
          
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
                    <ProductTag>{selectedStyle.name}</ProductTag>
                  </ProductTagContainer>
                </ProductInfo>

                <ViewMoreButton type="button">View More</ViewMoreButton>

                <ProductPagination>
                  <PaginationButton
                  type="button"
                  onClick={handlePreviousProduct}
                  disabled={activeProductIndex <= 0}
                  aria-label="이전 상품"
                  >
                    <ChevronLeftIcon width={24} height={24}/>
                  </PaginationButton>

                  <PaginationText>
                    {String(activeProductIndex + 1).padStart(2, "0")}
                    {" / "}
                    {String(coordinates.length).padStart(2, "0")}                  
                  </PaginationText>

                  <PaginationButton
                  type="button"
                  onClick={handleNextProduct}
                  disabled={activeProductIndex >= coordinates.length - 1}
                  aria-label="다음 상품"
                  >
                    <ChevronRightIcon width={24} height={24}/>
                  </PaginationButton>
                </ProductPagination>
              </>
            )}
          </ProductArea>
        </ClickableProductMap>
    </CurationSection>
  );
}

export { DeskCurationSection };
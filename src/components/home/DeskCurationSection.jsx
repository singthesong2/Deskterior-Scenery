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
} from "../../styles/MainStyles/DeskCurationSection.styles";
import { getProductRaw } from "../../api/productsApi";
import categories from "../../data/categories";
import { SelectedProductCard } from "./SelectedProductCard";
import { DeskProductMap } from "./DeskProductMap";

function DeskCurationSection({items = [] }) {
  const [selectedStyleId, setSelectedStyleId] = useState(null);
  const [selectedProductNumber, setSelectedProductNumber] = useState(null);
  // 서버에서 받은 상품을 저장할 상태
  const [productData, setProductData] = useState(null);
  // 로딩, 오류 상태
  const [isProductLoading, setIsProductLoading] = useState(false);
  const [productError, setProductError] = useState("");

  // 아무것도 선택되지 않았을 때 첫 번째 키워드를 자동으로 선택(1, Minimal)
  const activeStyleId = selectedStyleId ?? items[0]?.styleId;
  const selectedStyle = items.find(
    (item) => item.styleId === activeStyleId
  );

  const activeProductNumber = selectedProductNumber ?? selectedStyle?.coordinate?.[0]?.productId;
  const selectedProduct = productData?.id === activeProductNumber ? productData : null;
  const selectedCategory = categories.find((category) => category.id === selectedProduct?.categoryId);
  // selectedStyle에 coordinate가 있으면 가져오고 undefined이거나 null 이면 빈 배열을 반환함
  const coordinates = selectedStyle?.coordinate ?? [];
  // 현재 상품 순서 계산
  const activeProductIndex = coordinates.findIndex(
    (item) => item.productId === activeProductNumber
  );

  // 큐레이션 상품 정보 연결
  useEffect(() => {
    if(activeProductNumber == null) {
      setIsProductLoading(false);
      setProductError("");
      return;
    }

    let ignore = false;

    async function fetchSelectedProduct() {
      try {
        const product = await getProductRaw(activeProductNumber);

        if(!ignore) {
          setProductData(product);
        }
      } catch(error) {
        if(!ignore) {
          setProductData(null);
          setProductError("상품 정보를 불러오지 못했습니다.");
          console.error("큐레이션 상품 조회 실패:", error);
        }
      } finally {
        if(!ignore) {
          setIsProductLoading(false);
        }
      }
    }
    fetchSelectedProduct();

    return() => {
      ignore = true;
    };
  }, [activeProductNumber]);

  // 화면이 처음 열릴 때 imageUrl을 미리 저장
  useEffect(() => {
    items.forEach((item) => {
      const image = new Image();
      image.src = item.imageUrl;
    });
  }, [items]);

  // handlePreviousProduct(): 이전 상품 정보를 불러오는 함수
  const handlePreviousProduct = () => {
    if(coordinates.length <= 1) return;

    const previousIndex =
      activeProductIndex === 0
      ? coordinates.length - 1
      : activeProductIndex - 1;

    setSelectedProductNumber(coordinates[previousIndex].productId);
  }

  // handleNextProduct(): 다음 상품 정보를 불러오는 함수
  const handleNextProduct = () => {
    if(coordinates.length <= 1) return;

    const nextIndex = (activeProductIndex + 1) % coordinates.length;
    
    setSelectedProductNumber(coordinates[nextIndex].productId);
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
          <DeskProductMap 
            selectedStyle={selectedStyle}
            activeProductNumber={activeProductNumber}
            onProductSelect={setSelectedProductNumber}
          />

          <SelectedProductCard
            selectedProduct={selectedProduct}
            selectedCategory={selectedCategory}
            selectedStyleName={selectedStyle?.name}
            activeProductIndex={activeProductIndex}
            totalProducts={coordinates.length}
            isProductLoading={isProductLoading}
            productError={productError}
            onPrevious={handlePreviousProduct}
            onNext={handleNextProduct}
          />
        </ClickableProductMap>
    </CurationSection>
  );
}

export { DeskCurationSection };
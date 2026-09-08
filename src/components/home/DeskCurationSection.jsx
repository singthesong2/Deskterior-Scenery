import { useState, useEffect } from "react";
import {
  CurationSection,
  CurationTitleBox,
  CurationSubtitle,
  CurationTitle,
  MoodKeywordBox,
  MoodKeywordText,
  KeywordChipContainer,
  KeywordButton,
  ClickableProductMap,
  DeskImage,
  HotspotButton,
  DeskArea,
  ProductArea,
} from "../../styles/MainStyles/DeskCurationSection.styles";

function DeskCurationSection({items = [] }) {
  const [selectedStyleId, setSelectedStyleId] = useState(null);
  // 아무것도 선택되지 않았을 때 첫 번째 키워드(=Minimal)를 자동으로 선택
  const activeStyleId = selectedStyleId ?? items[0]?.styleId;

  const selectedStyle = items.find(
    (item) => item.styleId === activeStyleId
  );

  // 화면이 처음 열릴 때 imageUrl을 미리 저장
  useEffect(() => {
    items.forEach((item) => {
      const image = new Image();
      image.src = item.imageUrl;
    });
  }, [items]);

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
            onClick={() => setSelectedStyleId(item.styleId)}
            >
              {item.name}
            </KeywordButton>
          ))}
        </KeywordChipContainer>
      </MoodKeywordBox>

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
                    style={{
                      left: `${product.x}%`,
                      top: `${product.y}%`,
                    }}
                    >
                      {index + 1}
                  </HotspotButton>
                ))}
              </>
            )}
          </DeskArea>
          
          <ProductArea>Product Area</ProductArea>
        </ClickableProductMap>
    </CurationSection>
  );
}

export { DeskCurationSection };
import { useState } from "react";
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
  DeskArea,
  ProductArea,
} from "../../styles/MainStyles/DeskCurationSection.styles";

function DeskCurationSection({items = [] }) {
  const [selectedStyleId, setSelectedStyleId] = useState(null);
  // 아무것도 선택되지 않았을 때 첫 번째 키워드(=Minimal)를 자동으로 선택
  const activeStyleId = selectedStyleId ?? items[0]?.styleId;

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
          <DeskArea>Desk Area</DeskArea>
          <ProductArea>Product Area</ProductArea>
        </ClickableProductMap>
    </CurationSection>
  );
}

export { DeskCurationSection };
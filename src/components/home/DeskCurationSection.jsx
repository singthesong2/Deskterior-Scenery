import {
  CurationSection,
  CurationTitle,
  KeywordChipContainer,
  ClickableProductMap,
  DeskArea,
  ProductArea,
} from "../../styles/DeskCurationSection.styles";

function DeskCurationSection() {
  return (
    <CurationSection>
      <CurationTitle>What's on this Desk?</CurationTitle>

      <KeywordChipContainer>Keyword mood chip Area</KeywordChipContainer>
        <ClickableProductMap>
          <DeskArea>Desk Area</DeskArea>
          <ProductArea>Product Area</ProductArea>
        </ClickableProductMap>
    </CurationSection>
  );
}

export { DeskCurationSection };
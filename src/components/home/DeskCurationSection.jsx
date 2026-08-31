import styled from "@emotion/styled";

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

const CurationSection = styled.section(({theme}) => ({
  padding: theme.spacing["3xl"],
}))

const CurationTitle = styled.h2(({theme}) => ({
  fontsize: theme.fontSize["4xl"],
  fontweight: theme.fontWeight.regular,
  color: theme.colors.textMain,
}));

const KeywordChipContainer=styled.div(({theme}) => ({
  width: "100%",
}));

const ClickableProductMap = styled.div(({theme}) => ({
  display: "flex",
  gap: theme.spacing.lg,
}));

const DeskArea = styled.div(({theme}) => ({
  height: "700px",
  flex: 2,
  backgroundColor: theme.colors.imagePlaceholder,
  borderRadius: theme.radius.md,
}));

const ProductArea = styled.div(({theme}) => ({
  height: "700px",
  flex: 1,
  backgroundColor: theme.colors.cards,
  borderRadius: theme.radius.md,
}))

export { DeskCurationSection };
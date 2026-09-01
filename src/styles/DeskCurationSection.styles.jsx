import styled from "@emotion/styled";

export const CurationSection = styled.section(({theme}) => ({
  padding: theme.spacing["3xl"],
}))

export const CurationTitle = styled.h2(({theme}) => ({
  fontsize: theme.fontSize["4xl"],
  fontweight: theme.fontWeight.regular,
  color: theme.colors.textMain,
}));

export const KeywordChipContainer=styled.div(({theme}) => ({
  width: "100%",
}));

export const ClickableProductMap = styled.div(({theme}) => ({
  display: "flex",
  gap: theme.spacing.lg,
}));

export const DeskArea = styled.div(({theme}) => ({
  height: "700px",
  flex: 2,
  backgroundColor: theme.colors.imagePlaceholder,
  borderRadius: theme.radius.md,
}));

export const ProductArea = styled.div(({theme}) => ({
  height: "700px",
  flex: 1,
  backgroundColor: theme.colors.cards,
  borderRadius: theme.radius.md,
}))

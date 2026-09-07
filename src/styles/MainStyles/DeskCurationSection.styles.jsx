import styled from "@emotion/styled";

export const CurationSection = styled.section(({theme}) => ({
  padding: theme.spacing["3xl"],
}))

export const CurationTitleBox = styled.div(({theme}) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: theme.spacing.md, // 16px
}))

export const CurationSubtitle = styled.p(({theme}) => ({
  fontFamily: theme.fontFamily.base,
  fontSize: theme.fontSize.sm, // 14px
  fontWeight: theme.fontWeight.medium,
  color: theme.colors.emphasis,
}))

export const CurationTitle = styled.h2(({theme}) => ({
  fontSize: theme.fontSize["4xl"], // 32px
  fontWeight: theme.fontWeight.semiBold,
  color: theme.colors.textMain,
  marginBottom: theme.spacing.lg,
}));

// mood keyword area
export const MoodKeywordBox = styled.div(({theme}) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: theme.spacing.xs,
}));

export const MoodKeywordText = styled.p(({theme}) => ({
  fontFamily: theme.fontFamily.base,
  fontSize: theme.fontSize.md, // 16px
  fontWeight: theme.fontWeight.regular,
  color: theme.colors.secondText,
}));

export const KeywordChipContainer=styled.div(({theme}) => ({
  margin: `${theme.spacing.md} 0 ${theme.spacing["2xl"]}`, // 16px 0 48px 
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "flex-start",
  gap: theme.spacing.md, // 16px
}));

export const KeywordButton = styled.button(({theme, isSelected}) => ({
  padding: `${theme.spacing.sm} ${theme.spacing.md}`, // 12px 16px
  borderRadius: theme.radius.full,
  backgroundColor: isSelected
    ? theme.colors.emphasis
    : `${theme.colors.subtle}80`, // secondText color에 opacity 50%
  color: theme.colors.textMain,
  fontWeight: isSelected
    ? theme.fontWeight.semiBold
    : theme.fontWeight.regular,
  fontSize: theme.fontSize.xs,
}))

export const ClickableProductMap = styled.div(({theme}) => ({
  display: "flex",
  gap: theme.spacing.lg,
}));

export const DeskArea = styled.div(({theme}) => ({
  position: "relative",
  height: "700px",
  flex: 2,
  overflow: "hidden",
  backgroundColor: theme.colors.imagePlaceholder,
  borderRadius: theme.radius.md,
}));

export const HotspotButton = styled.button(({theme}) => ({
  position: "absolute",
  transform: "translate(-50%, -50%)",
  width: "40px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.colors.cards,
  borderRadius: theme.radius.full,
  fontSize: theme.fontSize.sm,
  fontWeight: theme.fontWeight.semiBold,
  colors: theme.colors.textMain,
  cursor: "pointer",
}))

export const DeskImage = styled.img({
  width: "100%",
  height: "100%",
  objectFit: "cover",
})

export const ProductArea = styled.div(({theme}) => ({
  height: "700px",
  flex: 1,
  backgroundColor: theme.colors.cards,
  borderRadius: theme.radius.md,
}))

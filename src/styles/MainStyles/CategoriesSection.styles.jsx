import styled from "@emotion/styled";

export const CategoriesContainer = styled.section(({ theme }) => ({
  width: "100%",
  padding: theme.spacing["3xl"],
  backgroundColor: theme.colors.cards,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing.xl, //32
}));

export const SectionTitle = styled.h2(({ theme }) => ({
  alignSelf: "flex-start",
  fontFamily: theme.fontFamily.display,
  fontSize: theme.fontSize["4xl"], // 32px
  fontWeight: theme.fontWeight.regular,
  color: theme.colors.textMain,
}));

export const CategoryList = styled.div(({ theme }) => ({
  display: "flex",
  gap: theme.spacing["2xl"], // 48px
}));

export const CategoryItem = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "150px",
  alignItems: "center",
  gap: theme.spacing.xs, // 8px
  cursor: "pointer",
}));

export const CategoryImage = styled.img(({ theme }) => ({
  width: "150px",
  height: "150px",
  borderRadius: theme.radius.full,
  objectFit: "cover",

  // 호버 임시 스타일
  "&:hover": {
    opacity: "0.6",
  }
}));

export const CategoryName = styled.div(({ theme }) => ({
  fontFamily: theme.fontFamily.base,
  fontSize: theme.fontSize.sm, // 14px
  fontWeight: theme.fontWeight.semiBold,
  color: theme.colors.textMain,
  textAlign: "center",
}));
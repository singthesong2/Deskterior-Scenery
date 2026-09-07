import styled from "@emotion/styled";

export const CategoriesContainer = styled.section(({ theme }) => ({
  width: "100%",
  padding: theme.spacing["3xl"], // 64px
  backgroundColor: theme.colors.cards,
}));

export const SectionTitle = styled.h2(({ theme }) => ({
  paddingBottom: theme.spacing.xl, // 32px
  fontFamily: theme.fontFamily.display,
  fontSize: theme.fontSize["4xl"], // 32px
  fontWeight: theme.fontWeight.regular,
  color: theme.colors.textMain,
}));

export const CategoryList = styled.div(({ theme }) => ({
  display: "flex",
  gap: theme.spacing.xl, // 32px
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
}));

export const CategoryName = styled.div(({ theme }) => ({
  fontFamily: theme.fontFamily.base,
  fontSize: theme.fontSize.sm, // 14px
  fontWeight: theme.fontWeight.semiBold,
  color: theme.colors.textMain,
  textAlign: "center",
}));
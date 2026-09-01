import styled from "@emotion/styled";

export const CategoriesContainer = styled.section(({ theme }) => ({
  width: "100%",
  padding: theme.spacing["3xl"],
  backgroundColor: theme.colors.cards,
}));

export const SectionTitle = styled.h2(({ theme }) => ({
  fontSize: theme.fontSize["4xl"],
  color: theme.colors.textMain,
}));

export const CategoryList = styled.div(({ theme }) => ({
  display: "flex",
  gap: theme.spacing.xl,
}));

export const CategoryItem = styled.div(({ theme }) => ({
  display: "flex",
  width: "150px",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing.xs,
}));

export const ImagePlaceholder = styled.div(({ theme }) => ({
  width: "150px",
  height: "150px",
  borderRadius: theme.radius.full,
  backgroundColor: theme.colors.imagePlacholder,
}));

export const CategoryName = styled.div(({ theme }) => ({
  fontSize: theme.fontSize.sm,
  color: theme.colors.textMain,
  textAlign: "center",
}));
import styled from "@emotion/styled";

// 메인박스
export const CartContainer = styled.div(({ theme }) => ({
  width: "100%",
  maxWidth: "896px",
  margin: "0 auto",
  padding: `${theme.spacing["3xl"]} 0`,
  display: "flex",
  flexDirection: "column",
}));

// 타이틀
export const TitleWrapper = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginBottom: "36px",
}));

// 경로
export const Course = styled.span(({ theme }) => ({
  fontSize: theme.fontSize.xs,
  fontWeight: theme.fontWeight.regular,
  color: theme.colors.secondText,
  marginBottom: theme.spacing.xs,
}));

// Cart
export const PageTitle = styled.h1(({ theme }) => ({
  fontSize: theme.fontSize.dpMd,
  fontWeight: theme.fontWeight.regular,
  color: theme.colors.textMain,
  margin: 0,
  textAlign: "left",
  width: "100%",
}));

// 전체바
export const ActionBar = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: theme.spacing.xl,
}));

// 전체
export const SelectAllLabel = styled.label(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing.xs,
  fontSize: theme.fontSize.md,
  fontWeight: theme.fontWeight.medium,
  color: theme.colors.secondText,
  cursor: "pointer",
}));

// 삭제
export const ClearAllButton = styled.button(({ theme }) => ({
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: 0,
  fontSize: theme.fontSize.md,
  fontWeight: theme.fontWeight.medium,
  color: "#EE2E2E",
}));

// 박스 안 박스
export const ItemListSection = styled.section(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: `0 ${theme.spacing.md}`,
  backgroundColor: theme.colors.cards,
}));

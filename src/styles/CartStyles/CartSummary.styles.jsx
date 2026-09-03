import styled from "@emotion/styled";

// 소계 and 버튼 컨테이너
export const SummaryContainer = styled.div(({ theme }) => ({
  marginTop: theme.spacing.xl,
  marginBottom: theme.spacing["3xl"],
}));

// 토탈 박스
export const SummaryInfoBox = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.cards,
  padding: theme.spacing.md,
  borderRadius: theme.radius.md,
}));

// 행
export const SummaryRow = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

// 소계
export const SubtotalRow = styled(SummaryRow)(({ theme }) => ({
  marginBottom: theme.spacing.xs,
}));

// 배송비
export const DeliveryRow = styled(SummaryRow)(({ theme }) => ({
  marginBottom: theme.spacing.xs,
}));

// 총합
export const TotalRow = styled(SummaryRow)({});

// 소계, 배송비 text
export const LabelText = styled.span(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontSize: theme.fontSize.md,
  color: theme.colors.secondText,
  fontWeight: theme.fontWeight.regular,
}));

// 툴팁
export const IconWrapper = styled.div({
  display: "flex",
  alignItems: "center",
  marginLeft: "5px",
  cursor: "pointer",
});

// 소계 배송비 가격
export const PriceText = styled.span(({ theme }) => ({
  fontSize: theme.fontSize.md, // 16px
  color: theme.colors.secondText,
  fontWeight: theme.fontWeight.regular,
}));

// 총합 text
export const TotalLabel = styled.strong(({ theme }) => ({
  fontSize: theme.fontSize.xl,
  color: theme.colors.textMain,
  fontWeight: theme.fontWeight.semiBold,
}));

// 총합 가격
export const TotalPriceText = styled.strong(({ theme }) => ({
  fontSize: theme.fontSize.xl,
  color: theme.colors.textMain,
  fontWeight: theme.fontWeight.semiBold,
}));

// 결제 버튼
export const CheckoutButton = styled.button(({ theme }) => ({
  width: "100%",
  height: "48px",
  marginTop: theme.spacing.xl,
  padding: `${theme.spacing.sm} 0`,
  backgroundColor: theme.colors.textMain,
  color: theme.colors.cards,
  fontSize: theme.fontSize.lg,
  fontWeight: theme.fontWeight.semiBold,
  border: "none",
  borderRadius: theme.radius.md,
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

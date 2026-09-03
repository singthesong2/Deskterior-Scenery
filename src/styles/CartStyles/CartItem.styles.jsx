import styled from "@emotion/styled";

// 한 줄
export const ItemWrapper = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: theme.spacing.lg,
  padding: `${theme.spacing.lg} 0`,
  borderBottom: `1px solid ${theme.colors.subtle}`,
  "&:last-of-type": {
    borderBottom: "none", // 밑줄 제거
  },
}));

// 좌
export const ItemLeft = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: theme.spacing.lg,
}));
// 이미지
export const ImageBox = styled.div({
  position: "relative",
  width: "132px",
  height: "132px",
  flexShrink: 0,
});

// 이미지 태그 스타일
export const ItemImage = styled.img(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
}));

// 인포
export const InfoBox = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "310px",
  gap: theme.spacing.xs,
}));

// 상품명
export const ItemName = styled.h4(({ theme }) => ({
  margin: 0,
  width: "100%",
  textAlign: "left",
  wordBreak: "keep-all",
  overflowWrap: "anywhere",
  fontSize: theme.fontSize.xl,
  fontWeight: theme.fontWeight.semiBold,
  color: theme.colors.textMain,
}));

// 원가
export const ItemPrice = styled.p(({ theme }) => ({
  margin: 0,
  fontSize: theme.fontSize.sm,
  fontWeight: theme.fontWeight.regular,
  color: theme.colors.textMain,
}));

// 우
export const ItemRight = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  flex: 1,
  gap: theme.spacing.lg,
  marginTop: "4px", // 정렬 1
}));

// 수량
export const QuantityBox = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "130px",
}));

// 수량 버튼
export const QuantityButton = styled.button(({ theme }) => ({
  width: "35px",
  height: "35px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0 0 3.5px 0", // 1024이상 고정 반응형 바꾸어야함
  cursor: "pointer",
  backgroundColor: theme.colors.cards,
  border: `${theme.borderWidth.default} solid ${theme.colors.subtle}`,
  borderRadius: theme.radius.full,
  color: theme.colors.textMain,
  fontSize: theme.fontSize.md,
  fontWeight: theme.fontWeight.regular,
  lineHeight: "normal",
  // 비활성
  "&:disabled": {
    color: theme.colors.subtle,
    cursor: "not-allowed",
  },
}));

// 수량 텍스트
export const QuantityText = styled.span(({ theme }) => ({
  fontSize: theme.fontSize.xl,
  fontWeight: theme.fontWeight.semiBold,
  Width: "28px",
  flexShrink: 0,
  textAlign: "center", //숫자 두 자리여도 자리 고정
  color: theme.colors.textMain,
}));

// 총합
export const TotalPrice = styled.div({
  width: "120px",
  textAlign: "right",
  paddingTop: "4px", // 정렬 1
});

// 총합 텍스트
export const TotalPriceText = styled.strong(({ theme }) => ({
  fontSize: theme.fontSize.xl,
  fontWeight: theme.fontWeight.semiBold,
  color: theme.colors.textMain,
}));

// 삭제 버튼
export const DeleteButton = styled.button(({ theme }) => ({
  background: "none",
  border: "none",
  cursor: "pointer",
  paddingTop: "6px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.colors.secondText,
  marginLeft: "auto",
}));

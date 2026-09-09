import styled from "@emotion/styled";
import { Link } from "react-router";

export const Card = styled.div(({ theme }) => ({
  position: "relative",
  display: "flex",
  width: "280px",
  height: "424px",
  paddingBottom: theme.spacing.md,
  flexDirection: "column",
  alignItems: "flex-start",
  gap: theme.spacing.sm,
  flexShrink: 0,
  textAlign: "left",
  background: theme.colors.cards,
  borderRadius: theme.radius.md,
  overflow: "hidden",
}));

// 카드 전체를 덮는 투명 링크 (상세페이지 이동)
export const StretchedLink = styled(Link)({
  position: "absolute",
  inset: 0,
  zIndex: 1,
});

export const ImageWrapper = styled.div(({ theme }) => ({
  position: "relative",
  width: "100%",
  aspectRatio: "1 / 1",
  flexShrink: 0,
  overflow: "hidden",
  background: theme.colors.imagePlaceholder,
}));

export const ProductImage = styled.img({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const ImageOverlay = styled.div(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: theme.colors.textMain,
  opacity: 0.35,
}));

export const BadgeGroup = styled.div(({ theme }) => ({
  position: "absolute",
  top: theme.spacing.xs,
  left: theme.spacing.xs,
  display: "flex",
  alignItems: "center",
  gap: theme.spacing.xs,
  zIndex: 10,
}));

export const IconStack = styled.div(({ theme }) => ({
  position: "absolute",
  zIndex: 2,
  bottom: theme.spacing.sm,
  right: theme.spacing.sm,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing.xs,
}));

export const LikeButton = styled.button(({ theme }) => ({
  display: "flex",
  width: "36px",
  height: "36px",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  border: "none",
  borderRadius: theme.radius.full,
  background: "rgba(253, 253, 253, 0.75)",
  color: theme.colors.textMain,
  cursor: "pointer",
}));

export const CartButton = styled.button(({ theme }) => ({
  display: "flex",
  width: "36px",
  height: "36px",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  border: "none",
  borderRadius: theme.radius.full,
  padding: theme.spacing["2xs"],
  background: theme.colors.textMain,
  color: "#fff",
  cursor: "pointer",
}));

export const Info = styled.div(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "100%",
  padding: `${theme.spacing.xs} ${theme.spacing.md}`,
  flexDirection: "column",
  alignItems: "flex-start",
  gap: theme.spacing.xs,
  flex: "1 0 0",
}));

export const ProductName = styled.strong(({ theme }) => ({
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  lineHeight: "normal",
  fontFamily: theme.fontFamily.base,
  fontSize: theme.fontSize.lg,
  fontWeight: theme.fontWeight.semiBold,
  letterSpacing: "-0.18px",
  color: theme.colors.textMain,
}));

export const CategoryName = styled.span(({ theme }) => ({
  color: theme.colors.emphasis,
  fontSize: theme.fontSize.sm,
  fontWeight: theme.fontWeight.medium,
}));
export const Price = styled.p(({ theme }) => ({
  fontSize: theme.fontSize.md,
  color: theme.colors.secondText,
  margin: 0,
}));

export const Rating = styled.p(({ theme }) => ({
  fontSize: theme.fontSize.xs,
  color: theme.colors.secondText,
  marginTop: "auto",
}));

export const Star = styled.span({
  display: "inline-flex",
  color: "#e08a3c",
  verticalAlign: "-1px",
});

import styled from "@emotion/styled";

export const Card = styled.div(({ theme }) => ({
  textAlign: "left",
  background: theme.colors.cards,
  borderRadius: theme.radius.lg,
  overflow: "hidden",
}));

export const ImageWrapper = styled.div(({ theme }) => ({
  position: "relative",
  width: "100%",
  aspectRatio: "1 / 1",
  background: theme.colors.imagePlaceholder,
}));

export const ProductImage = styled.img({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const SoldOutBadge = styled.span(({ theme }) => ({
  position: "absolute",
  top: theme.spacing.sm,
  left: theme.spacing.sm,
  padding: "2px 10px",
  borderRadius: theme.radius.sm,
  background: theme.colors.Emphasis,
  color: "#fff",
  fontSize: theme.fontSize.xs,
  fontWeight: theme.fontWeight.medium,
}));

export const IconStack = styled.div(({ theme }) => ({
  position: "absolute",
  bottom: theme.spacing.sm,
  right: theme.spacing.sm,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing.xs,
}));

export const LikeButton = styled.button(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  width: 32,
  height: 32,
  padding: 0,
  border: "none",
  borderRadius: theme.radius.full,
  background: theme.colors.cards,
  color: theme.colors.textMain,
  cursor: "pointer",
}));

export const CartButton = styled.button(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  width: 32,
  height: 32,
  padding: 0,
  border: "none",
  borderRadius: theme.radius.full,
  background: theme.colors.textMain,
  color: "#fff",
  cursor: "pointer",
}));

export const Info = styled.div(({ theme }) => ({
  padding: theme.spacing.lg,
}));

export const ProductName = styled.strong(({ theme }) => ({
  display: "block",
  fontSize: theme.fontSize.xl,
  fontWeight: theme.fontWeight.bold,
  color: theme.colors.textMain,
}));

export const Price = styled.p(({ theme }) => ({
  fontSize: theme.fontSize.md,
  color: theme.colors.secondText,
  margin: "8px 0 4px",
}));

export const Rating = styled.p({
  fontSize: 13,
  color: "#a19d92",
  margin: 0,
});

export const Star = styled.span({
  display: "inline-flex",
  color: "#e08a3c",
  verticalAlign: "-1px",
});

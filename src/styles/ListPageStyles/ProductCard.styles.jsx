import styled from "@emotion/styled";

export const Card = styled.div(({ theme }) => ({
  display: "flex",
  width: "280px",
  minHeight: "414px",
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
  width: "30px",
  height: "30px",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  border: "none",
  borderRadius: "15px",
  background: "rgba(253, 253, 253, 0.75)",
  color: theme.colors.textMain,
  cursor: "pointer",
}));

export const CartButton = styled.button(({ theme }) => ({
  display: "flex",
  width: "30px",
  height: "30px",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  border: "none",
  borderRadius: "15px",
  background: theme.colors.textMain,
  color: "#fff",
  cursor: "pointer",
}));

export const Info = styled.div(({ theme }) => ({
  padding: theme.spacing.lg,
}));

export const ProductName = styled.strong(({ theme }) => ({
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  lineHeight: 1.3,
  minHeight: `calc(${theme.fontSize.xl} * 1.3 * 2)`,
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

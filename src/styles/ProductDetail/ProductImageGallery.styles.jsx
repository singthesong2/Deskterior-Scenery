import styled from "@emotion/styled";

// 큰 이미지 프레임
export const MainImageFrame = styled.div(({ theme }) => ({
  position: "relative",
  width: "100%",
  maxWidth: "31.25rem", // 500
  aspectRatio: "25 / 27", // 500 : 540
  borderRadius: theme.radius.md,
  overflow: "hidden",
  background: theme.colors.imagePlaceholder,

  [theme.media.tablet]: {
    maxWidth: "none",
    aspectRatio: "auto",
    height: "22.41rem",
  },
}));

// 품절 시 큰 이미지 위에 덮는 반투명 레이어 (ProductCard·CartItem 과 동일 패턴)
export const ImageOverlay = styled.div(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: theme.colors.textMain,
  opacity: 0.35,
}));

// Best/New 뱃지 묶음 (ProductCard 와 동일 패턴)
export const BadgeGroup = styled.div(({ theme }) => ({
  position: "absolute",
  top: theme.spacing.xs,
  left: theme.spacing.xs,
  display: "flex",
  alignItems: "center",
  gap: theme.spacing.xs,
  zIndex: 10,
}));

export const ThumbRow = styled.div(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing.sm,
  marginTop: theme.spacing.md,
}));

export const ThumbButton = styled.button(({ theme, $active }) => ({
  flex: "0 0 auto",
  width: "5.625rem",
  height: "5.625rem",
  padding: 0,
  lineHeight: 0,
  overflow: "hidden",
  borderRadius: theme.radius.sm,
  background: theme.colors.imagePlaceholder,
  border: `${theme.borderWidth.focus} solid ${
    $active ? theme.colors.emphasis : "transparent"
  }`,
  cursor: "pointer",

  "&:focus-visible": {
    outline: `${theme.borderWidth.focus} solid ${theme.colors.textMain}`,
    outlineOffset: "2px",
  },

  [theme.media.tablet]: {
    width: "3.55rem",
    height: "3.55rem",
  },
}));

// 큰 이미지 — 프레임(500x540)을 꽉 채움
export const mainImage = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
};

// 썸네일 이미지 — 정사각
export const fillImage = {
  width: "100%",
  aspectRatio: "1 / 1",
  objectFit: "cover",
  display: "block",
};

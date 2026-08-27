// 1. 색상
const colors = {
  primary: "#007AFF",
  background: "#FFFFFF",
  textMain: "#333333",
  textMuted: "#888888",
  border: "#EEEEEE",
  error: "#FF3B30",
};

// 2. 폰트 크기
const fontSize = {
  xs: "0.75rem", // 12px
  sm: "1rem", // 16px (기본 사이즈)
  md: "1.25rem", // 20px
  lg: "1.5rem", // 24px
  xl: "1.75rem", // 28px
  xxl: "2rem", // 32px
};

// 3. 폰트 굵기
const fontWeight = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
};

// 4. 간격 & 패딩 (공통 사용)
const spacing = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
};

// 5. Border Radius
const radius = {
  xs: "4px",
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "20px",
  circle: "50%", // 원
};

// 6. 반응형 미디어 쿼리
const media = {
  mobile: `@media (max-width: 480px)`,
  tablet: `@media (max-width: 768px)`,
  pc: `@media (min-width: 1024px)`,
};

export const theme = {
  colors,
  fontSize,
  fontWeight,
  spacing,
  radius,
  media,
};

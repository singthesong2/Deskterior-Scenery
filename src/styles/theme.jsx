// 색상
const colors = {
  background: "#F9F7F3", //전체 배경색 흰색은 fDfDfD임
  cards: "#fDfDfD", //상품 카드배경 및 어두운 배경
  imagePlaceholder: "#E8E6DF", //이미지 들어갈자리 표시용
  textMain: "#1F211F", //텍스트 본문색, 버튼 배경색
  secondText: "#74766F", //캡션, 텍스트홀더 서브 텍스트 색
  emphasis: "#EB6923", //강조색 (일부요소에 불투명도 들어가있어서 확인 요망!!)
  subtle: "#EBEAE4", //메인배경보다 어두운색(ex 상페 설명란) 버튼 보더색
  mutedText: "#6B7280",
};

// 폰트 크기
const fontSize = {
  xs: "0.75rem", // 12px
  sm: "0.875rem", // 14px
  md: "1rem", // 16px (Medium)
  lg: "1.125rem", // 18px
  xl: "1.25rem", // 20px
  "2xl": "1.5rem", // 24px
  "3xl": "1.75rem", // 28px
  "4xl": "2rem", // 32px
  "5xl": "2.5rem", // 40px
  dpMd: "3rem", // 48px
  dpLg: "4rem", //64px
};

// 폰트 굵기
const fontWeight = {
  light: 300, // (base)
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
};

//  간격 & 패딩 (공통 사용)
const spacing = {
  "2xs": "4px", //0.75rem
  xs: "8px", //0.875rem
  sm: "12px", //1rem
  md: "16px", //1.125rem
  lg: "24px", //1.25rem
  xl: "32px", //1.5rem
  "2xl": "48px", //1.75rem
  "3xl": "64px", //2rem
  "4xl": "96px", //2.5rem
};

//  Border Radius
const radius = {
  sm: "4px", // 0.25rem
  md: "8px", // 0.5rem
  lg: "12px", // 0.75rem
  full: "999px",
};

//  Border
const borderWidth = {
  default: "1px", // 0.0625rem - 입력창, 카드 경계
  focus: "2px", // 0.125rem - 포커스, 호버 상태
};

//  반응형
const media = {
  mobile: `@media (max-width: 767px)`,
  tablet: `@media (min-width: 768px) and (max-width: 1023px)`,
  pc: `@media (min-width: 1024px) and (max-width: 1439px)`,
  wide: `@media (min-width: 1440px)`,
};

export const theme = {
  colors,
  fontSize,
  fontWeight,
  spacing,
  radius,
  media,
  borderWidth,
};

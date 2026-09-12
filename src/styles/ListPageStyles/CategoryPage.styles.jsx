import styled from "@emotion/styled";
import { Link } from "react-router";
import { NoResultIcon, LoadFailIcon } from "../../components/icons/Icons";

const headingStyle = (theme) => ({
  fontFamily: theme.fontFamily.display,
  fontWeight: 700,
});

// PC(1024px→1088px)와 와이드(1440px→1024px) 사이 급격한 전환 없이 부드럽게 줄어들도록 보간
const fluidContentMaxWidth =
  "clamp(1024px, calc(1245.54px - 15.385vw), 1088px)";

export const Main = styled.main(({ theme }) => ({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  fontFamily: theme.fontFamily.base,
}));

export const Header = styled.div(({ theme }) => ({
  display: "flex",
  width: "100%",
  maxWidth: fluidContentMaxWidth,
  height: "233px",
  margin: "0 auto",
  padding: `${theme.spacing["2xl"]} ${theme.spacing["3xl"]} 48px ${theme.spacing["3xl"]}`,
  flexDirection: "column",
  alignItems: "center",
  gap: "16px",
  borderBottom: `1px solid ${theme.colors.subtle}`,
  background: theme.colors.background,

  [theme.media.tablet]: {
    maxWidth: "100%",
    height: "auto",
    padding: `${theme.spacing["2xl"]} ${theme.spacing.xl}`,
    alignItems: "flex-start",
    gap: theme.spacing.sm,
    borderBottom: "none",
  },
}));

export const Breadcrumb = styled.nav({
  display: "flex",
  justifyContent: "center",
});

export const Trail = styled.ol(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontFamily: theme.fontFamily.base,
  fontSize: theme.fontSize.xs,
  fontWeight: theme.fontWeight.regular,
  lineHeight: "normal",
  letterSpacing: "-0.12px",
  color: theme.colors.secondText,
}));

export const Crumb = styled.li(({ theme }) => ({
  "&:not(:first-of-type)::before": {
    content: '">"',
    margin: `0 ${theme.spacing["2xs"]}`,
  },
}));

export const CrumbLink = styled(Link)({
  "&:hover": {
    textDecoration: "underline",
  },
});

export const PageTitle = styled.h1(({ theme }) => ({
  ...headingStyle(theme),
  fontSize: theme.fontSize.dpMd,
  fontWeight: theme.fontWeight.regular,
  lineHeight: "normal",
  letterSpacing: "-1px",
  color: "#000",
  textAlign: "center",
  margin: 0,
}));

export const PageSubtitle = styled.p(({ theme }) => ({
  fontFamily: theme.fontFamily.base,
  fontSize: theme.fontSize.sm,
  fontWeight: theme.fontWeight.regular,
  lineHeight: "normal",
  letterSpacing: "-0.14px",
  color: "#000",
  textAlign: "center",
  margin: 0,
}));

export const Content = styled.div(({ theme }) => ({
  display: "flex",
  width: "100%",
  maxWidth: fluidContentMaxWidth,
  margin: "0 auto",
  padding: `${theme.spacing["2xl"]} ${theme.spacing["3xl"]} ${theme.spacing["4xl"]} ${theme.spacing["3xl"]}`,
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing.xl,
  alignSelf: "stretch",

  [theme.media.wide]: {
    padding: `${theme.spacing["2xl"]} ${theme.spacing["3xl"]} ${theme.spacing["3xl"]} ${theme.spacing["3xl"]}`,
  },

  [theme.media.tablet]: {
    maxWidth: "100%",
    padding: `${theme.spacing["2xl"]} ${theme.spacing.xl}`,
    gap: theme.spacing.lg,
  },
}));

export const EmptyState = styled.div(({ theme }) => ({
  display: "flex",
  width: "100%",
  // 상품 2행 그리드와 높이가 같도록: 카드 414px * 2 + 행 간격 48px
  minHeight: "876px",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: `${theme.spacing["4xl"]} 0`,
  background: theme.colors.cards,
  border: `${theme.borderWidth.default} solid ${theme.colors.subtle}`,
  borderRadius: theme.radius.md,
}));

export const StyledLoadFailIcon = styled(LoadFailIcon)(({ theme }) => ({
  color: theme.colors.imagePlaceholder,
}));

export const StyledNoResultIcon = styled(NoResultIcon)(({ theme }) => ({
  color: theme.colors.imagePlaceholder,
}));

export const EmptyTitle = styled.p(({ theme }) => ({
  marginTop: theme.spacing.lg,
  fontSize: theme.fontSize.lg,
  fontWeight: theme.fontWeight.semiBold,
  color: theme.colors.textMain,
}));

export const EmptySubtitle = styled.p(({ theme }) => ({
  marginTop: theme.spacing.xs,
  fontSize: theme.fontSize.sm,
  color: theme.colors.secondText,
}));

export const ProductGrid = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "896px",
  justifyContent: "center",
  alignItems: "flex-start",
  alignSelf: "center",
  gap: theme.spacing["2xl"],

  [theme.media.tablet]: {
    maxWidth: "100%",
    gap: theme.spacing.lg,
  },
}));

export const Row = styled.div(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing.md,

  // 카드 높이를 고정하지 않고 내용에 맞게 자동으로 - 상품명이 몇 줄이든 카드 높이가 통일되게 함 (전 구간 공통)
  "&& > *": {
    height: "auto",
  },

  // 상품명이 1줄이든 2줄이든 항상 같은 높이를 차지해서, 아래 별점이 카드 밑에 눌리지 않게 함 (전 구간 공통)
  "&& > * > div:nth-of-type(2) > strong": {
    minHeight: "2.4em",
  },

  [theme.media.tablet]: {
    alignItems: "flex-start",
    gap: theme.spacing.md,

    "&& > *": {
      flex: "1 0 0",
      minWidth: 0,
      gap: theme.spacing.xs,
    },

    "&& > * > div:nth-of-type(2)": {
      padding: `0 ${theme.spacing.sm}`,
      gap: theme.spacing["2xs"],
    },

    // 찜/장바구니 버튼 크기만 축소 - 위치는 기존 IconStack이 이미지 우하단에 붙이는 방식 그대로 유지
    "&& button[aria-label='찜하기'], && button[aria-label='장바구니 담기']": {
      width: "30px",
      height: "30px",
      borderRadius: "15px",
    },
  },
}));

export const GridPlaceholder = styled.div({
  visibility: "hidden",
});

import styled from "@emotion/styled";
import { Link } from "react-router";
import { NoResultIcon, LoadFailIcon } from "../../components/icons/Icons";

const headingStyle = (theme) => ({
  fontFamily: theme.fontFamily.display,
  fontWeight: 700,
});

export const Main = styled.main(({ theme }) => ({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  fontFamily: theme.fontFamily.base,
}));

export const Header = styled.div(({ theme }) => ({
  display: "flex",
  width: "100%",
  maxWidth: "1088px",
  height: "233px",
  margin: "0 auto",
  padding: `${theme.spacing["2xl"]} ${theme.spacing["4xl"]} 48px ${theme.spacing["4xl"]}`,
  flexDirection: "column",
  alignItems: "center",
  gap: "16px",
  borderBottom: `1px solid ${theme.colors.subtle}`,
  background: theme.colors.background,
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
  maxWidth: "1088px",
  margin: "0 auto",
  padding: `${theme.spacing["2xl"]} ${theme.spacing["4xl"]} ${theme.spacing["4xl"]} ${theme.spacing["4xl"]}`,
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing.xl,
  alignSelf: "stretch",
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
  width: "896px",
  justifyContent: "center",
  alignItems: "flex-start",
  alignSelf: "stretch",
  gap: theme.spacing["2xl"],
}));

export const Row = styled.div(({ theme }) => ({
  display: "flex",
  width: "896px",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing.md,
}));

export const GridPlaceholder = styled.div({
  visibility: "hidden",
});

import styled from "@emotion/styled";
import { NoResultIcon } from "../../components/icons/Icons";

const headingStyle = (theme) => ({
  fontFamily: theme.fontFamily.display,
  fontWeight: 700,
});

export const Main = styled.main(({ theme }) => ({
  display: "flex",
  width: "100%",
  maxWidth: "1024px",
  flexDirection: "column",
  alignItems: "stretch",
  margin: "0 auto",
  padding: theme.spacing.xl,
  fontFamily: theme.fontFamily.base,
}));

export const Header = styled.div(({ theme }) => ({
  display: "flex",
  padding: `${theme.spacing.xl} 0`,
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing.sm,
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

export const EmptyState = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: `${theme.spacing["4xl"]} 0`,
}));

export const StyledNoResultIcon = styled(NoResultIcon)(({ theme }) => ({
  color: theme.colors.imagePlaceholder,
}));

export const EmptyTitle = styled.p(({ theme }) => ({
  marginTop: theme.spacing.lg,
  fontSize: theme.fontSize.sm,
  color: theme.colors.textMain,
}));

export const EmptySubtitle = styled.p(({ theme }) => ({
  marginTop: theme.spacing.xs,
  fontSize: theme.fontSize.xs,
  color: theme.colors.secondText,
}));

export const ProductGrid = styled.div(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  width: "896px",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing.md,
}));

export const GridPlaceholder = styled.div({
  visibility: "hidden",
});

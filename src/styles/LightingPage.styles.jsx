import styled from "@emotion/styled";
import { NoResultIcon } from "../components/icons/Icons";

const headingStyle = (theme) => ({
  fontFamily: theme.fontFamily.display,
  fontWeight: 700,
});

export const Main = styled.main(({ theme }) => ({
  padding: theme.spacing.xl,
  fontFamily: theme.fontFamily.base,
}));

export const PageTitle = styled.h1(({ theme }) => ({
  ...headingStyle(theme),
  fontSize: theme.fontSize["4xl"],
  margin: `0 0 ${theme.spacing.lg}`,
}));

export const HeroPlaceholder = styled.div(({ theme }) => ({
  width: "100%",
  aspectRatio: "16 / 3",
  background: theme.colors.imagePlaceholder,
}));

export const Divider = styled.hr(({ theme }) => ({
  border: "none",
  borderTop: `1px solid ${theme.colors.subtle}`,
  margin: `${theme.spacing.xl} 0`,
}));

export const SectionTitle = styled.h2(({ theme }) => ({
  ...headingStyle(theme),
  fontSize: theme.fontSize["2xl"],
  textAlign: "center",
  margin: `0 0 ${theme.spacing.xl}`,
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
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: theme.spacing.lg,
}));

export const GridPlaceholder = styled.div({
  visibility: "hidden",
});

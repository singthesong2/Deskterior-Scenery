import styled from "@emotion/styled";
import { NoResultIcon } from "../components/icons/Icons";

export const Main = styled.main({
  padding: "40px 32px",
  textAlign: "left",
  fontFamily: "'Pretendard Variable', sans-serif",
});

export const PageTitle = styled.h1(({ theme }) => ({
  fontFamily: "Georgia, 'Times New Roman', serif",
  fontSize: 36,
  fontWeight: 700,
  margin: `0 0 ${theme.spacing.lg}`,
}));

export const HeroPlaceholder = styled.div(({ theme }) => ({
  width: "100%",
  height: 220,
  background: theme.colors.imagePlaceholder,
}));

export const Divider = styled.hr(({ theme }) => ({
  border: "none",
  borderTop: `1px solid ${theme.colors.subtle}`,
  margin: "40px 0",
}));

export const SectionTitle = styled.h2(({ theme }) => ({
  fontFamily: "Georgia, 'Times New Roman', serif",
  fontSize: theme.fontSize["2xl"],
  fontWeight: 700,
  textAlign: "center",
  margin: `0 0 ${theme.spacing.xl}`,
}));

export const EmptyState = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "120px 0",
});

export const StyledNoResultIcon = styled(NoResultIcon)({
  color: "#e2ded3",
});

export const EmptyTitle = styled.p(({ theme }) => ({
  marginTop: 20,
  fontSize: 15,
  color: theme.colors.textMain,
}));

export const EmptySubtitle = styled.p({
  marginTop: 6,
  fontSize: 13,
  color: "#a19d92",
});

export const ProductGrid = styled.div(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: theme.spacing.lg,
}));

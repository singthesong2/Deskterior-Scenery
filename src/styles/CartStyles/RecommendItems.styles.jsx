import styled from "@emotion/styled";

export const RecommendContainer = styled.section(({ theme }) => ({
  marginTop: theme.spacing["3xl"],
  marginBottom: "100px",
}));

export const SectionTitle = styled.h2(({ theme }) => ({
  fontSize: theme.fontSize["2xl"],
  fontWeight: theme.fontWeight.bold,
  fontFamily: theme.fontFamily.display,
  color: theme.colors.textMain,
  marginBottom: theme.spacing.xl,
}));

export const GridContainer = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "26px",
});

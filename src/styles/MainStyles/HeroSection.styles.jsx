import styled from "@emotion/styled";

export const HeroContainer = styled.section(({ theme }) => ({
  width: "100%",
  padding: theme.spacing["3xl"],
  backgroundColor: theme.colors.cards,
}));

export const HeroTitle = styled.h1(({ theme }) => ({
  fontSize: theme.fontSize.dpLg,
  color: theme.colors.textMain,
}));
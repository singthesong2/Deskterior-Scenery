import styled from "@emotion/styled";

// 배경(흰색)은 브라우저 가로 전체로 확장
export const Section = styled.section(({ theme }) => ({
  width: "100vw",
  marginTop: "48px",
  marginLeft: "calc(50% - 50vw)",
  marginRight: "calc(50% - 50vw)",
  padding: "40px 0",
  background: theme.colors.cards, // #FDFDFD
}));

// 실제 콘텐츠는 이미지 폭(764px)에 맞춰 가운데 정렬
export const Inner = styled.div({
  maxWidth: "764px",
  margin: "0 auto",
  padding: "0 20px",
});

export const Title = styled.h2(({ theme }) => ({
  margin: "0 0 24px",
  fontFamily: theme.fontFamily.display,
  fontSize: theme.fontSize.dpMd, // 3rem
  fontStyle: "normal",
  fontWeight: theme.fontWeight.regular, // 400
  lineHeight: "normal",
  letterSpacing: "-0.01em", // letter-spacing-default
  color: theme.colors.textMain, // #1F211F
}));

export const Article = styled.article({
  marginBottom: "56px",
});

export const SectionTitle = styled.h3(({ theme }) => ({
  margin: "20px 0 8px",
  fontSize: theme.fontSize.sm, // 0.875rem
  fontStyle: "normal",
  fontWeight: theme.fontWeight.medium, // 500 — Label/MD
  lineHeight: "normal",
  letterSpacing: "-0.00875rem",
  color: theme.colors.textMain, // #1F211F
}));

export const SectionBody = styled.p(({ theme }) => ({
  margin: 0,
  fontSize: theme.fontSize.sm, // 0.875rem
  fontStyle: "normal",
  fontWeight: theme.fontWeight.regular, // 400 — Body/MD
  lineHeight: "normal",
  letterSpacing: "-0.00875rem",
  color: theme.colors.secondText, // #74766F
}));

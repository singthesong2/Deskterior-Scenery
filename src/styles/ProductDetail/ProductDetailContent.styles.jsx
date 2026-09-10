import styled from "@emotion/styled";

// 배경(흰색)은 브라우저 가로 전체로 확장
export const Section = styled.section(({ theme }) => ({
  width: "100vw",
  marginTop: "48px",
  marginLeft: "calc(50% - 50vw)",
  marginRight: "calc(50% - 50vw)",
  padding: "64px 0", // Item Detail 상하 패딩
  background: theme.colors.cards, // #FDFDFD
}));

// 콘텐츠는 프레임 폭(1024)에 좌우 144 패딩 → 이미지 영역 736px
export const Inner = styled.div(({ theme }) => ({
  maxWidth: "1024px",
  margin: "0 auto",
  padding: "0 144px",

  [theme.media.tablet]: { padding: "0 48px" },
  [theme.media.mobile]: { padding: "0 20px" },
}));

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
  marginBottom: "32px", // Detail 이미지 간격
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

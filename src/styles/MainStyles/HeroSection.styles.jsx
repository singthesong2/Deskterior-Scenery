import styled from "@emotion/styled";

export const HeroContainer = styled.section(({ theme }) => ({
  width: "100%",
  height: "720px",
  padding: theme.spacing["3xl"], // 64px
  backgroundColor: theme.colors.imagePlaceholder,
}));

// 히어로 이미지 배너 또는 영상 삽입
export const HeroMedia = styled.div({
  width: "100%",
  height: "100%",
});


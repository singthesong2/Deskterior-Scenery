import styled from "@emotion/styled";

export const Page = styled.div(({ theme }) => ({
  maxWidth: "1080px",
  margin: "0 auto",
  padding: theme.spacing.lg,
  textAlign: "left",
}));

export const TopSection = styled.div(({ theme }) => ({
  display: "flex",
  gap: theme.spacing["2xl"], // 48
  flexWrap: "wrap",

  [theme.media.mobile]: {
    gap: theme.spacing.lg,
  },
}));

export const GalleryColumn = styled.div({
  flex: "0 1 31.25rem",
  minWidth: 0,
});

export const InfoColumn = styled.div(({ theme }) => ({
  flex: "1 1 360px",
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.lg, // 24 통일
}));

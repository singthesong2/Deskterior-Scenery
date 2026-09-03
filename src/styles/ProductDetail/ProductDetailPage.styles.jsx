import styled from "@emotion/styled";

export const Page = styled.div(({ theme }) => ({
  maxWidth: "1080px",
  margin: "0 auto",
  padding: theme.spacing.lg,
  textAlign: "left",
}));

export const TopSection = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: theme.spacing["2xl"], // 48

  // pc·wide 는 기본 2단 유지
  [theme.media.tablet]: {
    flexDirection: "column",
    gap: theme.spacing.xl,
  },
  [theme.media.mobile]: {
    flexDirection: "column",
    gap: theme.spacing.lg,
  },
}));

export const GalleryColumn = styled.div(({ theme }) => ({
  flex: "0 1 31.25rem",
  minWidth: 0,

  [theme.media.tablet]: { flex: "none", width: "100%" },
  [theme.media.mobile]: { flex: "none", width: "100%" },
}));

export const InfoColumn = styled.div(({ theme }) => ({
  flex: "1 1 0",
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing.lg,

  [theme.media.tablet]: { width: "100%" },
  [theme.media.mobile]: { width: "100%" },
}));

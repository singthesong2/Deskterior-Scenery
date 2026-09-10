import styled from "@emotion/styled";

export const FooterContainer = styled.footer({
  width: "100%",
  backgroundColor: "#000000",
  padding: "70px 0 30px",
  boxSizing: "border-box",

  "@media (min-width: 320px) and (width < 768px)": {
    padding: "42px 14px 28px",
  },
});

export const FooterInner = styled.div({
  width: "85%",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",

  "@media (min-width: 320px) and (width < 768px)": {
    width: "100%",
    margin: 0,
    flexDirection: "column",
    gap: "25px",
  },
});

export const FooterInfo = styled.section({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "15px",

  "@media (min-width: 320px) and (width < 768px)": {
    gap: "12px",
  },
});

export const FooterLogo = styled.h2({
  margin: 0,
  color: "#ffffff",
  fontSize: "22px",
  fontWeight: 600,
  textAlign: "left",

  "@media (min-width: 320px) and (width < 768px)": {
    fontSize: "16px",
  },
});

export const FooterDescription = styled.p({
  margin: 0,
  color: "#777777",
  fontSize: "16px",
  lineHeight: 1.4,
  textAlign: "left",

  "@media (min-width: 320px) and (width < 768px)": {
    fontSize: "13px",
    lineHeight: 1.5,
  },
});

export const FooterSupport = styled.section({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "5px",

  "@media (min-width: 320px) and (width < 768px)": {
    flexDirection: "row",
    alignItems: "center",
    gap: "15px",
  },
});

export const SupportTitle = styled.h3({
  margin: 0,
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: 500,
  textAlign: "left",

  "@media (min-width: 320px) and (width < 768px)": {
    color: "#777777",
    fontWeight: 0,
    fontSize: "13px",
  },
});

export const SupportText = styled.p({
  margin: 0,
  color: "#777777",
  fontSize: "16px",
  textAlign: "left",

  "@media (min-width: 320px) and (width < 768px)": {
    fontSize: "13px",
  },
});

export const Copyright = styled.p({
  width: "85%",
  margin: "60px auto 0",
  color: "#777777",
  fontSize: "13px",
  textAlign: "left",

  "@media (min-width: 320px) and (width < 768px)": {
    width: "100%",
    margin: "20px 0 0",
    fontSize: "12px",
  },
});

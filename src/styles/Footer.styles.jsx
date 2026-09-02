import styled from "@emotion/styled";

export const FooterContainer = styled.footer({
  width: "100%",
  backgroundColor: "#000000",
  padding: "70px 0 30px",
  boxSizing: "border-box",
});

export const FooterInner = styled.div({
  width: "85%",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
});

export const FooterInfo = styled.section({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "15px",
});

export const FooterLogo = styled.h2({
  margin: 0,
  color: "#ffffff",
  fontSize: "22px",
  fontWeight: 600,
  textAlign: "left",
});

export const FooterDescription = styled.p({
  margin: 0,
  color: "#777777",
  fontSize: "16px",
  lineHeight: 1.4,
  textAlign: "left",
});

export const FooterSupport = styled.section({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "5px",
});

export const SupportTitle = styled.h3({
  margin: 0,
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: 500,
  textAlign: "left",
});

export const SupportText = styled.p({
  margin: 0,
  color: "#777777",
  fontSize: "16px",
  textAlign: "left",
});

export const Copyright = styled.p({
  width: "85%",
  margin: "60px auto 0",
  color: "#777777",
  fontSize: "13px",
  textAlign: "left",
});

import styled from "@emotion/styled";
import { motion } from "motion/react";

export const HeroContainer = styled.section(({ theme }) => ({
  width: "100%",
  minHeight: "720px",
  maxHeight: "900px",
  height: "100vh",
  background: `radial-gradient(circle at 50% 50%, ${theme.colors.cards} 0%, ${theme.colors.background || "#F8F7F2"} 70%)`,}));

// 히어로 이미지 배너 또는 영상 삽입
export const HeroMedia = styled.div({
  position: "relative",
  width: "100%",
  height: "100%",
});

export const ObjectInteractionArea = styled.div({
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  height: "70%",
  background: "transparent",
  zIndex: 20,
});

export const HeroTitle = styled(motion.h1)(({theme}) => ({
  position: "absolute",
  left: 0,
  top: "32%",
  width: "100%",
  textAlign: "center",
  fontSize: "clamp(4.5rem, 11vw, 11.5rem)",
  fontWeight: theme.fontWeight.bold,
  letterSpacing: "-0.04em",
  color: theme.colors.emphasis,
  pointerEvents: "none",
  zIndex: 10,
}));

// image
export const DeskLampButton = styled(motion.button)({
  position: "absolute",
  left: "5%",
  top: "-2%",
  width: "25%",
  border: "none",
  cursor: "pointer",
});

export const DeskLampImage = styled(motion.img)({
  width: "100%",
  height: "auto",
  display: "block",
});

export const HeadphonesButton = styled(motion.button)({
  position: "absolute",
  right: "7%",
  top: "-8%",
  width: "24%",
  border: "none",
  cursor: "pointer",
});

export const HeadphonesImage =  styled(motion.img)({
  width: "100%",
  height: "auto",
  display: "block",
  zIndex: "4",
});

export const PenTrayButton = styled(motion.button)({
  position: "absolute",
  right: "7%",
  top: "50%",
  width: "25%",
  border: "none",
  cursor: "pointer",
});

export const PenTrayImage =  styled(motion.img)({
  width: "100%",
  height: "auto",
  display: "block",
  zIndex: "3",
});

export const DiaryButton = styled(motion.button)({
  position: "absolute",
  right: "67%",
  top: "48%",
  width: "32%",
  border: "none",
  cursor: "pointer",
});

export const DiaryImage =  styled(motion.img)({
  position: "absolute",
  height: "auto",
  width: "100%",
  display: "block",
});

export const FlowerVaseButton = styled(motion.button)({
  position: "absolute",
  right: "48%",
  top: "44%",
  width: "15%",
  border: "none",
  cursor: "pointer",
});


export const FlowerVaseImage =  styled(motion.img)({
  width: "100%",
  height: "auto",
  display: "block",
  zIndex: "5",
});

// label, number, name
export const ObjectNumber = styled.span(({theme}) => ({
  display: "block",
  fontSize: theme.fontSize.xl,
  fontFamily: theme.fontFamily.display,
  color: theme.colors.textMain,
}));

export const Objectname = styled.span(({theme}) => ({
  display: "block",
  marginTop: theme.spacing.xs,
  fontSize: theme.fontSize.sm,
  color: theme.colors.secondText,
}));

export const DeskLampLabel = styled(motion.div)(({theme}) => ({
  position: "absolute",
  left: "3%",
  top: "15%",
  color: theme.colors.textMain,
}));

export const HeadphonesLabel = styled(motion.div)(({theme}) => ({
  position: "absolute",
  right: "7%",
  top: "30%",
  color: theme.colors.textMain,
}));

export const PenTrayLabel = styled(motion.div)(({theme}) => ({
  position: "absolute",
  right: "12%",
  top: "55%",
  color: theme.colors.textMain,
}));

export const DiaryLabel = styled(motion.div)(({theme}) => ({
  position: "absolute",
  left: "5%",
  top: "60%",
  color: theme.colors.textMain,
}));

export const FlowerVaseLabel = styled(motion.div)(({theme}) => ({
  position: "absolute",
  left: "52%",
  top: "77%",
  color: theme.colors.textMain,
}));


export const CollectionLabel = styled.p(({theme}) => ({
  position: "absolute",
  left: "6%",
  top: "5%",
  fontSize: theme.fontSize.sm,
  fontWeight: theme.fontWeight.semiBold,
  letterSpacing: "2px",
  color: theme.colors.secondText,
}));

export const GuideText = styled(motion.span)(({theme}) => ({
  position: "absolute",
  left: "55%",
  top: "30%",
  transform: "translateX(-50%)",
  fontSize: `clamp(${theme.fontSize.xs}, 1.2vw, ${theme.fontSize.sm})`,  fontWeight: theme.fontWeight.regular,
  letterSpacing: "0.1875rem", //3px
  color: theme.colors.secondText,
  pointerEvents: "none",
  zIndex: 10,
}));
import styled from "@emotion/styled";
import { motion } from "motion/react";

export const ProductsSection = styled.section(({theme, isBest}) => ({
  padding: theme.spacing["4xl"], //96
  backgroundColor: isBest
    ? theme.colors.cards
    : theme.colors.background,
}));

export const ProductTitle = styled.h2(({theme}) => ({
    marginBottom: theme.spacing.xl,
    fontFamily: theme.fontFamily.display,
    fontSize: theme.fontSize["4xl"], //32
    color: theme.colors.textMain,
}));

// 화면에 보여줄 상품 카드 범위를 제한
export const SliderViewport = styled.div({
    width: "100%",
    overflow: "hidden",
    display: "grid",
});

export const SliderTrack = styled(motion.div)(({theme}) => ({
    gridArea: "1 / 1",
    justifySelf: "start",
    display: "flex",
    alignItems: "stretch",
    gap: theme.spacing.lg,
    width: "max-content",
}));

export const ProductCards = styled.div(({theme}) => ({
    width: "280px",
    height: "280px",
    background: theme.colors.imagePlaceholder,
}))

// previous, next slider button
export const ProductSlider = styled.div({
    position: "relative",
    width: "min(1024px, 100vw)",
    left: "50%",
    transform: "translateX(-50%)",
});

export const SliderButton = styled.button(({theme}) => ({
    position: "absolute",
    top: "50%",
    width: "44px",
    height: "44px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    border: `1px solid ${theme.colors.subtle}`,
    borderRadius: theme.radius.full,
    backgroundColor: theme.colors.cards,
    color: theme.colors.textMain,
    cursor: "pointer",
    transform: "translateY(-50%)",
    zIndex: 10,
}));

// PageIndicator
export const PageIndicator = styled.div(({theme}) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing.xs,
    marginTop: theme.spacing.xl, //32
    color: theme.colors.secondText,
}));

export const IndicatorButton = styled.button(({theme}) => ({
    width: "8px",
    height: "8px",
    padding: 0,
    borderRadius: theme.radius.full,
    backgroundColor: theme.colors.secondText,
    cursor: "pointer",
    transition: "width 0.2s ease, background-color 0.2s ease",

    // 현재 페이지의 indicator 스타일
    '&[aria-current="page"]': {
        width: "32px",
        backgroundColor: theme.colors.textMain,
    }
}))
import styled from "@emotion/styled";

export const ProductsSection = styled.section(({theme}) => ({
    padding: theme.spacing["3xl"],
}));

export const ProductTitle = styled.h2(({theme}) => ({
    fontsize: theme.fontSize["4xl"],
    color: theme.colors.textMain,
}));

export const ProductContainer = styled.div(({theme}) => ({
    width: "100%",
    display: "flex",
    gap: theme.spacing.lg,
}));

export const ProductCards = styled.div(({theme}) => ({
    width: "280px",
    height: "280px",
    background: theme.colors.imagePlaceholder,
}))

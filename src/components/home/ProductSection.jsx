import styled from "@emotion/styled";

function ProductSection() {
  return (
    <>
        <ProductsSection>
            <ProductTitle>Best Items</ProductTitle>

            <ProductContainer>
                <ProductCards>1</ProductCards>
                <ProductCards>2</ProductCards>
                <ProductCards>3</ProductCards>
            </ProductContainer>
        </ProductsSection>

        <ProductsSection>
            <ProductTitle>New Items</ProductTitle>

            <ProductContainer>
                <ProductCards>1</ProductCards>
                <ProductCards>2</ProductCards>
                <ProductCards>3</ProductCards>
            </ProductContainer>
        </ProductsSection>

    </>
  )
}

const ProductsSection = styled.section(({theme}) => ({
    padding: theme.spacing["3xl"],
}));

const ProductTitle = styled.h2(({theme}) => ({
    fontsize: theme.fontSize["4xl"],
    color: theme.colors.textMain,
}));

const ProductContainer = styled.div(({theme}) => ({
    width: "100%",
    display: "flex",
    gap: theme.spacing.lg,
}));

const ProductCards = styled.div(({theme}) => ({
    width: "280px",
    height: "280px",
    background: theme.colors.imagePlaceholder,
}))

export { ProductSection };
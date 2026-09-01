import {
    ProductsSection,
    ProductContainer,
    ProductTitle,
    ProductCards,
} from "../../styles/ProductSection.styles";

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

export { ProductSection };
import styled from "@emotion/styled";

const categories = [
    "Lighting",
    "Organization",
    "Digital / Electronics",
    "Destk Accessories",
    "Stationery",
];

function CategoriesSection() {
  return (
    <CategoriesContainer>
        <SectionTitle>CATEGORIES</SectionTitle>

        <CategoryList>
            {categories.map((category) => (
                <CategoryItem key={category}>
                    <ImagePlaceholder />
                    <CategoryName>{category}</CategoryName>
                </CategoryItem>
            ))}
        </CategoryList>
    </CategoriesContainer>
  );
}

const CategoriesContainer = styled.section`
    width: 100%;
    padding: 64px;
    background-color: ${({theme}) => theme.colors.cards};
`;

const SectionTitle = styled.h2`
    font-size: 32px;
    color: ${({theme}) => theme.colors.textMain};
`;

const CategoryList = styled.div`
    display: flex;
    gap: 32px;
`;

const CategoryItem = styled.div`
    display: flex;
    width: 150px;
    align-items: center;
    gap: 8px;
`;

const ImagePlaceholder = styled.div`
    width: 150px;
    height: 150px;
    background-radius: 999px;
`;

const CategoryName = styled.div`
    font-size: 14px;
    color: ${({theme}) => theme.colors.textMain};
    text-align: center;
`;

export { CategoriesSection }
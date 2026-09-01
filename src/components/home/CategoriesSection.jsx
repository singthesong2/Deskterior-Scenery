import {
    SectionTitle,
    CategoriesContainer,
    CategoryList,
    CategoryItem,
    CategoryName,
    ImagePlaceholder,
} from "../../styles/CategoriesSection.styles";

const categories = [
    "Lighting",
    "Organization",
    "Digital / Electronics",
    "Desk Accessories",
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

export { CategoriesSection };
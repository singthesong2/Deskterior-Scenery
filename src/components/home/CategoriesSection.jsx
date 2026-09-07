import {
    SectionTitle,
    CategoriesContainer,
    CategoryList,
    CategoryItem,
    CategoryName,
    CategoryImage,
} from "../../styles/MainStyles/CategoriesSection.styles";

const categoryNames = {
  lighting: "Lighting",
  organization: "Organization",
  "digital-electronics": "Digital / Electronics",
  "desk-accessories": "Desk Accessories",
  "objects-stationery": "Stationery",
};

function CategoriesSection({items = [] }) {
  return (
    <CategoriesContainer>
        <SectionTitle>CATEGORIES</SectionTitle>

        <CategoryList>
            {items.map((item) => (
                <CategoryItem key={item.id}>
                    <CategoryImage
                    src={item.imageUrl}
                    alt={`${categoryNames[item.categoryId]} 카테고리`}
                    />
                    <CategoryName>{categoryNames[item.categoryId]}</CategoryName>
                </CategoryItem>
            ))}
        </CategoryList>
    </CategoriesContainer>
  );
}

export { CategoriesSection };

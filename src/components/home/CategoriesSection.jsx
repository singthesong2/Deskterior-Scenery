import {
    SectionTitle,
    CategoriesContainer,
    CategoryList,
    CategoryItem,
    CategoryName,
    CategoryImage,
} from "../../styles/MainStyles/CategoriesSection.styles";
import { useNavigate } from "react-router";


const categoryNames = {
    lighting: "Lighting",
    organization: "Organization",
    "digital-electronics": "Digital / Electronics",
    "desk-accessories": "Desk Accessories",
    "objects-stationery": "Stationery",
};

const categoryPaths = {
    lighting: "/lightingpage",
    // 다른 카테고리 페이지는 추후 추가
}

function CategoriesSection({items = [] }) {
    const navigate = useNavigate();

  return (
    <CategoriesContainer>
        <SectionTitle>CATEGORIES</SectionTitle>

        <CategoryList>
            {items.map((item) => (
                <CategoryItem
                    key={item.id}
                    type="button"
                    onClick={() => {
                        const path = categoryPaths[item.categoryId];
                        if(path) {
                            navigate(path);
                        }
                    }}
                    >
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

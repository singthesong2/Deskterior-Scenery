import { useNavigate } from "react-router";
import { getCategoryById } from "../../data/categories";
import {
  SectionTitle,
  CategoriesContainer,
  CategoryList,
  CategoryItem,
  CategoryName,
  CategoryImage,
} from "../../styles/MainStyles/CategoriesSection.styles";

function CategoriesSection({ items = [] }) {
  const navigate = useNavigate();

  return (
    <CategoriesContainer>
      <SectionTitle>CATEGORIES</SectionTitle>

      <CategoryList>
        {items.map((item) => {
          const category = getCategoryById(item.categoryId);

          return (
            <CategoryItem
              key={item.id}
              type="button"
              onClick={() => {
                if (category?.path) {
                  navigate(category.path);
                }
              }}
            >
              <CategoryImage
                src={item.imageUrl}
                alt={`${category?.name ?? ""} 카테고리`}
              />
              <CategoryName>{category?.name}</CategoryName>
            </CategoryItem>
          );
        })}
      </CategoryList>
    </CategoriesContainer>
  );
}

export { CategoriesSection };

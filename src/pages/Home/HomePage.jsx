import { CategoriesSection } from "../../components/home/CategoriesSection";
import { HeroSection } from "../../components/home/HeroSection";
import { DeskCurationSection } from "../../components/home/DeskCurationSection";
import { ProductSection } from "../../components/home/ProductSection";
import { useEffect, useState } from "react";
import { getCategories } from "../../api/categoriesApi";
import { getMain } from "../../api/mainApi";

export default function HomePage() {
  const [mainImages, setMainImages] = useState([]);

  useEffect(() => {
    async function fetchMainData() {
      try {
        const response = await getMain();

        setMainImages(response.data.images);
      } catch (error) {
        console.error("메인 이미지 조회 실패:", error);
      }
    }

    fetchMainData();
  }, []);

  const categoryItems = mainImages.filter((item) => item.categoryId);
  const styleItems = mainImages.filter((item) => item.styleId);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories()
      .then(setCategories)
      .catch((err) => console.error("카테고리 로딩 실패:", err));
  }, []);

  return (
    <>
      <main>
        <HeroSection />
        <CategoriesSection items={categoryItems} categories={categories} />
        <DeskCurationSection items={styleItems} />
        <ProductSection />
      </main>
    </>
  );
}

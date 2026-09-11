import { CategoriesSection } from "../../components/home/CategoriesSection";
import { HeroSection } from "../../components/home/HeroSection";
import { DeskCurationSection } from "../../components/home/DeskCurationSection";
import { ProductSection } from "../../components/home/ProductSection";
import { useEffect, useState } from "react";
import main from "../../data/main";
import { getCategories } from "../../api/categoriesApi";

export default function HomePage() {
  // useEffect(() => {
  //   async function fetchMainData() {
  //     try {
  //       const data = await getMain();
  //       console.log("GET /main 응답:", data);
  //     } catch (error) {
  //       console.log("GET /main 요청 실패:", error);
  //     }
  //   }
  //   fetchMainData();
  // }, []);
  const categoryItems = main.slice(0, 5);
  const styleItems = main.filter((item) => item.styleId);

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

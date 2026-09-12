import { CategoriesSection } from "../../components/home/CategoriesSection";
import { HeroSection } from "../../components/home/HeroSection";
import { DeskCurationSection } from "../../components/home/DeskCurationSection";
import { ProductSection } from "../../components/home/ProductSection";
import { useEffect, useState } from "react";
import { getCategories } from "../../api/categoriesApi";
import { getMain } from "../../api/mainApi";
import useLoadingStore from "../../store/UseloadingStore";
import { preloadingImages } from "../../utils/preloadingImages";

export default function HomePage() {
  const [mainImages, setMainImages] = useState([]);

  const categoryItems = mainImages.filter((item) => item.categoryId);
  const styleItems = mainImages.filter((item) => item.styleId);
  const [categories, setCategories] = useState([]);

  const startLoading = useLoadingStore((state) => state.startLoading);
  const endLoading = useLoadingStore((state) => state.endLoading);

  useEffect(() => {
    let alive = true;

    async function fetchHomeData() {
      startLoading();

      try {
        const [mainResponse, categoryResponse] = await Promise.all([
          getMain(),
          getCategories(),
        ]);

        const images = mainResponse.data.images;

        const imageUrls = images.map((item) => item.imageUrl);

        await preloadingImages(images.map((item) => item.imageUrl));

        if (!alive) return;

        setMainImages(images);
        setCategories(categoryResponse);
      } catch (error) {
        console.error("홈 데이터 로딩 실패:", error);
      } finally {
        endLoading();
      }
    }

    fetchHomeData();

    return () => {
      alive = false;
    };
  }, [startLoading, endLoading]);

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

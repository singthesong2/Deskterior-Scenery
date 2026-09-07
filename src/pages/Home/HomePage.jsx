import { CategoriesSection } from "../../components/home/CategoriesSection";
import { HeroSection } from "../../components/home/HeroSection";
import { DeskCurationSection } from "../../components/home/DeskCurationSection";
import { ProductSection } from "../../components/home/ProductSection";
import { useEffect } from "react";
import { getMain } from "../../api/mainApi";

export default function HomePage() {
  useEffect(() => {
    async function fetchMainData() {
      try {
        const data = await getMain();
        console.log("GET /main 응답:", data);
      } catch (error) {
        console.log("GET /main 요청 실패:", error);
      }
    }
    fetchMainData();
  }, []);
  
  return (
    <>
      <main>
        <HeroSection />
        <CategoriesSection />
        <DeskCurationSection />
        <ProductSection />
      </main>
    </>
  );
}

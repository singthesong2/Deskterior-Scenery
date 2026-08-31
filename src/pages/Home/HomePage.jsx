import { CategoriesSection } from "../../components/home/CategoriesSection";
import { HeroSection } from "../../components/home/HeroSection";
import { DeskCurationSection } from "../../components/home/DeskCurationSection";
import { ProductSection } from "../../components/home/ProductSection";

export default function HomePage() {
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

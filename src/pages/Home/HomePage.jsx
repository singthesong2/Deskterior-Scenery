import { CategoriesSection } from "../../components/home/CategoriesSection";
import Header from "../../components/layout/Header";
import { HeroSection } from "../../components/home/HeroSection";
import { DeskCurationSection } from "../../components/home/DeskCurationSection";

export default function HomePage() {
  return (
    <>
        <Header />

        <main>
            <HeroSection />
            <CategoriesSection />
            <DeskCurationSection />
        </main>
    </>
  );
}

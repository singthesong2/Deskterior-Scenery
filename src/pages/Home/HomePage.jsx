import { CategoriesSection } from "../../components/layout/CategoriesSection";
import Header from "../../components/layout/Header";
import { HeroSection } from "../../components/layout/HeroSection";

export default function HomePage() {
  return (
    <>
        <Header />

        <main>
            <HeroSection />
            <CategoriesSection />
        </main>
    </>
  );
}

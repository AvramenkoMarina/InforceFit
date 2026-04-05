import { Hero } from "~/components/hero";
import type { Route } from "./+types/home";
import NutritionSection from "~/components/nutritionSection";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="max-w-360 mx-auto px-37.5">
        <NutritionSection />
      </div>
    </main>
  );
}

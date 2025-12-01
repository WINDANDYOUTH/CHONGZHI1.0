import HeroSection from "@/components/hero/HeroSection";
import AdvantagesSection from "@/components/sections/AdvantagesSection";
import PricingSection from "@/components/sections/PricingSection";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <HeroSection />
      <AdvantagesSection />
      <PricingSection />
      {/* 后面可以继续接价格区块 / 流程区块等 */}
    </main>
  );
}

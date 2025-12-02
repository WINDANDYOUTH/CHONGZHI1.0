import HeroSection from "@/components/hero/HeroSection";
import AdvantagesSection from "@/components/sections/AdvantagesSection";
import PricingSection from "@/components/sections/PricingSection";
import MobileStickyCTA from "@/components/cta/MobileStickyCTA";
import UpgradeStepsSection from "@/components/sections/UpgradeStepsSection";
import FAQSection from "@/components/sections/FAQSection";
import SupportSection from "@/components/sections/SupportSection";

export default function HomePage() {
    return (
        <main className="bg-black text-white">
            <HeroSection />
            <AdvantagesSection />
            <PricingSection />
            <MobileStickyCTA />
            <UpgradeStepsSection />
            <FAQSection />
            <SupportSection />
            {/* 后面可以继续接价格区块 / 流程区块等 */}
        </main>
    );
}

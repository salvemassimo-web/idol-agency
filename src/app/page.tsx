import { BenefitsSection } from "@/components/BenefitsSection";
import { EditorialStatementSection } from "@/components/EditorialStatementSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";
import { ForWhoSection } from "@/components/ForWhoSection";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MethodSection } from "@/components/MethodSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SafetySection } from "@/components/SafetySection";
import { SolutionSection } from "@/components/SolutionSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <MethodSection />
        <ForWhoSection />
        <BenefitsSection />
        <EditorialStatementSection />
        <SafetySection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}

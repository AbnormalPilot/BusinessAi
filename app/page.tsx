import HeroSection from "@/components/hero-section";
import ProblemSolution from "@/components/problem-solution";
import FeaturesGrid from "@/components/features-grid";
import HowItWorks from "@/components/how-it-works";
import TrustSection from "@/components/trust-section";
import CTASection from "@/components/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSolution />
      <FeaturesGrid />
      <HowItWorks />
      <TrustSection />
      <CTASection />
    </>
  );
}

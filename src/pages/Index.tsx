import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustSignals } from "@/components/home/TrustSignals";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { FestiveHighlight } from "@/components/home/FestiveHighlight";
import { HowItWorks } from "@/components/home/HowItWorks";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustSignals />
      <FeaturedCategories />
      <FestiveHighlight />
      <HowItWorks />
    </Layout>
  );
};

export default Index;

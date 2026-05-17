import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { PromoBanner } from "@/components/site/promo-banner";

export default function Home() {
  return (
    <>
      <PromoBanner />
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}

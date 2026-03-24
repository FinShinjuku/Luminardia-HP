import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Business } from "@/components/sections/business";
import { WhyUs } from "@/components/sections/why-us";
import { TrustBar } from "@/components/sections/trust-bar";
import { CtaBand } from "@/components/sections/cta-band";
import { CompanyInfo } from "@/components/sections/company-info";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Business />
        <WhyUs />
        <TrustBar />
        <CtaBand />
        <CompanyInfo />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

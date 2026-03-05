import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { About } from "@/components/sections/about";
import { Business } from "@/components/sections/business";
import { Strength } from "@/components/sections/strength";
import { Security } from "@/components/sections/security";
import { CompanyInfo } from "@/components/sections/company-info";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Business />
        <Strength />
        <Security />
        <CompanyInfo />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Business } from "@/components/sections/business";
import { CompanyInfo } from "@/components/sections/company-info";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Business />
        <CompanyInfo />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

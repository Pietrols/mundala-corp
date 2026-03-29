import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import BSIPartnership from "@/components/sections/BSIPartnership";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex flex-col">
        {/* Step 4: Hero Section */}
        <Hero />

        {/* Step 5: About Section */}
        <About />

        {/* Step 5 — Services (Card-based overview) */}
        <Services />

        {/* Step 6 — BSI Partnership (Feature spotlight) */}
        <BSIPartnership />

        {/* Step 7 — Why Choose Us (Value proposition grid) */}
        <WhyChooseUs />

        {/* Step 8 — Contact (Form and Office info) */}
        <Contact />
      </main>

      {/* Footer implementation */}
      <Footer />
    </>
  );
}

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />

      <About />

      <section
        id="services"
        className="flex min-h-[60vh] flex-col items-center justify-center gap-8 bg-muted p-8"
      >
        <p className="micro-label">Services</p>
        <p className="text-muted-foreground">Coming in Step 5.</p>
      </section>

      <section
        id="partnership"
        className="flex min-h-[60vh] flex-col items-center justify-center gap-8 p-8"
      >
        <p className="micro-label">Partnership</p>
        <p className="text-muted-foreground">Coming in Step 6.</p>
      </section>

      <section
        id="contact"
        className="flex min-h-[60vh] flex-col items-center justify-center gap-8 bg-muted p-8"
      >
        <p className="micro-label">Contact</p>
        <p className="text-muted-foreground">Coming in Step 8.</p>
      </section>
    </main>
  );
}

import { Hero } from "@/components/home/Hero";
import { Clients } from "@/components/home/Clients";
import { Services } from "@/components/home/Services";
import { Experience } from "@/components/home/Experience";
import { SelectedWork } from "@/components/home/SelectedWork";
import { Testimonial } from "@/components/home/Testimonial";
import { Products } from "@/components/home/Products";
import { Industries } from "@/components/home/Industries";
import { Promises } from "@/components/home/Promises";
import { Section } from "@/components/ui/Section";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />

      <Section id="services">
        <Services />
      </Section>

      <Section id="experience" grid>
        <Experience />
      </Section>

      {/* the light-table flip */}
      <Section id="work" tone="paper">
        <SelectedWork />
      </Section>

      <Section>
        <Testimonial />
      </Section>

      <Section id="products">
        <Products />
      </Section>

      <Section id="industries">
        <Industries />
      </Section>

      <Section>
        <Promises />
      </Section>
    </>
  );
}

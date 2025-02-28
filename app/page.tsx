"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import PersonalCard from "@/components/ui/personalcard";
import { Hero } from "@/components/ui/animated-hero";
import LogosList from "@/components/ui/logoslist";
import { FeaturesSectionWithHoverEffects } from "@/components/feature-section-with-hover-effects";

export default function HomePage() {
  return (
    <div>
      {/* Arka Plan */}
      <div
              className="absolute top-0 left-0 right-0 bottom-0 z-[-1] bg-cover bg-center opacity-10"
              style={{
                backgroundImage: "url('/images/firma/background.jpg')",
                height: "100vh", // Ekranın tamamını kapsar
                backgroundAttachment: "fixed", // Arka plan sabit kalır
              }}
            />
      <Hero />
      <LogosList />
      <FeaturesSectionWithHoverEffects />
    </div>
  );
}

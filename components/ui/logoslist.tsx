import Image from "next/image";
import { Marquee } from "./marquee";

const Logos = [
  { src: "/images/marken/yamaha.png", alt: "Tailwind" },
  { src: "/images/marken/Honda.png", alt: "Honda" },
  { src: "/images/marken/kawasaki.png", alt: "Tailwind" },
  { src: "/images/marken/Suzuki.png", alt: "Tailwind" },
  { src: "/images/marken/royalenfield.svg", alt: "Tailwind" },
  { src: "/images/marken/ktm.svg", alt: "Tailwind" },

  // { src: "/images/marken/piaggio.png", alt: "Tailwind" },
  // { src: "/images/marken/aprilia.png", alt: "Tailwind" },
  // { src: "/images/marken/vespa.png", alt: "Tailwind" },
];

const LogosList = () => {
  return (
    <Marquee>
      {Logos.map((logo, index) => (
        <div key={index} className="flex items-center justify-center px-6">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={500}
            height={200}
            className=""
          />
        </div>
      ))}
    </Marquee>
  );
};

export default LogosList;

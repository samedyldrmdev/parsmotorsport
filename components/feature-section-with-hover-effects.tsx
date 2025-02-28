import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Verkauf, Beratung und Vermittlung",
      description:
        "von ALLEN Fahrzeugen (Motorräder, Quads/ATVs/UTVs, Roller, Trikes, E-Mobilities, etc.) und ALLEN Marken!",
      icon: <IconTerminal2 />,
    },
    {
      title: "Inzahlungnahme und Ankauf von gebrauchten Fahrzeugen",
      description: "ALLER Art und MARKEN!",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Finanzierung, Leasing und Versicherung",
      description:
        "von Neufahrzeugen, Gebrauchtfahrzeugen, Werkstattreparaturen",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Instandsetzung, Reparatur, Pflege/Reinigung",
      description:
        "Modifikation/Tuning, Leistungsänderung bei ALLEN Marken",
      icon: <IconCloud />,
    },
    {
      title: "Kostenloser Hol- und Bringservice",
      description: "Abschleppen und Bergung mit eigenem Fahrzeug",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Stellung eines Ersatzfahrzeuges",
      description: "bei längerer Reparaturdauer",
      icon: <IconHelp />,
    },
    {
      title: "Schaden- und Unfallmanagement, Gutachtenerstellung",
      description: "für alle Arten von Fahrzeugschäden und Unfällen",
      icon: <IconEaseInOut />,
    },
    {
      title: "Hausmessen, Motorradtouren und Events",
      description: "Mit uns erleben Sie unvergessliche Events!",
      icon: <IconHeart />,
    },
    {
      title: "Gesetzliche Haupt- und Abgasuntersuchung",
      description:
        "anerkannte Prüfstelle für TÜV und DEKRA",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Winter-Einlagerung Ihrer Fahrzeuge",
      description: "sicher und komfortabel in unserer Einrichtung",
      icon: <IconTerminal2 />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

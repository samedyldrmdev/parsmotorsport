export default function PkwService() {
  const services = [
    {
      title: "Reparatur und Service",
      description: "Für alle Marken und Modelle: Motor, Bremse, Auspuff, Fahrwerk, Elektrik..."
    },
    {
      title: "Inspektion",
      description: "Komplette Inspektion aller Fahrzeugkomponenten."
    },
    {
      title: "HU / AU",
      description: "Hauptuntersuchung und Abgasuntersuchung (HU / AU)."
    },
    {
      title: "Reifenservice",
      description: "Inklusive Fahrwerksüberprüfung."
    },
    {
      title: "Lack- und Karosseriearbeiten",
      description: "Professionelle Lack- und Karosserieinstandsetzung."
    },
    {
      title: "Unfallinstandsetzung",
      description: "Wir kümmern uns um alle Schäden nach einem Unfall."
    },
    {
      title: "Klimaservice",
      description: "Wartung und Reparatur Ihrer Klimaanlage."
    },
    {
      title: "Getriebespülung",
      description: "Speziell für Automatikgetriebe."
    },
    {
      title: "Glasschaden-Service",
      description: "Reparatur und Austausch von beschädigten Fahrzeugglas."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary mb-4">Preiswert, Zuverlässig, Schnell</h2>
        <h2 className="text-4xl font-bold text-primary mb-4">Einfach Meisterhaft!</h2>
        <p className="text-xl text-muted-foreground mb-4">FÜR IHR FAHRZEUG MACHEN WIR UNS STARK!</p>
        <p className="text-lg text-muted-foreground mb-8 px-40">
          PARS Motorsport e.K. ist eine freie Kfz-Werkstatt, die hinsichtlich Ihrer Kompetenz, Zuverlässigkeit und Professionalität eine echte 
          Alternative zur Vertragswerkstatt darstellt.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white text-black shadow-lg rounded-lg p-6 transition-all hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-center mb-4">{service.title}</h3>
            <p className="text-sm text-gray-500 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

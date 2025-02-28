import Image from "next/image";

export default function PersonalCard() {
  return (
    <div className="flex justify-center items-center">
      <div className="grid w-1/2 grid-cols-3 gap-8 p-6">
        {[
          {
            name: "Serkan Kemah",
            role: "Inhaber",
            image: "/images/personal/serkankemah.jpg",
            color: "text-amber-600",
          },
          {
            name: "Philipp Schlager",
            role: "Techn. Betriebsleiter",
            image: "/images/personal/philippschlager.webp",
            color: "text-rose-600",
          },
          {
            name: "Seray Kemah",
            role: "Verkauf",
            image: "/images/personal/seraykemah.webp",
            color: "text-orange-600",
          },
        ].map((person, index) => (
          <div
            key={index}
            className="bg-background rounded-xl overflow-hidden shadow-lg shadow-accent"
          >
            <div className="relative w-full h-64">
              <Image
                src={person.image}
                alt={`${person.name} - ${person.role}`}
                layout="fill"
                objectFit="cover"
                className="grayscale hover:grayscale-0"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold">
                {person.name.split(" ")[0]} <span className={person.color}>{person.name.split(" ")[1]}</span>
              </h3>
              <p className="text-sm text-gray-400 mt-1">{person.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
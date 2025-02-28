"use client";

import { useForm } from "react-hook-form";
import HeaderText from "../../components/ui/headertext";

export default function CarPurchaseForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Form başarıyla gönderildi!");
  };

  return (
    <div className="w-full max-w-6xl p-6 mx-auto">
      <HeaderText title="FAHRZEUGANKAUF" />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm">Name, Vorname</label>
              <input
                {...register("name", { required: true })}
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400"
                placeholder="Ihr Name"
              />
            </div>
            <div>
              <label className="block text-sm">E-Mail</label>
              <input
                {...register("email", { required: true })}
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400"
                placeholder="Ihre E-Mail"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm">Telefon</label>
              <input
                {...register("phone")}
                type="tel"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400"
                placeholder="Ihre Telefonnummer"
              />
            </div>
            <div>
              <label className="block text-sm">Hersteller</label>
              <input
                {...register("manufacturer")}
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400"
                placeholder="Hersteller"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm">Modell</label>
              <input
                {...register("model")}
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400"
                placeholder="Modell"
              />
            </div>
            <div>
              <label className="block text-sm">Erstzulassung</label>
              <input
                {...register("firstRegistration")}
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400"
                placeholder="JJJJ"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm">Anzahl Fahrzeughalter</label>
              <input
                {...register("owners")}
                type="number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400"
                placeholder="Zahl"
              />
            </div>
            <div>
              <label className="block text-sm">Laufleistung in Kilometer</label>
              <input
                {...register("mileage")}
                type="number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400"
                placeholder="KM"
              />
            </div>
            <div>
              <label className="block text-sm">
                Gesetzliche HU und AUK bis
              </label>
              <input
                {...register("inspection")}
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400"
                placeholder="MM/JJJJ"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm">Fahrzeugbeschreibung</label>
            <textarea
              {...register("description")}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400"
              rows="4"
              placeholder="Beschreibung"
            ></textarea>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm">
                Unfall/Umfall/Beschädigung(en)
              </label>
              <div className="flex space-x-4">
                <label>
                  <input {...register("damage")} type="radio" value="Ja" /> Ja
                </label>
                <label>
                  <input {...register("damage")} type="radio" value="Nein" />{" "}
                  Nein
                </label>
                <label>
                  <input
                    {...register("damage")}
                    type="radio"
                    value="Repariert"
                  />{" "}
                  Behobener Schaden / Repariert
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm">Interesse an Neufahrzeug?</label>
              <div className="flex space-x-4">
                <label>
                  <input
                    {...register("newCarInterest")}
                    type="radio"
                    value="Nein"
                  />{" "}
                  Nein, nur Verkauf
                </label>
                <label>
                  <input
                    {...register("newCarInterest")}
                    type="radio"
                    value="Ja"
                  />{" "}
                  Ja
                </label>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm">Preisvorstellung in Euro</label>
            <input
              {...register("price")}
              type="number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400"
              placeholder="€"
            />
          </div>
          <div>
            <label className="block text-sm">Bilder / Anhang</label>
            <input
              {...register("file")}
              type="file"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-500 transition"
          >
            Nachricht senden
          </button>
        </div>
      </form>
    </div>
  );
}

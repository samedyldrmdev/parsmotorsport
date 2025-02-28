import HeaderText from "../../components/ui/headertext";

export default function Kontakt() {
  return (
    <div>
      <HeaderText title="KONTAKT"/>
      <div className="flex flex-col md:flex-row items-center justify-center gap-20 px-32 p-16">
        {/* Sol tarafta İletişim Formu */}
        <div className="w-full md:w-1/2 p-6 rounded-lg">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 dark:bg-gray-800 dark:text-white"
                placeholder="Ihr Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                E-Mail
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 dark:bg-gray-800 dark:text-white"
                placeholder="Ihre E-Mail"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Telefon
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 dark:bg-gray-800 dark:text-white"
                placeholder="Ihre Telefonnummer"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Nachricht
              </label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 dark:bg-gray-800 dark:text-white"
                rows="4"
                placeholder="Ihre Nachricht"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            >
              Senden
            </button>
          </form>
        </div>

        {/* Harita */}
        <div className="w-full md:w-1/2 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.199728094173!2d11.331404976819098!3d50.23217350305579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a17b1f01fe904d%3A0xf9628f02fa69cf8!2sPARS%20Motorsport%20e.K.!5e0!3m2!1str!2sde!4v1739747434557!5m2!1str!2sde"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

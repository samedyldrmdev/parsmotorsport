import PersonalCard from "@/components/ui/personalcard";
import HeaderText from "../../components/ui/headertext";

export default function About() {
  return (
    <div className="content-container flex flex-col justify-center">
      <HeaderText title="INFOTHEK - DOWNLOADS" />
      <div className="text-center">
        <h1 className="text-bold ">Führerscheinklassen</h1>

        <section>
          <h2>Klasse AM</h2>
          <p>
            <strong>Vorgeschrieben ist bei der Klasse AM:</strong>
          </p>
          <ul>
            <li>Eine theoretische Ausbildung.</li>
            <li>Eine praktische Ausbildung.</li>
            <li>Mindestalter 16 Jahre.</li>
          </ul>
          <h3>Klasse AM Zusammenfassung</h3>
          <ul>
            <li>Mokicks und Mokick-Roller bis 50 ccm Hubraum</li>
            <li>Maximal erlaubte Höchstgeschwindigkeit 45km/h</li>
            <li>Mindestalter in Deutschland 16 Jahre</li>
          </ul>
        </section>

        <section>
          <h2>Klasse A1</h2>
          <p>
            <strong>Kategorie Leichtkrafträder (125ccm)</strong>
          </p>
          <p>
            <strong>Vorgeschrieben ist bei der Klasse A1:</strong>
          </p>
          <ul>
            <li>Eine theoretische Ausbildung.</li>
            <li>Eine praktische Ausbildung.</li>
            <li>Mindestalter 16 Jahre.</li>
          </ul>
          <h3>Klasse A1 Zusammenfassung</h3>
          <ul>
            <li>
              Leichtkrafträder und Leichtkraftroller bis maximal 125 ccm Hubraum
            </li>
            <li>Maximale Leistung 11kW (15PS) – kein Tempolimit</li>
            <li>Maximales Leistungsgewicht 0,1 kW/kg</li>
            <li>Mindestalter in Deutschland 16 Jahre</li>
            <li>Schließt Klasse AM ein.</li>
          </ul>
          <p>
            Der A1 Führerschein wird nicht automatisch nach 2 Jahren auf A2
            erweitert. Hierzu ist eine A2 Führerscheinausbildung erforderlich.
          </p>
        </section>

        <section>
          <h2>Klasse A2</h2>
          <p>
            <strong>
              Kategorie Motorräder und Motorroller mit maximal 35kW (48PS)
            </strong>
          </p>
          <p>
            <strong>Vorgeschrieben ist bei der Klasse A2:</strong>
          </p>
          <ul>
            <li>Eine theoretische Ausbildung.</li>
            <li>Eine praktische Ausbildung.</li>
            <li>Mindestalter 18 Jahre</li>
            <li>
              Beim Besitz der Fahrerlaubnis der Klasse A1 von mindestens 2
              Jahren ist nur eine praktische Prüfung erforderlich.
            </li>
          </ul>
          <h3>Klasse A2 Zusammenfassung</h3>
          <ul>
            <li>
              Motorräder und Motorroller mit einer Maximalleistung von 35kW
              (48PS)
            </li>
            <li>
              Lediglich praktische Prüfung erforderlich bei 2-jährigem Besitz
              der Fahrerlaubnis A1
            </li>
            <li>Maximales Leistungsgewicht 0,2 kW/kg</li>
            <li>Mindestalter 18 Jahre</li>
            <li>Schließt Klasse A1 und AM ein.</li>
          </ul>
          <p>
            Der A2 Führerschein wird nicht automatisch nach 2 Jahren auf A
            erweitert. Hierzu ist eine A Führerscheinausbildung erforderlich.
          </p>
        </section>

        <section>
          <h2>Klasse A</h2>
          <p>
            <strong>
              Kategorie Motorräder und Motorroller ohne Leistungsbegrenzung
            </strong>
          </p>
          <p>
            <strong>Vorgeschrieben ist bei der Klasse A:</strong>
          </p>
          <ul>
            <li>
              Beim Direkteinstieg eine theoretische Ausbildung und eine
              praktische Ausbildung, Mindestalter 24 Jahre.
            </li>
            <li>
              Beim Besitz der Fahrerlaubnis der Klasse A2 von mindestens 2
              Jahren ist nur eine praktische Prüfung erforderlich.
            </li>
          </ul>
          <h3>Klasse A Zusammenfassung</h3>
          <ul>
            <li>
              Alle Motorräder und Motorroller – ohne Leistungsbeschränkung
            </li>
            <li>
              Beim Besitz der Fahrerlaubnis der Klasse A2 von mindestens 2
              Jahren ist nur eine praktische Prüfung erforderlich.
            </li>
            <li>Mindestalter für Direkteinstieg 24 Jahre.</li>
            <li>Schließt Klasse A2, A1 und AM ein.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

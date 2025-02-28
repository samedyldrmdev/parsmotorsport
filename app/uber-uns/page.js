import PersonalCard from "@/components/ui/personalcard";
import HeaderText from "../../components/ui/headertext";

export default function uberUns() {
  return (
    <div>
      <div>
        <HeaderText title="ÜBER UNS"/>
        <div>
          <p className="px-48 text-center">
            Unser Team besteht aus hervorragend ausgebildeten und motivierten
            Mitarbeitern, die absolute Experten auf ihrem Gebiet sind. <br></br>{" "}
            Dank ihrer langjährigen Erfahrung in der Branche können sie
            jederzeit umfangreichen, erstklassigen Service für unsere Kunden
            anbieten.
          </p>
        </div>
        <h1 className="text-2xl font-extrabold text-center p-8">UNSERE TEAM</h1>
      </div>

      <PersonalCard />
    </div>
  );
}

// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import Link from "next/link";

export default function Whatsapp() {
  return (
    <div className="fixed right-5 bottom-5">
      <div className="flex flex-row items-center gap-3">
        <div className="relative group flex items-center">
          <div className="bg-white shadow-sm shadow-gray-500 p-1 px-2 opacity-0 rounded-lg group-hover:opacity-100 transition-opacity duration-300 absolute left-[-130px] cursor-pointer">
            <Link href="https://wa.me/+4915254068748">Schreib uns!</Link>
          </div>
          <Link href="https://wa.me/+4915254068748">
            <IconBrandWhatsapp className="size-12 bg-emerald-500 rounded-full text-white p-2 hover:bg-green-600 cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
}

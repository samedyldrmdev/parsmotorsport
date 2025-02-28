// FontAwesome kütüphanelerini içe aktar
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faYoutube,
  faWhatsapp,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { faEnvelope, faMailBulk } from "@fortawesome/free-solid-svg-icons";

export default function Social() {
  return (
    <div className="hidden md:block lg:block">
      <div className="fixed left-10 bottom-44 text-white mix-blend-difference">
        <div className="flex flex-col w-full h-full p-2 py-5 gap-3">
          <Link href={"https://www.facebook.com/profile.php?id=100030902540949"}>
            <FontAwesomeIcon
              icon={faFacebook}
              className="size-5 hover:translate-y-[-3px]"
            />
          </Link>
          <Link href={"https://twitter.com/"}>
            <FontAwesomeIcon
              icon={faXTwitter}
              className="size-5 hover:translate-y-[-3px]"
            />
          </Link>
          <Link href={"https://www.instagram.com/parsmotorsport/"}>
            <FontAwesomeIcon
              icon={faInstagram}
              className="size-5 hover:translate-y-[-3px]"
            />
          </Link>
          <Link href={"https://youtube.com/"}>
            <FontAwesomeIcon
              icon={faYoutube}
              className="size-5 hover:translate-y-[-3px]"
            />
          </Link>
          <Link href={"mailto:info@pars-consulting.de"}> {/* WhatsApp linki numaranı ekleyerek düzenlenmeli */}
            <FontAwesomeIcon
              icon={faEnvelope}
              className="size-5 hover:translate-y-[-3px]"
            />
          </Link>
        </div>
      </div>
      <div className="fixed border h-40 left-14 bottom-0 border-white mix-blend-difference"></div>
    </div>
  );
}

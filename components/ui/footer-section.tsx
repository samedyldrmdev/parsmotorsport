import * as React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

function Footerdemo() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            {/* Logo kısmı */}
            <Image
              src="/images/Logo.png"
              alt="Unternehmenslogo"
              width={192} // 48 * 4 (tailwind'in w-48 karşılığı px cinsinden)
              height={64} // Otomatik ölçeklenmesi için uygun bir yükseklik
              className="w-48 h-auto dark:invert"
            />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Schnellzugriff</h3>
            <nav className="space-y-2 text-sm">
              <a
                href="#"
                className="block transition-colors hover:text-primary"
              >
                Startseite
              </a>
              <a
                href="#"
                className="block transition-colors hover:text-primary"
              >
                Unser Team
              </a>
              <a
                href="#"
                className="block transition-colors hover:text-primary"
              >
                Motorräder
              </a>
              <a
                href="#"
                className="block transition-colors hover:text-primary"
              >
                Autos
              </a>
              <a
                href="#"
                className="block transition-colors hover:text-primary"
              >
                Kontakt
              </a>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Kontakt</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>Industriestraße 16</p>
              <p>96317 Kronach</p>
              <p>E-Mail: info@pars-motorsport.com</p>
              <p>Tel: +49 (0) 9261 9658830</p>
              <p>Fax: +49 (0) 9261 9658831</p>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Folgen Sie uns</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <FontAwesomeIcon icon={faFacebook} className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Folgen Sie uns auf Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <FontAwesomeIcon icon={faXTwitter} className="h-4 w-4" />
                      <span className="sr-only">X</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Folgen Sie uns auf X</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <FontAwesomeIcon icon={faInstagram} className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Folgen Sie uns auf Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <FontAwesomeIcon icon={faYoutube} className="h-4 w-4" />
                      <span className="sr-only">YouTube</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Abonnieren Sie uns auf YouTube</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faSun} className="h-4 w-4" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
              />
              <FontAwesomeIcon icon={faMoon} className="h-4 w-4" />
              <Label htmlFor="dark-mode" className="sr-only">
                Dunkelmodus umschalten
              </Label>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 PARS Motorsport e.K. Alle Rechte vorbehalten.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="transition-colors hover:text-primary">
              Impressum
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Showroom
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Datenschutz
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export { Footerdemo };

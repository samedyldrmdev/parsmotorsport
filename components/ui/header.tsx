"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

function Header1() {
  const pathname = usePathname(); // Mevcut sayfanın yolunu al
  const navigationItems = [
    { title: "Home", href: "/" },
    { title: "Pkw Service", href: "/pkwservice" },
    { title: "Fahrzeuge", href: "/fahrzeuge" },
    { title: "Fahrzeugankauf", href: "/fahrzeugankauf" },
    { title: "Infothek", href: "/infothek" },
    { title: "Über Uns", href: "/uber-uns" },
    { title: "Kontakt", href: "/kontakt" },
    
  ];

  return (
    <header className="w-full z-40 fixed top-0 left-0 bg-background shadow-md shadow-border ">
      <div className="container mx-auto min-h-20 flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/">
          <Image
            className="dark:invert"
            src="/images/Logo.png"
            alt="Logo"
            width={150}
            height={50}
            priority
          />
        </Link>

        {/* Divider and Navigation Menu */}
        <div className="flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-6">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className={`font-medium text-md transition-all duration-200 hover:text-red-500 hover:scale-105 ${
                        pathname === item.href
                          ? "font-semibold text-red-500"
                          : ""
                      }`}
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="border-r h-6"></div>
          <Button className="hover:scale-105 transition-transform">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}

export { Header1 };

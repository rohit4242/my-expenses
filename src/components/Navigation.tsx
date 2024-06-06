"use client";
import { usePathname, useRouter } from "next/navigation";
import NavButton from "./NavButton";
import { useState } from "react";
import { useMedia } from "react-use";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
const routes = [
  {
    herf: "/",
    label: "Overview",
  },
  {
    herf: "/transactions",
    label: "Transactions",
  },
  {
    herf: "/accounts",
    label: "Accounts",
  },
  {
    herf: "/categories",
    label: "Categories",
  },
  {
    herf: "/settings",
    label: "Settings",
  },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useMedia("(max-width: 768px)", false);

  const onClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };
  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Button
            variant={"outline"}
            size={"sm"}
            className="font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition"
          >
            <Menu className=" size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"} className="px-2">
          <nav className="flex flex-col gap-y-2 pt-6">
            {routes.map((route) => (
              <Button
                key={route.herf}
                variant={route.herf === pathname ? "secondary" : "ghost"}
                onClick={() => onClick(route.herf)}
                className="w-full justify-start"
              >
                {route.label}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }
  return (
    <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
      {routes.map((route) => (
        <NavButton
          key={route.herf}
          href={route.herf}
          label={route.label}
          isActive={pathname === route.herf}
        />
      ))}
    </nav>
  );
};

export default Navigation;

import { FC } from "react";
import HeaderLogo from "@/components/HeaderLogo";
import Navigation from "./Navigation";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import WelcomeMessage from "./WelcomeMessage";
import Filters from "./Filters";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className=" bg-gradient-to-b from-teal-700 to-teal-500 px-4 py-8 lg:px-14 pb-36">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full flex items-center justify-between mb-14">
          <div className=" flex items-center lg:gap-x-16">
            <HeaderLogo />
            <Navigation />
          </div>
          <ClerkLoaded>
            <UserButton afterSignOutUrl="/" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className=" size-8 animate-spin text-slate-400" />
          </ClerkLoading>
        </div>
        <WelcomeMessage />
        <Filters />
      </div>
    </header>
  );
};

export default Header;

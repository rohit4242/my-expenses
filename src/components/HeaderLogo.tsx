import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface HeaderLogoProps {}

const HeaderLogo: FC<HeaderLogoProps> = ({}) => {
  return (
    <Link href="/">
      <div className=" items-center hidden lg:flex">
        <Image src="/logo.svg" width={28} height={28} alt="Logo" />
        <p className=" font-semibold text-white text-2xl ml-2.5">Finance</p>
      </div>
    </Link>
  );
};

export default HeaderLogo;

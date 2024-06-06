"use client";

import { useUser } from "@clerk/nextjs";
import { FC } from "react";

interface WelcomeMessageProps {}

const WelcomeMessage: FC<WelcomeMessageProps> = ({}) => {
  const { user, isLoaded } = useUser();
  return (
    <div className="space-y-2 mb-4">
      <h2 className=" text-2xl lg:text-4xl text-white font-medium ">
        Welcome Back {isLoaded ? "," : ""}
        {user?.firstName} 👋🏻
      </h2>
      <p className="text-sm lg:text-base text-teal-400">
        This is your Financial Overview Report
      </p>
    </div>
  );
};

export default WelcomeMessage;

import React from "react";
import DefaultLogoMark from "@/refresh-components/DefaultLogoMark";
import Text from "@/refresh-components/texts/Text";
import { DEFAULT_APPLICATION_NAME } from "@/lib/branding";

interface ErrorPageLayoutProps {
  children: React.ReactNode;
}

export default function ErrorPageLayout({ children }: ErrorPageLayoutProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-4">
      <div className="flex items-center gap-3">
        <DefaultLogoMark size={44} />
        <Text headingH2>{DEFAULT_APPLICATION_NAME}</Text>
      </div>
      <div className="max-w-160 w-full border bg-background-neutral-00 shadow-02 rounded-16 p-6 flex flex-col gap-4">
        {children}
      </div>
    </div>
  );
}

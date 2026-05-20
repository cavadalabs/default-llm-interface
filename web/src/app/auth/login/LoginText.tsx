"use client";

import React, { useContext } from "react";
import { SettingsContext } from "@/providers/SettingsProvider";
import Text from "@/refresh-components/texts/Text";
import {
  DEFAULT_APPLICATION_DESCRIPTION,
  DEFAULT_APPLICATION_NAME,
} from "@/lib/branding";

export default function LoginText() {
  const settings = useContext(SettingsContext);
  const applicationName =
    settings?.enterpriseSettings?.application_name || DEFAULT_APPLICATION_NAME;

  return (
    <div className="w-full flex flex-col ">
      <Text as="p" headingH2 text05>
        Welcome to {applicationName}
      </Text>
      <Text as="p" text03 mainUiMuted>
        {DEFAULT_APPLICATION_DESCRIPTION}
      </Text>
    </div>
  );
}

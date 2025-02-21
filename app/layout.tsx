import "@mantine/core/styles.css";
import React from "react";
import {
  MantineProvider,
  ColorSchemeScript,
  mantineHtmlProps,
} from "@mantine/core";
import { theme } from "../theme";
import Header from "@/components/Header/Header";
import { User } from "@/types/users";
import "@mantine/dropzone/styles.css";

import { ModeStoreProvider } from "./_lib/storeProvider";

export const metadata = {
  title: "Memory Lane",
  description: "Memories for Family and Friends !",
};

export default async function RootLayout({ children }: { children: any }) {
  // This is to fetch the current User in this scenario
  // Normally this would be data saved in session and/or in a global state
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/6`);
  const data: { user: User } = await res.json();

  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme} withCssVariables={true}>
          <ModeStoreProvider>
            <Header user={data.user} />
            {children}
          </ModeStoreProvider>
        </MantineProvider>
      </body>
    </html>
  );
}

"use client";

import { Jost, Play, Advent_Pro } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const play = Play({
  variable: "--font-k2d",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const adventPro = Advent_Pro({
  variable: "--font-advent",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jost.variable} ${play.variable} ${adventPro.variable} antialiased`}
      >
        <Provider store={store}>
          <Header />
          {children}
          <Toaster
            position="top-right"
            richColors
            closeButton
            duration={4000}
          />
        </Provider>
      </body>
    </html>
  );
}

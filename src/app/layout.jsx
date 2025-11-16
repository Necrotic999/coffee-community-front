import { Jost, K2D, Advent_Pro } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const k2d = K2D({
  variable: "--font-k2d",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
        className={`${jost.variable} ${k2d.variable} ${adventPro.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

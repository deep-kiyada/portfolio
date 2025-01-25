// import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header/Header";
import { Analytics } from "@vercel/analytics/react";

// Configure the Inter font
const inter = Inter({
  subsets: ["latin"], // Include any necessary subsets
  variable: "--font-inter", // Set a custom CSS variable
});

export const metadata = {
  title: "Deep Kiyada",
  description: "A developer, designer, and dreamer based in India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

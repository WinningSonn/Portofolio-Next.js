import { Inter } from "next/font/google";
import clsx from 'clsx';
import "./globals.css";
import FireFLiesBackground from "./components/FireFLiesBackground";
import Sound from "./components/Sound";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
 });

export const metadata = {
  title: "Portofolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, "bg-background text-foreground font-inter")}>
        {children}
        <FireFLiesBackground/>
        <Sound/>
        <div id="my-modal"/>
        </body>
    </html>
  );
}

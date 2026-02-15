import type { Metadata } from "next";
import Footer from "../components/Footer"
import { Roboto } from "next/font/google";
import "./globals.css";


const roboto = Roboto({
  subsets: ['latin'],
  variable: '--primary-font',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Beyond the Board",
  description: "UCLA DGT HUM 101 W26 Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com" rel="stylesheet"/>
      </head>
      <body className={`${roboto.variable}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}

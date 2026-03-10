import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "MDK Auto Spa - Premium Car Detailing in Nayagarh",
  description:
    "Experience premium automotive care with MDK Auto Spa. From foam washing to ceramic coating, we give your car the royal treatment it deserves. #1 Car Care in Nayagarh.",
  keywords: [
    "car detailing",
    "ceramic coating",
    "foam wash",
    "PPF installation",
    "Nayagarh",
    "MDK Auto Spa",
    "car care",
    "auto spa",
  ],
  openGraph: {
    title: "MDK Auto Spa - Premium Car Detailing",
    description:
      "Premium automotive care in Nayagarh. Foam washing, ceramic coating, PPF installation & more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${montserrat.variable} ${roboto.variable} bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-100 font-body antialiased transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}

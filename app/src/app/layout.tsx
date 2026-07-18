import type { Metadata } from "next";
import { Quicksand, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arte Con Voz | Arte y educación en escuelas públicas",
  description:
    "Fundación dedicada a acercar experiencias artísticas a escuelas públicas para que niños y niñas exploren, creen y encuentren nuevas formas de expresarse.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${quicksand.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

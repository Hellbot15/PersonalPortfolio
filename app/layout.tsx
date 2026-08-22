import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdul Ghani — AI & Data Science",
  description:
    "Portfolio of Abdul Ghani, Artificial Intelligence & Data Science student at Rizvi College of Engineering (2024–2028). Building practical software across AI/ML, backend engineering, and web systems.",
  keywords: [
    "Abdul Ghani",
    "AI",
    "Data Science",
    "Machine Learning",
    "Cybersecurity",
    "FastAPI",
    "React",
    "Nexora AI",
    "Rizvi College of Engineering",
  ],
  authors: [{ name: "Abdul Ghani" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="bg-canvas text-ivory antialiased selection:bg-amberAccent/20">
        {children}
      </body>
    </html>
  );
}

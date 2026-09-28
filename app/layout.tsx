import type { Metadata } from "next";
import { Instrument_Serif, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/layout/ThemeProvider";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const manrope = Manrope({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ajay-portfolio-seven.vercel.app"),
  title: {
    template: "%s | Ajay Singh Rawat",
    default: "Ajay Singh Rawat | Software Engineer",
  },
  description: "Full Stack Developer and Software Engineer in Pune, India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${instrumentSerif.variable} ${manrope.variable} ${jetbrainsMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Ajay Singh Rawat",
                "url": process.env.NEXT_PUBLIC_SITE_URL || "https://ajay-portfolio-seven.vercel.app",
                "jobTitle": "Software Engineer",
                "sameAs": [
                  "https://github.com/AjaySRawat07"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Ajay Singh Rawat | Portfolio",
                "url": process.env.NEXT_PUBLIC_SITE_URL || "https://ajay-portfolio-seven.vercel.app"
              }
            ])
          }}
        />
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={false}
        >
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-background focus:text-text">
            Skip to content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

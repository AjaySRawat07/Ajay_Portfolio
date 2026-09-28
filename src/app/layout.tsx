import type { Metadata } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "../../content/site";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument",
});

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: site.seo.title,
  description: site.seo.description,
  metadataBase: new URL(site.seo.url),
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    url: site.seo.url,
    siteName: site.seo.title,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: site.person.name,
      jobTitle: site.person.role,
      worksFor: {
        "@type": "Organization",
        name: site.person.company,
      },
      url: site.seo.url,
      sameAs: site.contact.socials.filter((s) => s.href).map((s) => s.href),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: site.seo.title,
      url: site.seo.url,
    },
  ];

  return (
    <html lang="en" suppressHydrationWarning className={`${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-background focus:text-foreground"
            >
              Skip to content
            </a>
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

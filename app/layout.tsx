import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { Preloader } from "@/components/preloader";
import { Cursor } from "@/components/cursor";
import { ScrollProgress } from "@/components/scroll-progress";
import { Navbar } from "@/components/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const SITE = "https://luckymove.com.au";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "LuckyMove — Australia's Premium Removal Experience",
    template: "%s · LuckyMove",
  },
  description:
    "Move Smarter. Move Safer. Move Lucky. LuckyMove is Australia's premium removalist — fully insured, white-glove moving for families, professionals and businesses.",
  keywords: [
    "removalists",
    "premium moving",
    "furniture removal Australia",
    "interstate movers",
    "office relocation",
    "LuckyMove",
  ],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: SITE,
    siteName: "LuckyMove",
    title: "LuckyMove — Australia's Premium Removal Experience",
    description:
      "Move Smarter. Move Safer. Move Lucky. Fully insured, white-glove moving across Australia.",
    images: [{ url: "/media/hero-poster.jpg", width: 1080, height: 1004 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LuckyMove — Australia's Premium Removal Experience",
    description: "Move Smarter. Move Safer. Move Lucky.",
    images: ["/media/hero-poster.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#071B36",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <Preloader />
        <SmoothScroll>
          <Cursor />
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
        </SmoothScroll>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MovingCompany",
              name: "LuckyMove",
              description:
                "Australia's premium removal experience for families, professionals and businesses.",
              areaServed: "AU",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "1000",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}

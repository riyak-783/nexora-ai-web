import PricingSection from "@/Components/Pricing/PricingComp";
export const metadata = {
  title: "Pricing | Nexora",
  description:
    "Check out Nexora's pricing plans for high-end digital products and services tailored to your needs.",

  alternates: {
    canonical: "https://nexora.in/pricing",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Pricing | Nexora",
    description:
      "Check out Nexora's pricing plans for high-end digital products and services tailored to your needs.",
    url: "https://nexora.in/pricing",
    type: "website",
    siteName: "Nexora",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Nexora",
      },
    ],
  },

  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};
export default function PricingPage() {
  return <PricingSection />;
}

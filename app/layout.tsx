import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const siteUrl = "https://subarnatamang.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Subarna Tamang \u2014 GRC & Cyber Risk Analyst",
  description:
    "London-based GRC and Cyber Risk Analyst. MSc Cybersecurity Management (Distinction). Specialising in risk assessment, ISO 27001, NIST CSF, and cloud security.",
  keywords: [
    "GRC analyst",
    "cyber risk",
    "ISO 27001",
    "NIST CSF",
    "London",
    "cybersecurity"
  ],
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    title: "Subarna Tamang \u2014 GRC & Cyber Risk Analyst",
    description:
      "London-based GRC and Cyber Risk Analyst specialising in risk assessment, ISO 27001, NIST CSF, and cloud security.",
    url: siteUrl,
    siteName: "Subarna Tamang",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Subarna Tamang \u2014 GRC & Cyber Risk Analyst"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Subarna Tamang \u2014 GRC & Cyber Risk Analyst",
    description:
      "London-based GRC and Cyber Risk Analyst. MSc Cybersecurity Management (Distinction)."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}

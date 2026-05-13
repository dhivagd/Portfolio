import type { Metadata } from "next";
import { Inter, Orbitron, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const siteUrl = "https://dhivagar.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Dhivagar Pakkirisamy | Cybersecurity & Digital Forensics",
  description:
    "Portfolio of Dhivagar Pakkirisamy — Cybersecurity & Digital Forensics Engineer. Expert in Penetration Testing, Ethical Hacking, OSINT, Digital Forensics, and Red Team Operations. B.Tech CSE (Cyber Security) @ VIT Bhopal.",
  keywords: [
    "Dhivagar Pakkirisamy",
    "Cybersecurity Portfolio",
    "Digital Forensics",
    "Penetration Testing",
    "Ethical Hacking",
    "Red Team",
    "OSINT",
    "VIT Bhopal",
    "Security Engineer",
    "CTF",
  ],
  authors: [{ name: "Dhivagar Pakkirisamy", url: siteUrl }],
  creator: "Dhivagar Pakkirisamy",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Dhivagar Pakkirisamy | Cybersecurity & Digital Forensics",
    description:
      "Cinematic cybersecurity portfolio — Penetration Testing, Digital Forensics, Red Team Operations, OSINT & CTF expertise.",
    siteName: "Dhivagar Pakkirisamy Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dhivagar Pakkirisamy — Cybersecurity Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhivagar Pakkirisamy | Cybersecurity & Digital Forensics",
    description:
      "Cinematic cybersecurity portfolio — Penetration Testing, Digital Forensics, Red Team Operations, OSINT & CTF expertise.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${orbitron.variable} ${robotoMono.variable} dark antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="bg-background text-foreground min-h-screen flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-50">
        {children}
      </body>
    </html>
  );
}

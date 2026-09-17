import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Patrick Thomas MBONJO ETIA (Thegretia) | Data & AI/ML Engineer",
    template: "%s | Thegretia",
  },
  description:
    "Portfolio of Patrick Thomas MBONJO ETIA (Thegretia) — Mid-level Data Engineer, AI & Machine Learning Engineer, and Python Software Engineer specializing in PySpark, Lakehouse architectures, PyTorch NLP/ASR, and high-concurrency systems.",
  keywords: [
    "Patrick Thomas MBONJO ETIA",
    "Thegretia",
    "thegretia",
    "Data Engineer",
    "AI Engineer",
    "Machine Learning Engineer",
    "PySpark",
    "Azure Databricks",
    "Delta Lake",
    "PyTorch",
    "FastAPI",
    "Python Developer",
  ],
  authors: [{ name: "Patrick Thomas MBONJO ETIA", url: "https://thegretia.dev" }],
  creator: "Patrick Thomas MBONJO ETIA",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thegretia.dev",
    title: "Patrick Thomas MBONJO ETIA (Thegretia) | Data & AI/ML Engineer",
    description:
      "Data Engineer & AI/ML Engineer building high-throughput data pipelines, scalable ML architectures, and robust Python software systems.",
    siteName: "Thegretia Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patrick Thomas MBONJO ETIA (Thegretia) | Data & AI/ML Engineer",
    description:
      "Data Engineer & AI/ML Engineer building high-throughput data pipelines, scalable ML architectures, and robust Python software systems.",
    creator: "@thegreatia",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className="min-h-screen bg-background font-sans antialiased text-slate-300 selection:bg-emerald-500/20 selection:text-emerald-200">
        <div className="flex min-h-screen flex-col justify-between">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

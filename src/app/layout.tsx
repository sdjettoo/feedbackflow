import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FeedbackFlow — AI-Powered Customer Feedback for Small Businesses",
  description: "FeedbackFlow uses AI to collect, analyze, and act on customer feedback. Turn insights into growth. Trusted by 500+ small businesses.",
  keywords: ["customer feedback", "AI feedback platform", "small business feedback", "NPS software"],
  openGraph: {
    title: "FeedbackFlow — AI-Powered Customer Feedback",
    description: "Turn customer feedback into growth with AI-powered insights designed for small businesses.",
    type: "website",
    url: "https://feedbackflow.ai"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

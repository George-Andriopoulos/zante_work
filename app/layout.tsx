import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const roboto = localFont({
  src: "./fonts/RobotoVF.ttf", // Path to your variable font file
  variable: "--font-roboto", // CSS variable name to use
  weight: "100 900", // Correct format: Define the available weight range
  display: "swap", // Font display strategy
  // Optional: Declare default styles if needed, but fontWeight uses the variable nature
  // style: 'normal', // Usually not needed to specify here for variable fonts
});

export const metadata: Metadata = {
  title: "ZanteWork",
  description:
    " Η λύση για δουλειά στη Ζάκυνθο είναι εδώ! Εργοδότες βρίσκουν άτομα, εργαζόμενοι τη δουλειά που τους ταιριάζει. Τοπικά & Αποτελεσματικά.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased`}>{children}</body>
    </html>
  );
}

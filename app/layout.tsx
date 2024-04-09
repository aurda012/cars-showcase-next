import { Footer, Navbar } from "@components";
import "./globals.css";

export const metadata = {
  title: "NextCars | Next Cars Showcase",
  description: "A simple showcase of cars using Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

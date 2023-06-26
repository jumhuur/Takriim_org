import Nav from "@/components/Nav";
import "./globals.scss";
import "./css/all.min.css";
import { Roboto } from "next/font/google";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/authProvider";
import { NextNProgressProps } from "nextjs-progressbar";
import { ContextProvider } from "@/context/context";
const inter = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Ixsaan | Shabakada Ururinta Tabarucaadka",
  description: "Ixsaan | Shabakada Ururinta Tabarucaadka",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <AuthProvider>
            <NextNProgressProps color="#004bd6" />
            <Nav />
            {children}
            <Footer />
          </AuthProvider>
        </ContextProvider>
      </body>
    </html>
  );
}

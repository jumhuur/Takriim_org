import Nav from "@/components/Nav";
import "./globals.scss";
import "./css/all.min.css";
import { Roboto } from "next/font/google";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/authProvider";
const inter = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Takriim | Shabakada Ururinta Tabarucaadka",
  description: "Takriim | Shabakada Ururinta Tabarucaadka",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Nav />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}

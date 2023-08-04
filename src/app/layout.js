import Nav from "@/components/Nav";
import "./globals.scss";
import "./css/all.min.css";
import { Roboto } from "next/font/google";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/authProvider";
import { ContextProvider } from "@/context/context";
const inter = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Taysiir | Shabakada Ururinta Tabarucaadka",
  description: "Taysiir | Shabakada Ururinta Tabarucaadka",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <AuthProvider>
            <Nav />
            {children}
            <Footer />
          </AuthProvider>
        </ContextProvider>
      </body>
    </html>
  );
}

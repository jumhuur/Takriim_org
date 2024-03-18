import About from "@/components/About";
import Ayad from "@/components/Ayad";
import Fqa from "@/components/Faq";
import Projects from "@/components/Peojects";
import TiroKoobyo from "@/components/TiroKoobyo";
import Welcome from "@/components/Welcome";
import Marketing from "@/components/Marketing";
import SlideCompany from "@/components/Slidecompans";
export default function Home() {
  return (
    <main>
      <Welcome />
      <TiroKoobyo />
      <Ayad />
      <Projects />
      <About />
      <Marketing />
      <Fqa />
    </main>
  );
}

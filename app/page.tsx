import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Audience from "@/components/Audience";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Audience />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

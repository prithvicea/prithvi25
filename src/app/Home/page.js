import Image from 'next/image';
import RandomBackground from "../components/Random";
import Navbar from "../components/Navbar";
import About from '../components/About';
import Sponsers from '../components/Sponsers';
import Workshops from '../components/Workshops';
import Lecture from '../components/Lecture';
import Footer from '../components/Footer';




export default function Home() {
  return (
    <>
      <div className="container"></div>

      <div
        className="bg-cover bg-center bg-no-repeat h-[100vh] w-full"
        style={{
          backgroundImage: "url('./noisy-background.svg')",
          fontFamily: "Itim, serif",
        }}
      >
        <Navbar />
        <RandomBackground />
        <About />
        <Sponsers />
        <Workshops />
        <Lecture />
    
        

        
      </div>
    </>
  );
}

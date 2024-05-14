import About from "./components/about";
import About2 from "./components/about2";
import Citation from "./components/citation";
import Contact from "./components/contact";
import Credits from "./components/credits";
import Footer from "./components/footer";
import Operation from "./components/operation";
import Slider from "./components/slider";

export default function Home() {
  return (
    <>
      <Slider />
      <About />
      <About2 />
      <Operation />
      <Contact />
      <Citation />
      <Footer />
      <Credits />
    </>
  );
}

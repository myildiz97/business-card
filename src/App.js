import "./styles.css";
import Image from "./Image";
import Info from "./Info";
import Buttons from "./Buttons";
import About from "./About";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Image />
      <Info />
      <Buttons />
      <About />
      <Footer />
    </div>
  );
}

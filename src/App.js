import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="relative flex justify-center items-center bg-black  h-[100vh] text-white ">
      <img
        src="assests/spread.png"
        className="absolute left-0 h-full "
        alt="spread"
      />
      <Hero />
      <NavBar />
      <Footer />
    </div>
  );
}

export default App;

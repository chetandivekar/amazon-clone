import "./App.css";
import Home from "./components/Home/Home";
import Carousel from "./components/carousel/Carousel";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Todays from "./components/todaysDeals/Todays";

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Todays />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

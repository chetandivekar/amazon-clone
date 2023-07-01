import "./App.css";
import Carousel from "./components/carousel/Carousel";
import Navbar from "./components/navbar/Navbar";
import Todays from "./components/todaysDeals/Todays";

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Todays />
    </div>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import "./App.css";
import Cards from "./components/cards/Cards";
import data from "./helper/data";
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Cards dataa={data} />
    </div>
  );
}

export default App;

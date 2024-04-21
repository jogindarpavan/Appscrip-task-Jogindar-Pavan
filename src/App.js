import LogoComponent from "./components/LogoComponent";
import FiltersComponent from "./components/FiltersComponent";
import TitleComponent from "./components/TitleComponent";
import FooterComponent from './components/FooterComponent';
import "./App.css";

function App() {
  return (
    <header className="App">
      <LogoComponent />
      <TitleComponent />
      <FiltersComponent />
      <FooterComponent/>
    </header>
  );
}

export default App;
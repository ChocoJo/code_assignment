import "bootstrap/dist/css/bootstrap.min.css";
import { Navigation } from "./components/navigation/Navigation";
import './utils/css/Global.css';
import { HomeView } from "./views/HomeView";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <HomeView/>
    </div>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "./components/card/Card";
import { Navigation } from "./components/navigation/Navigation";
import './utils/css/Global.css';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Card/>
    </div>
  );
}

export default App;

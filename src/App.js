import "./App.scss";
import Header from "./Header";
import "./Reset.scss";
import Second from "./Second";
import Companies from "./Companies";
import Motion, { MyComponent } from "./MyComponent";
function App() {
  return (
    <div className="App">
      <Header />
      <Second />
      <Companies />
    </div>
  );
}

export default App;

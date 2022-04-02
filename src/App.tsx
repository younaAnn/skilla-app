import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultLayoutComponent } from "./components/DefaultLayoutComponent/DefaultLayoutComponent";
import { CallsPage } from "./pages/CallsPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <DefaultLayoutComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;

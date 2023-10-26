import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import NavHeader from "./components/NavHeader";

function App() {
  return (
    <div>
      <NavHeader />
      <Outlet></Outlet>
    </div>
  );
}

export default App;

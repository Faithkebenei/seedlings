import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import pageUrl from "./routes/pageUrl";
import { Home } from "./pages/pages";

const RouteManager = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path={pageUrl.HOMEPAGE} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <RouteManager />
    </div>
  );
};

export default App;

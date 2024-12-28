import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import { IStaticMethods } from "flyonui/flyonui";
import { routes } from "./routes";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

function App() {
  useEffect(() => {
    const loadFlyonui = async () => {
      await import("flyonui/flyonui");
      window.HSStaticMethods.autoInit();
    };
    loadFlyonui();
  }, []);
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <>
                <HeaderComponent />
                <div className="container mx-auto max-w-screen-2xl p-4 sm:px-8 flex-1">
                  <route.page />
                </div>
                <FooterComponent />
              </>
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;

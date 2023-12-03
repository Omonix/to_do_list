import "./App.css";
import Main from "./component/main/Main.js";
import Footer from "./component/footer/Footer.js";
import logoDark from "./img/logoDark.png";
import logoLight from "./img/logoLight.png";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div className="header">
          <div>
            <img
              src={theme === "dark" ? logoDark : logoLight}
              alt={theme === "light" ? "Light logo" : "Dark logo"}
            />
          </div>
          <div>
            <input
              className="add"
              type="search"
              placeholder="Créer une nouvelle tâche"
            />
          </div>
          <div>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          </div>
        </div>
        <Main />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;

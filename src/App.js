import "./App.css";
import Main from "./component/main/Main.js";
import Footer from "./component/footer/Footer.js";
import Header from "./component/header/Header.js";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

const App = () => {
  const [data, setData] = useState([]);
  const [handle, setHandle] = useState(true);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const changeHandle = () => {
    setHandle(!handle);
  };
  useEffect(() => {
    if (localStorage && localStorage.tester) {
      setData(JSON.parse(localStorage.tester));
    }
  }, [handle]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Header
          option={data}
          themer={toggleTheme}
          theme={theme}
          handleArr={changeHandle}
        />
        <Main option={data} handleArr={changeHandle} />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;

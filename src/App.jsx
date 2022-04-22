import ToggleTheme from "./components/layout/ToggleTheme";
import useLocalStorage from "use-local-storage";

import Navbar from "./components/layout/Navbar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Men from "./components/pages/Men";

import "./App.css";
import Collections from "./components/pages/Collections";
import Women from "./components/pages/Women";
import About from "./components/pages/About";
import Product from "./components/Product/Product";
import ProductExpost from "./components/Product/ProductsExpost";
import ErrorPage from "./components/pages/ErrorPage";
import Footer from "./components/layout/Footer";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  
  const scroll = `html::-webkit-scrollbar, body::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background: ${theme === 'dark' ? 'var(--text-primary)' : 'var(--text-secondary)'};
  }`


  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    if(theme) {
      return <style>{scroll}</style>
    }
  };

  return (
    <Router>
      <ToggleTheme setTheme={setTheme} theme={theme}>
      <style>{scroll}</style>
        <div className="App">
          <Navbar switchTheme={switchTheme} theme={theme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="collections" element={<Collections />} />
            <Route path="about" element={<About />} />
            <Route path="product/:productId" element={<Product />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="men" element={<Men />} />
            <Route path="women" element={<Women />} />
          </Routes>
          <Footer/>
        </div>
      </ToggleTheme>
    </Router>
  );
}

export default App;

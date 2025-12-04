import React, { useContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import News from "./pages/News";
import { ThemeContext } from "./context/ThemeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [articles, setArticles] = useState([]);
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <News
              country={"az"}
              category={"education"}
              language={"az"}
              articles={articles}
              setArticles={setArticles}
            />
          }
        />{" "}
        <Route
          path="/business"
          element={
            <News
              country={"az"}
              category={"business"}
              language={"az"}
              articles={articles}
              setArticles={setArticles}
            />
          }
        />{" "}
        <Route
          path="/science"
          element={
            <News
              country={"az"}
              category={"science"}
              language={"az"}
              articles={articles}
              setArticles={setArticles}
            />
          }
        />{" "}
        <Route
          path="/technology"
          element={
            <News
              country={"az"}
              category={"technology"}
              language={"az"}
              articles={articles}
              setArticles={setArticles}
            />
          }
        />{" "}
        <Route
          path="/sports"
          element={
            <News
              country={"az"}
              category={"sports"}
              language={"az"}
              articles={articles}
              setArticles={setArticles}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

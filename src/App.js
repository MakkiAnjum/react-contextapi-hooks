import React from "react";
import Navbar from "./components/Navbar";
import Booklist from "./components/Booklist";
import ThemeContextProvider from "./context/themeContext";
import ThemeToggle from "./components/themeToggle";
import AuthContextProvider from "./context/AuthContext";
import BookContextProvider from "./context/BookContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />

          <BookContextProvider>
            <Booklist />
          </BookContextProvider>

          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;

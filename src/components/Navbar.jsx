import React, { Component } from "react";
import { ThemeContext } from "../context/themeContext";
import { AuthContext } from "../context/AuthContext";

class Navbar extends Component {
  render() {
    return (
      <>
        <AuthContext.Consumer>
          {auhtContext => (
            <ThemeContext.Consumer>
              {themecontext => {
                const { isAuthenticated, toggleAuth } = auhtContext;
                const { isLightTheme, light, dark } = themecontext;
                const theme = isLightTheme ? light : dark;

                return (
                  <nav style={{ background: theme.ui, color: theme.syntax }}>
                    <h1>Context App</h1>
                    <div onClick={toggleAuth}>
                      {isAuthenticated ? "Logged In" : "Logged Out"}
                    </div>
                    <ul>
                      <li>Home</li>
                      <li>About</li>
                      <li>Contact</li>
                    </ul>
                  </nav>
                );
              }}
            </ThemeContext.Consumer>
          )}
        </AuthContext.Consumer>
      </>
    );
  }
}

export default Navbar;

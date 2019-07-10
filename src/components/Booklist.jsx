import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import { BookContext } from "../context/BookContext";

const Booklist = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;

  return (
    <>
      <div
        className="book-list"
        style={{ color: theme.syntax, background: theme.bg }}
      >
        <ul>
          {books.map(book => (
            <li key={book.id} style={{ background: theme.ui }}>
              {book.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Booklist;

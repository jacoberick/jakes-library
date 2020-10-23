import React, { useCallback } from "react";
import { Link, useHistory } from "react-router-dom";

const Library = ({ books, selectBook }) => {
  const history = useHistory();
  const chooseBook = (book) => {
    selectBook(book);
    history.push(`/library/${book.id}`);
  };

  return (
    <div id="libraryContainer">
      <div id="libraryInner">
        {books.map((b) => (
          <div className="book-container" key={b.id} onClick={() => chooseBook(b)}>
            <img className="book-cover" src={require(`../assets/${b.cover}`)} alt={b.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;

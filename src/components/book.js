import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

const Book = ({ book, queryBook, match }) => {
  useEffect(() => {
    if (!book) {
      queryBook(match.params.id);
    }
  });
  return (
    <div className="detail-container">
      <div className="left-detail">
        {book && (
          <img
            className="detail-book-cover"
            src={require(`../assets/${book.cover}`)}
            alt={book.alt}
          />
        )}
      </div>
      <div className="right-detail">
        {book && (
          <div className="right-detail-inner">
            <div className="detail--top">
              <div className="title-author-container">
                <h1>{book.title}</h1>
                <h2>{book.author}</h2>
              </div>
              <div className="author-portrait-container">
                <img
                  src={require(`../assets/${book.authorPortrait}`)}
                  alt={book.portraitAlt}
                />
              </div>
            </div>
            <div className="detail--bottom">
              <p>{book.descrip}</p>
              <p>{book.authorInfo}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default withRouter(Book);

import React from "react";

const Library = () => {
  const books = [
    {
      title: "Anthem",
      author: "Ayn Rand",
      cover: "anthem.jpg",
      alt: "Anthem Book Cover",
    },
    {
      title: "1984",
      author: "George Orwell",
      cover: "1984.jpg",
      alt: "1984 Book Cover",
    },
    {
      title: "The Gulag Archipelago",
      author: "Aleksandr Solzhenitsyn",
      cover: "gulag.jpg",
      alt: "The Gulag Archipelago Book Cover",
    },
    {
      title: "Harry Potter and The Sorcerer's Stone",
      author: "J.K. Rowling",
      cover: "hp.jpg",
      alt: "hp alt",
    },
  ];

  return (
    <div id="libraryContainer">
      <div id="libraryInner">
        {books.map((b, id) => (
          <div key={id} className="book-container">
            <img
              className="book-cover"
              src={require(`../assets/${b.cover}`)}
              alt={b.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;

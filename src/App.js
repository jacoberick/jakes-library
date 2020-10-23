import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Gateway from "./components/gateway.js";
import Nav from "./components/nav.js";
import Library from "./components/library.js";
import Book from "./components/book.js";

function App() {
  const [book, selectBook] = useState({});
  const books = [
    {
      id: 1,
      title: "Anthem",
      author: "Ayn Rand",
      cover: "anthem.jpg",
      alt: "Anthem Book Cover",
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      cover: "1984.jpg",
      alt: "1984 Book Cover",
    },
    {
      id: 3,
      title: "The Gulag Archipelago",
      author: "Aleksandr Solzhenitsyn",
      cover: "gulag.jpg",
      alt: "The Gulag Archipelago Book Cover",
    },
    {
      id: 4,
      title: "Fahrenheit 451",
      author: "Ray Bradbury",
      cover: "451.jpg",
      alt: "Fahrenheit 451 Book Cover",
    },
    {
      id: 5,
      title: "The Giver",
      author: "Louis Lowry",
      cover: "giver.jpg",
      alt: "The Giver Book Cover",
    },
  ];

  return (
    <Router>
      <div id="masterContainer">
        <Switch>
          <Route exact path="/">
            <Gateway />
          </Route>
          <Route path="/library/:id">
            <Nav />
            <Book book={book} />
          </Route>
          <Route path="/library">
            <Nav />
            <Library books={books} selectBook={selectBook} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

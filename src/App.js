import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./App.css";

import Gateway from "./components/gateway.js";
import ExitButton from "./components/exitButton.js";
import Library from "./components/library.js";
import Book from "./components/book.js";

function App() {
  //BOOK STATE MANAGMENT
  const [book, selectBook] = useState(null);
  const books = [
    {
      id: 1,
      title: "Anthem",
      author: "Ayn Rand",
      cover: "anthem.jpg",
      authorPortrait: "aynRand.jpg",
      portraitAlt: "Portrait of Ayn Rand",
      alt: "Anthem Book Cover",
      descrip:
        "Anthem is a dystopian fiction novella by Russian-American writer Ayn Rand, written in 1937 and first published in 1938 in the United Kingdom. The story takes place at an unspecified future date when mankind has entered another Dark Age.",
      authorInfo:
        "Ayn Rand was a Russian-American writer and philosopher. She is known for her two best-selling novels, The Fountainhead and Atlas Shrugged, and for developing a philosophical system she named Objectivism. Born and educated in Russia, she moved to the United States in 1926.",
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      cover: "1984.jpg",
      authorPortrait: "georgeOrwell.jpg",
      portraitAlt: "Portrait of George Orwell",
      alt: "1984 Book Cover",
      descrip:
        "Nineteen Eighty-Four: A Novel, often published as 1984, is a dystopian social science fiction novel by English novelist George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwell's ninth and final book completed in his lifetime.",
      authorInfo:
        "Eric Arthur Blair, known by his pen name George Orwell, was an English novelist, essayist, journalist and critic. His work is characterised by lucid prose, biting social criticism, opposition to totalitarianism, and outspoken support of democratic socialism.",
    },
    {
      id: 3,
      title: "The Gulag Archipelago",
      author: "Aleksandr Solzhenitsyn",
      cover: "gulag.jpg",
      authorPortrait: "aleks.jpg",
      portraitAlt: "Portrait of Aleksandr Solzhenitsyn",
      alt: "The Gulag Archipelago Book Cover",
      descrip:
        "The Gulag Archipelago: An Experiment in Literary Investigation is a three-volume non-fiction text written between 1958 and 1968 by Russian writer and historian Aleksandr Solzhenitsyn. It was first published in 1973, and translated into English, and French, the following year.",
      authorInfo:
        "Aleksandr Isayevich Solzhenitsyn was a Russian novelist, philosopher, historian, short story writer and political prisoner. Solzhenitsyn was an outspoken critic of the Soviet Union and Communism and helped to raise global awareness of the Soviet Gulag forced-labor camp system.",
    },
    {
      id: 4,
      title: "Fahrenheit 451",
      author: "Ray Bradbury",
      cover: "451.jpg",
      authorPortrait: "ray.jpg",
      portraitAlt: "Portrait of Ray Bradbury",
      alt: "Fahrenheit 451 Book Cover",
      descrip:
        "Fahrenheit 451 is a dystopian novel by American writer Ray Bradbury, first published in 1953. Often regarded as one of his best works, the novel presents a future American society where books are outlawed and 'firemen' burn any that are found.",
      authorInfo:
        "Ray Douglas Bradbury was an American author and screenwriter. One of the most celebrated 20th- and 21st-century American writers, he worked in a variety of genres including fantasy, science fiction, horror, and mystery fiction.",
    },
    {
      id: 5,
      title: "The Giver",
      author: "Lois Lowry",
      cover: "giver.jpg",
      authorPortrait: "lois.jpg",
      portraitAlt: "Portrait of Lois Lowry",
      alt: "The Giver Book Cover",
      descrip:
        "The Giver is a 1993 American young adult dystopian novel by Lois Lowry. It is set in a society which at first appears to be utopian but is revealed to be dystopian as the story progresses. The novel follows a 12-year-old boy named Jonas.",
      authorInfo:
        "Lois Lowry is an American writer. She is the author of several books for children and young adults, including The Giver Quartet and Number the Stars. She is known for writing about difficult subject matters and complex themes in works for young audiences.",
    },
    {
      id: 6,
      title: "The Giving Tree",
      author: "Shel Silverstein",
      cover: "givingTree.jpg",
      authorPortrait: "shel.jpg",
      portraitAlt: "Portrait of Shel Silverstein",
      alt: "The Giving Tree Book Cover",
      descrip:
        "The Giving Tree is an American children's picture book written and illustrated by Shel Silverstein. First published in 1964 by Harper & Row, it has become one of Silverstein's best-known titles, and has been translated into numerous languages.",
      authorInfo:
        "Sheldon Allan Silverstein was an American writer known for his cartoons, songs, and children's books. He styled himself as Uncle Shelby in some works. His books have been translated into more than 30 languages and have sold more than 20 million copies.",
    },
    {
      id: 7,
      title: "12 Rules For Life",
      author: "Jordan B. Peterson",
      cover: "12.jpg",
      authorPortrait: "jordan.jpg",
      portraitAlt: "Portrait of Jordan Peterson",
      alt: "12 Rules For Life Book Cover",
      authorInfo:
        "Jordan Bernt Peterson is a Canadian clinical psychologist and a professor of psychology at the University of Toronto. He began to receive widespread attention in the late 2010s for his views on cultural and political issues.",
      descrip:
        "12 Rules for Life: An Antidote to Chaos is a 2018 self-help book by Canadian clinical psychologist and psychology professor Jordan Peterson. It provides life advice through essays in abstract ethical principles, psychology, mythology, religion, and personal anecdotes.",
    },
    {
      id: 8,
      title: "Lord of the Flies",
      author: "William Golding",
      cover: "lord.jpg",
      authorPortrait: "will.jpg",
      portraitAlt: "Portrait of William Golding",
      alt: "Lord of the Flies Book Cover",
      descrip:
        "Lord of the Flies is a 1954 novel by Nobel Prize-winning British author William Golding. The book focuses on a group of British boys stranded on an uninhabited island and their disastrous attempt to govern themselves.",
      authorInfo:
        "Sir William Gerald Golding, CBE FRSL was a British novelist, playwright, and poet. Best known for his debut novel Lord of the Flies, he would go on to publish another twelve volumes of fiction in his lifetime.",
    },
  ];

  const queryBook = (id) => {
    let foundBook = books.find((b) => b.id === +id);
    selectBook(foundBook);
  };

  return (
    <Router>
      <div id="masterContainer">
        {/* GATEWAY ROUTE*/}
        <Route exact path="/">
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={500}
              classNames="page-transition"
              unmountOnExit
            >
              <div className="page-transition">
                <Gateway />
              </div>
            </CSSTransition>
          )}
        </Route>

        {/* BOOK ROUTE*/}
        <Route path="/library/:id">
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={500}
              classNames="book-transition"
              unmountOnExit
            >
              <div className="book-transition">
                <ExitButton text="Back to library" path="library" />
                <Book book={book} queryBook={queryBook} />
              </div>
            </CSSTransition>
          )}
        </Route>

        {/* LIBRARY ROUTE*/}
        <Route exact path="/library">
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={500}
              classNames="page-transition"
              unmountOnExit
            >
              <div className="page-transition">
                <ExitButton text="Leave the library" path="" />
                <Library books={books} selectBook={selectBook}></Library>
              </div>
            </CSSTransition>
          )}
        </Route>
      </div>
    </Router>
  );
}

export default App;

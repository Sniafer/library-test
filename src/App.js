import { useState, useEffect } from "react";
import writersApi from "./services/writers";
import booksApi from "./services/books";
import Writers from "./components/Writers";
import Books from "./components/Books";
import Nationality from "./components/Nationality";
import "./App.css";

function App() {
  //Data for all writers and books
  const [allWriters, setAllWriters] = useState([]);
  const [allBooks, setAllBooks] = useState([]);
  //Data for currently displayed writers and books
  const [displayedWriters, setDisplayedWriters] = useState([]);
  const [displayedBooks, setDisplayedBooks] = useState([]);
  //Data for currently selected writer
  const [currentWriter, setCurrentWritter] = useState(null);

  //Get data from api
  useEffect(() => {
    writersApi.getAll().then((writers) => {
      setAllWriters(writers);
      setDisplayedWriters(writers);
    });
    booksApi.getAll().then((books) => {
      setAllBooks(books);
      setDisplayedBooks(books);
    });
  }, []);

  return (
    <div>
      <Nationality
        allWriters={allWriters}
        allBooks={allBooks}
        setDisplayedWriters={setDisplayedWriters}
        setDisplayedBooks={setDisplayedBooks}
        setCurrentWritter={setCurrentWritter}
      />
      <Writers
        allBooks={allBooks}
        allWriters={allWriters}
        displayedWriters={displayedWriters}
        setCurrentWritter={setCurrentWritter}
      />
      <Books
        allWriters={allWriters}
        displayedBooks={displayedBooks}
        currentWriter={currentWriter}
        setCurrentWritter={setCurrentWritter}
      />
    </div>
  );
}

export default App;

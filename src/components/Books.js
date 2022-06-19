import { useState } from "react";
import Filter from "./Filter";

const Books = ({
  allWriters,
  displayedBooks,
  currentWriter,
  setCurrentWritter,
}) => {
  const [filter, setFilter] = useState("");

  //Search for book title from displayed books
  const filtered = currentWriter
    ? //If current writer exists search only for books made by this author
      displayedBooks.filter(
        (book) =>
          book.author_id === currentWriter.id &&
          book.title.toUpperCase().includes(filter.toUpperCase())
      )
    : //if current writer does not exists search for books from selected nationality
      displayedBooks.filter((book) =>
        book.title.toUpperCase().includes(filter.toUpperCase())
      );
  return (
    <div>
      <h2>Books</h2>
      {currentWriter && (
        <p>
          Displaying books of {currentWriter.first_name}{" "}
          {currentWriter.last_name}. To show books from all authors from
          selected nationality{" "}
          <button onClick={() => setCurrentWritter(null)}>click here</button>
        </p>
      )}
      <Filter filter={filter} setFilter={setFilter} />
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Year of publication</th>
          </tr>
          {filtered.map((book) => {
            const writer = allWriters.filter(
              (writer) => writer.id === book.author_id
            )[0];
            return (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>
                  {writer.first_name} {writer.last_name}
                </td>
                <td>{book.year}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Books;

import { useState } from "react";
import Filter from "./Filter";

const Writers = ({
  allBooks,
  allWriters,
  displayedWriters,
  setCurrentWritter,
}) => {
  const [filter, setFilter] = useState("");

  //Resets search input for writers and sets current writer state
  const handleCurrentAuthor = (id) => {
    setFilter("");
    setCurrentWritter(allWriters.find((writer) => writer.id === id));
  };

  //Search for first and last name from displayed writers
  const filtered = displayedWriters.filter(
    (writer) =>
      writer.first_name.toUpperCase().includes(filter.toUpperCase()) ||
      writer.last_name.toUpperCase().includes(filter.toUpperCase())
  );

  return (
    <div>
      <h2>Writers</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Nationality</th>
            <th>Books count</th>
          </tr>
          {filtered.map((writer) => (
            <tr key={writer.id}>
              <td>{writer.id}</td>
              <td>
                {writer.first_name} {writer.last_name}
              </td>
              <td>{writer.nationality}</td>
              <td
                className="count"
                onClick={() => handleCurrentAuthor(writer.id)}
              >
                {allBooks.filter((book) => book.author_id === writer.id).length}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Writers;

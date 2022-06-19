const Nationality = ({
  allWriters,
  allBooks,
  setDisplayedWriters,
  setDisplayedBooks,
  setCurrentWritter,
}) => {
  //Gets all nationalities
  const allNationalities = allWriters.map((writer) => writer.nationality);

  //Removes duplicates
  const uniqueNationality = [...new Set(allNationalities)];

  //Filter displayed content based on the selection
  const handleSelect = (e) => {
    //If "All" option is selected set books and writers to all and return
    if (e.target.value === "All") {
      setDisplayedBooks(allBooks);
      setDisplayedWriters(allWriters);
      //Resets current writter state
      setCurrentWritter(null);
      return;
    }
    //Find writes with selected nationality
    const filterWritersNationality = allWriters.filter(
      (writer) => writer.nationality === e.target.value
    );
    const writersId = filterWritersNationality.map((writer) => writer.id);
    //filter books to match the writers nationality
    const filterBooksNationality = allBooks.filter((book) =>
      writersId.includes(book.author_id)
    );
    setDisplayedWriters(filterWritersNationality);
    setDisplayedBooks(filterBooksNationality);
    //Resets current writter state
    setCurrentWritter(null);
  };
  return (
    <div>
      <h3>Nationality</h3>
      <select onChange={handleSelect}>
        <option value="All">All</option>
        {uniqueNationality.map((nationality) => (
          <option key={nationality} value={nationality}>
            {nationality}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Nationality;

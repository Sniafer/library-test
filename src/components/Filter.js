const Filter = ({ filter, setFilter }) => {
  return (
    <div>
      Search:
      <input
        value={filter}
        onChange={({ target }) => setFilter(target.value)}
      />
    </div>
  );
};

export default Filter;

export const SortAndFilterButtons = ({ handleSort }) => {
  return (
    <div className="sortButtons">
      {/*
          Create 4 sorting buttons here to sort by following criteria:
          sort title in Ascending order  class: sortByTitleAsc
          sort title in Descending order class: sortByTitleDesc
          sort price asending order      class: sortByPriceAsc
          sort price descending order    class: sortByPriceDesc
          on every button click, call the reusable sorting function
          you received from Parent component, 
          and sort the data.
        */}

      <button
        className="sortByTitleAsc"
        onClick={() => {
          handleSort("City", 1);
        }}
      >
        City Asc{" "}
      </button>
      <button
        className="sortByTitleDesc"
        onClick={() => {
          handleSort("City", -1);
        }}
      >
        City Desc
      </button>
      <button
        className="sortByPriceAsc"
        onClick={() => {
          handleSort("Rating", 1);
        }}
      >
        Rating asc
      </button>
      <button
        className="sortByPriceDesc"
        onClick={() => {
          handleSort("Rating", -1);
        }}
      >
        Rating desc
      </button>
      <button
        className="sortByPriceAsc"
        onClick={() => {
          handleSort("Cost_per_day", 1);
        }}
      >
        Cost asc
      </button>
      <button
        className="sortByPriceDesc"
        onClick={() => {
          handleSort("Cost_per_day", -1);
        }}
      >
        Cost desc
      </button>
    </div>
  );
};

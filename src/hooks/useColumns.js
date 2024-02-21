export const useColumns = () => {
  const dataColumns = []; // change `[]` to store of columns to get data of columns
  const functGetColumns = (start, limit) => {
    // import action from redux or zustand or something like that
    // to get data of columns with param start - limit
    // after getted columns will be merge with current columns and `dataColumns` will be renew
  };

  return {
    dataColumns,
    functGetColumns,
  }
}
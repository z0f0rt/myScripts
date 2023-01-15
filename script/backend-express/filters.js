export const filterLowerPrice = (req, item) => {
  let minPrice = req.query.min;
  if (!minPrice) {
    return true;
  }
  return item.price >= +minPrice;
};

export const filterUpperPrice = (req, item) => {
  let maxPrice = req.query.max;
  if (!maxPrice) {
    return true;
  }
  return item.price <= +maxPrice;
};

export const valueSorted = (req, array) => {
  if (req.query.value === "alphabeticaly") {
    let valueSorted = array.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    return valueSorted;
  }
  if (req.query.value === "ascending") {
    let valueSorted = array.sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    );
    return valueSorted;
  }
  if (req.query.value === "descending") {
    let valueSorted = array.sort(
      (a, b) => parseFloat(b.price) - parseFloat(a.price)
    );
    return valueSorted;
  }
  return array;
};

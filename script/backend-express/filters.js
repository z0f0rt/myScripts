export const filterLowerPrice = (req, item) => {
  let minPrice = req.query.first;
  if (!minPrice) {
    return true;
  }
  return item.price >= +minPrice;
};

export const filterUpperPrice = (req, item) => {
  let maxPrice = req.query.second;
  if (!maxPrice) {
    return true;
  }
  return item.price <= +maxPrice;
};

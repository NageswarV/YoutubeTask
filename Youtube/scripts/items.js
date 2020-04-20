var items, nextPage, prevPage;
function updateResultSet(results) {
  nextPage = results.nextPageToken;
  prevPage = results.prevPageToken;
  items = results.items;
}
function getItemsCount() {
  return items ? items.length : 0;
}
function getItems() {
  return items;
}

var items, nextPage, prevPage;
function updateResultSet(results) {
    nextPage = results.nextPageToken;
    prevPage = results.prevPageToken;
    items = results.items;
}
function getItemsCount() {
    if(items){
    return items.length;}
    else{
        return undefined;
    }
}
function getItems(){
    return items;
}
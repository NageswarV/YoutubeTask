var items, nextPage, prevPage;
function populate(index) {
    if (!index) { index = 0; }
    let imgContainer = 0;
    var video = document.querySelectorAll('.thumbnails');
    for (let i = index; i < index + capacity && i < items.length; i++) {

        video[imgContainer].querySelector(".video").setAttribute("src", items[i].snippet.thumbnails.high.url);
        video[imgContainer].querySelector(".title").innerHTML = items[i].snippet.title;
        video[imgContainer++].querySelector(".publisher").innerHTML = items[i].snippet.channelTitle;
    }
}

function updateResultSet(results) {
    nextPage = results.nextPageToken;
    prevPage = results.prevPageToken;
    items = results.items;
}
function getItemsCount() {
    return items.length;
}
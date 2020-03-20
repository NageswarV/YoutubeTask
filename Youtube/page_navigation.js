var currentPage = 0, items_count, pageCount = 1;
let moveToNext = function moveToNext() {
    items_count = getItemsCount();
    currentPage++;

    if (currentPage < Math.floor(items_count / capacity)) {
        pageCount++;
        let index = currentPage * capacity;
        console.log(index);
        populate(index);
    } else {
        currentPage = -1;
        getPage(nextPage, moveToNext);

    }
    document.querySelector('#pageCount').innerHTML = pageCount;
}

let moveToPrev = function moveToPrev() {
    items_count = getItemsCount();
    if (currentPage > 0) {
        pageCount--;
        let index = (currentPage - 1) * capacity;
        console.log(index);
        populate(index);
        currentPage--;
    }
    else if (prevPage) {
        currentPage = Math.floor(items_count / capacity);
        getPage(prevPage, moveToPrev);
    }
    document.querySelector('#pageCount').innerHTML = pageCount;
}
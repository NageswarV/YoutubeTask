var currentPage = 0, items_count, pageCount = 1;
let moveToNext = function moveToNext() {
    items_count = getItemsCount();
    currentPage++;
    if (currentPage < Math.floor(items_count / capacity)) {
        pageCount++;
        let index = currentPage * capacity;
        populate(index);
        document.querySelector('#pageCount').innerHTML = pageCount;
    } else {
        currentPage = -1;

        getPage(nextPage, moveToNext);

    }
}

let moveToPrev = function moveToPrev() {
    if (currentPage > 0) {
        pageCount--;
        let index = (currentPage - 1) * capacity;
        populate(index);
        currentPage--;
        document.querySelector('#pageCount').innerHTML = pageCount;
    }
    else if (prevPage) {
        getPage(prevPage, moveToPrev);
         items_count = getItemsCount();
         currentPage = Math.floor(items_count / capacity);
    }
    
}
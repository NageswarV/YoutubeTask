var currentPage = 0, items_count;
function moveToNext() {
    items_count = getItemsCount();
    currentPage++;
    if (currentPage < Math.floor(items_count / capacity)) {

        let index = currentPage * capacity;
        populate(index);
    } else {
        getPage(nextPage);
        currentPage = -1;
        if (items_count >= 15) {
            moveToNext();
        }

    }

}

function moveToPrev() {
    items_count = getItemsCount();
    if (currentPage > 0) {
        let index = (currentPage - 1) * capacity;
        populate(index);
        currentPage--;
    }
    else if (prevPage) {
        getPage(prevPage);
        currentPage = Math.floor(items_count / capacity);
        if (items_count >= 15) {
            moveToPrev();
        }
    }

}
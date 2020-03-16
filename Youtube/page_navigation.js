var nextPageButtonCount = 0;
function moveToNext() {
    if (currentPage < Math.floor(items.length / capacity) - 1) {
        currentPage++;
        let index = currentPage * capacity;
        populate(index);
        nextPageButtonCount++;
    } else {
        getPage(nextPage);
        currentPage = -1;
        moveToNext();

    }

}

function moveToPrev() {
    if (currentPage > 0) {

        let index = (currentPage - 1) * capacity;
        populate(index);
        currentPage--;
        nextPageButtonCount--;
    }
    else if (nextPageButtonCount > 1) {
        getPage(prevPage);
        currentPage = Math.floor(items.length / capacity) - 1;
        moveToPrev();
    }

}

function getPage(pageTokenValue) {
    let url;
    let searchValue = document.querySelector('#searchbox').value;
    if (pageTokenValue) {
        url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBaUKAbaPsKxaZ8RAgrks4WdoR4Fv3bMQo&type=video&part=snippet&maxResults=15&q=${searchValue}&pageToken=${pageTokenValue}`
    }
    else {
        url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBaUKAbaPsKxaZ8RAgrks4WdoR4Fv3bMQo&type=video&part=snippet&maxResults=15&q=${searchValue}`
    }
    fetch(url).then(function (response) {
        return response.json();
    })
        .then(function (results) {
            if (!pageTokenValue) {
                updateResultSet(results);
                createThumbnails();
            }
            else {
                updateResultSet(results);
            }
        });
}

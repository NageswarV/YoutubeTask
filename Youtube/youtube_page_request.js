
function getPage(pageTokenValue) {
    let url;
    let searchValue = document.querySelector('#searchbox').value;
    if (pageTokenValue) {
        url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyD0aqzWTTE7En24KSnEMAyv6Xd3N2ZNN3M&type=video&part=snippet&maxResults=15&q=${searchValue}&pageToken=${pageTokenValue}`
    }
    else {
        url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyD0aqzWTTE7En24KSnEMAyv6Xd3N2ZNN3M&type=video&part=snippet&maxResults=15&q=${searchValue}`
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

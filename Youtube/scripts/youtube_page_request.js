
function getPage(pageTokenValue, callBack) {
    let url;
    let searchValue = document.querySelector('#searchbox').value;
    if (pageTokenValue && typeof(pageTokenValue)==='string') {

        url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBaUKAbaPsKxaZ8RAgrks4WdoR4Fv3bMQo&type=video&part=snippet&maxResults=16&q=${searchValue}&pageToken=${pageTokenValue}`
    }
    else {
        url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBaUKAbaPsKxaZ8RAgrks4WdoR4Fv3bMQo&type=video&part=snippet&maxResults=16&q=${searchValue}`
    }
    fetch(url).then(function (response) {
        
        return response.json();
    })
        .then(function (results) {
            updateResultSet(results);
            (!pageTokenValue || typeof(pageTokenValue)!=='string' ) ? createThumbnails() : callBack();
        });
}

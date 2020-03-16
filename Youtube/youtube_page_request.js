function getPage(pageTokenValue) {
    var request = gapi.client.youtube.search.list({
        part: "snippet",
        type: "video",
        q: document.querySelector('#searchbox').value,
        maxResults: 11,
        order: "viewCount",
        pageToken: pageTokenValue
    });
    request.execute(function (response) {
        results = response.result;
        nextPage = results.nextPageToken;
        items = results.items;
        prevPage = results.prevPageToken;
    });

}
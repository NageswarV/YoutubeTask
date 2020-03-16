let items, currentPage = 0, nextPage, prevPage, capacity = 3;

function init() {
    gapi.client.setApiKey("AIzaSyBFTzlxrsJkt060l3ac5Z0_jhJTVJ4RNWw");
    gapi.client.load("youtube", "v3", function () {
    });
    var template = document.querySelector("#mainPage");
    var clonenode = document.importNode(template.content, true);
    document.querySelector("body").appendChild(clonenode);
}

function getSearchResults() {
    var request = gapi.client.youtube.search.list({
        part: "snippet",
        type: "video",
        q: document.querySelector('#searchbox').value,
        maxResults: 15,
        order: "viewCount"
    });
    request.execute(function (response) {
        if (window.innerWidth < 760)
            capacity = 1;
        else if (window.innerWidth < 1000)
            capacity = 2;
        results = response.result;
        nextPage = results.nextPageToken;
        items = results.items;
        document.getElementById('content').innerHTML = '';
        document.getElementById('navigation').innerHTML = '';
        var fragments = document.createDocumentFragment();
        for (let i = 0; i < capacity; i++) {
            var template = document.querySelector("#videoHolder");
            var clonenode = document.importNode(template.content, true);
             let video1 = clonenode.querySelector("#video");
            video1.setAttribute("src", results.items[i].snippet.thumbnails.high.url);
            clonenode.querySelector("#title").innerHTML = results.items[i].snippet.title;
            fragments.appendChild(clonenode);

        }
        document.querySelector("#content").appendChild(fragments);
        var template = document.querySelector("#templateNav");
        var clonetemplate = document.importNode(template.content, true);
        document.querySelector("#navigation").appendChild(clonetemplate);
    });
}

function populate(index) {
    let imgContainer = 0;
    var video = document.querySelectorAll('.thumbnails');
    for (let i = index; i < index + capacity && i < items.length; i++) {

        video[imgContainer].querySelector("#video").setAttribute("src", items[i].snippet.thumbnails.high.url);
        video[imgContainer++].querySelector("#title").innerHTML = items[i].snippet.title;
    }
}


var capacity = 4;

function init() {
    var template = document.querySelector("#mainPage");
    var clonenode = document.importNode(template.content, true);
    document.querySelector("body").appendChild(clonenode);
}

function createThumbnails() {
    document.getElementById('content').innerHTML = '';
    document.getElementById('navigation').innerHTML = '';
    var fragments = document.createDocumentFragment();
    for (let i = 0; i < capacity; i++) {
        var template = document.querySelector("#videoHolder");
        var clonenode = document.importNode(template.content, true);
        fragments.appendChild(clonenode);

    }
    document.querySelector("#content").appendChild(fragments);
    populate();
    createNavigation();
}

function createNavigation() {
    var templateNav = document.querySelector("#templateNav");
    var clonetemplate = document.importNode(templateNav.content, true);
    document.querySelector("#navigation").appendChild(clonetemplate);
    document.querySelector('#pageCount').innerHTML='1';
}
function upDateCapacity() {
    if (window.innerWidth < 720) {
        capacity = 2;
        createThumbnails();
    }
    else {
        capacity = 4;
        createThumbnails();
    }
}

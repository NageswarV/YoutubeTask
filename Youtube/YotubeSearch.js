let items,currentPage=0,nextPage,prevPage,nextPageButtonCount=0;
function requestPreparation(){
    var request=gapi.client.youtube.search.list({
        part : "snippet",
        type :"video",
        q : document.querySelector('#searchbox').value,
        maxResults : 15,
        order : "viewCount"
    });
    request.execute(function(response) {
        results=response.result ;
         nextPage=results.nextPageToken;
         items=results.items;
         document.getElementById('content').innerHTML='';
         document.getElementById('navigation').innerHTML='';
         for(let i=0;i<3;i++){
            var template=document.querySelector("#videoHolder");
             var clonenode=document.importNode(template.content,true);
             let video1=clonenode.querySelector("#video");
             video1.setAttribute("src",results.items[i].snippet.thumbnails.high.url);
             clonenode.querySelector("#title").innerHTML=results.items[i].snippet.title;
             document.querySelector("#content").appendChild(clonenode);
             
             }
             var template=document.querySelector("#templateNav");
             var clonetemplate=document.importNode(template.content,true);
             document.querySelector("#navigation").appendChild(clonetemplate);
    });
}
function init() {
    gapi.client.setApiKey("AIzaSyBFTzlxrsJkt060l3ac5Z0_jhJTVJ4RNWw");
    gapi.client.load("youtube", "v3", function() {
  });

}
function moveToNext(){
    if(currentPage<Math.floor(items.length/3)-1){
    currentPage++;
     let index=currentPage*3;
    populate(index);
    }else{
    getPage(nextPage);
    currentPage=-1;
    moveToNext();

    }
    nextPageButtonCount++;
}

function moveToPrev(){
    if(currentPage>0){
   
    let index=(currentPage-1)*3;
    populate(index);
   currentPage--;
    }
    else if(nextPageButtonCount>0){
        getPage(prevPage);
        currentPage=Math.floor(items.length/3)-1;
        moveToPrev();
    }
    nextPageButtonCount++;
}

function populate(index){
     let imgContainer=0;    
 var video=document.querySelectorAll('.thumbnails');
    for(let i=index;i<index+3 && i<items.length;i++){
         
           video[imgContainer].querySelector("#video").setAttribute("src",items[i].snippet.thumbnails.high.url);
           video[imgContainer++].querySelector("#title").innerHTML= items[i].snippet.title;  
        }
}
function getPage(pageTokenValue){
    var request=gapi.client.youtube.search.list({
        part : "snippet",
        type :"video",
        q : document.querySelector('#searchbox').value,
        maxResults : 11,
        order : "viewCount",
        pageToken : pageTokenValue
    });
        request.execute(function(response) {
        results=response.result ;
         nextPage=results.nextPageToken;
         items=results.items;
         prevPage=results.prevPageToken;
         console.log(nextPage);
         console.log(prevPage);
    });
    
}
// function getPreviousPage(){
//     var request=gapi.client.youtube.search.list({
//         part : "snippet",
//         type :"video",
//         q : document.querySelector('#searchbox').value,
//         maxResults : 11,
//         order : "viewCount",
//         pageToken : prevPage
//     });
//         request.execute(function(response) {
//         results=response.result ;
//          nextPage=results.nextPageToken;
//          items=results.items;
//          prevPage=results.prevPageToken;
//     });
//     currentPage=Math.floor(items.length/3)-1;
// }
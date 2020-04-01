// describe("youtube page request test",function(){
//     beforeEach(function(){
//         var inputfield=document.createElement('input');
//         inputfield.setAttribute('id','searchbox');
//         inputfield.value='songs';
//         document.querySelector('body').appendChild(inputfield);
//     });
//     it("should call updateResultSet function",function(){
//          spyOn(window,'updateResultSet');
//         spyOn(window,'createThumbnails');
//         getPage();
//         expect(updateResultSet).toHaveBeenCalled();
//         //expect(createThumbnails).toHaveBeenCalled();
//         setTimeout(function(){},3000);
//     })
// })
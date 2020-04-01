describe("testing init method",function(){
    beforeEach(function(){
        var element=document.createElement('template');
        element.setAttribute('id','mainPage');
        var child_node=document.createElement('div');
        child_node.setAttribute('id','header');
        child_node.textContent="testing output";
        element.appendChild(child_node);
        document.querySelector('body').appendChild(element);
    })
    it("should define main",function(){
        init();
        expect(document.querySelector('#header')).toBeDefined();
        expect(document.querySelector('#header').textContent).toEqual('testing output');
    })
});
describe("testing updateCapacity Method",function(){
    beforeEach(function(){
        spyOn(window,'createThumbnails').and.callFake(function(){})
    })
    it("should update capacity and call createThumbnails",function(){
        //need to create onWindowChange
    })
})
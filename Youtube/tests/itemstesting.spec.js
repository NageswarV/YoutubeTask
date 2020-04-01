describe("testing updateResultSet method:",function(){
    var result;
beforeEach(function(){
    result={
        items:[1,2],
        nextPageToken:"testValue1",
        prevPageToken:"testValue2"
    }
});
it("should update items and pagetokens",function(){
    updateResultSet(result);
    expect(items).toBeDefined();
    expect(nextPage).toBe("testValue1");
    expect(prevPage).toBe("testValue2");
})
});
describe("testing getItemsCount",function(){
    beforeEach(function(){
        items=[1,2,3,4];
    });
    it("should return items count",function(){
        expect(getItemsCount()).toBe(4);
    })
});
describe("testing getItems method",function(){
    beforeEach(function(){
        items=[1,2,3,4];
    })
    it("should return items",function(){
        expect(getItems()).toEqual([1,2,3,4]);
    });
});
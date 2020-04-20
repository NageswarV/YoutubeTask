describe("testing moveToNext method", function () {
  beforeEach(function () {
    spyOn(window, "populate").and.callFake(function () {});
    spyOn(window, "getPage").and.callFake(function () {});
    var pageCountField = document.createElement("p");
    pageCountField.setAttribute("id", "pageCount");
    document.querySelector("body").appendChild(pageCountField);
  });
  it("should call populate and getItemsCount", function () {
    spyOn(window, "getItemsCount").and.returnValue(9);
    capacity = 2;
    moveToNext();
    expect(populate).toHaveBeenCalled();
  });
});
describe("testing moveToNext method", function () {
  beforeEach(function () {
    spyOn(window, "getPage").and.callFake(function () {});
    spyOn(window, "getItemsCount").and.returnValue(0);
  });
  it("should call getPage", function () {
    moveToNext();
    expect(getPage).toHaveBeenCalled();
  });
});
describe("testing moveToPrev method", function () {
  beforeEach(function () {
    currentPage = 1;
    spyOn(window, "populate");
    spyOn(window, "getPage");
    var pageCountField = document.createElement("p");
    pageCountField.setAttribute("id", "pageCount");
    document.querySelector("body").appendChild(pageCountField);
  });
  it("should call populate ", function () {
    moveToPrev();
    expect(populate).toHaveBeenCalledWith(0);
  });
  it("should call getPage", function () {
    currentPage = 0;
    if (!prevPage) prevPage = "someTestVale";
    moveToPrev();
    expect(getPage).toHaveBeenCalled();
  });
});

describe("youtube page request test", function () {
  beforeEach(function () {
    var inputfield = document.createElement("input");
    inputfield.setAttribute("id", "searchbox");
    inputfield.value = "songs";
    document.querySelector("body").appendChild(inputfield);
  });
  it("should call updateResultSet function", function () {
    spyOn(window, "updateResultSet");
    spyOn(window, "createThumbnails");
    var promise = new Promise(function () {
      done();
    });
    spyOn(window, "fetch").and.callFake(function () {
      return promise;
    });
    getPage();
    expect(fetch).toHaveBeenCalled();
  });
});

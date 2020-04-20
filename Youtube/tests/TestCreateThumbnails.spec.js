describe("testing createThumnails", function () {
  beforeEach(function () {
    var content = document.createElement("div");
    content.setAttribute("id", "content");
    document.body.appendChild(content);
    var nav = document.createElement("div");
    nav.setAttribute("id", "navigation");
    document.body.appendChild(nav);
    var template = document.createElement("template");
    template.setAttribute("id", "videoHolder");
    var child_node = document.createElement("div");
    child_node.setAttribute("class", "child");
    template.appendChild(child_node);
    document.body.appendChild(template);
  });
  it("should render template", function () {
    capacity = 2;
    spyOn(window, "populate");
    spyOn(window, "createNavigation").and.callFake(function () {});
    createThumbnails();
    expect(populate).toHaveBeenCalled();
    expect(createNavigation).toHaveBeenCalled();
  });
  afterEach(function () {
    document.body.innerHTML = "";
  });
});

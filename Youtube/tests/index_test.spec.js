describe("testing init method", function () {
  beforeEach(function () {
    var element = document.createElement("template");
    element.setAttribute("id", "mainPage");
    var child_node = document.createElement("div");
    child_node.setAttribute("id", "header");
    child_node.textContent = "testing output";
    element.appendChild(child_node);
    var btn = document.createElement("button");
    btn.setAttribute("id", "btnclick");
    element.appendChild(btn);
    document.querySelector("body").appendChild(element);
  });
  it("should define main", function () {
    init();
    expect(document.querySelector("#header")).toBeDefined();
    expect(document.querySelector("#header").textContent).toEqual(
      "testing output"
    );
  });
  afterEach(function () {
    document.querySelector("body").innerHTML = "";
  });
});
describe("testing updateCapacity Method", function () {
  beforeEach(function () {
    spyOn(window, "createThumbnails");
  });
  it("should update capacity and call createThumbnails", function () {
    upDateCapacity();
    expect(createThumbnails).toHaveBeenCalled();
  });
});
describe("testing createNavigation", function () {
  beforeEach(function () {
    var template = document.createElement("template");
    template.setAttribute("id", "templateNav");
    var nav = document.createElement("div");
    nav.setAttribute("id", "navigation");
    document.body.appendChild(nav);
    var pagecount = document.createElement("div");
    pagecount.setAttribute("id", "pageCount");
    var next = document.createElement("div");
    next.setAttribute("id", "next");
    template.appendChild(next);
    var prev = document.createElement("div");
    prev.setAttribute("id", "prev");
    template.appendChild(prev);
    template.appendChild(pagecount);
    document.body.appendChild(template);
  });
  it("should render navigation ", function () {
    createNavigation();
    expect(document.querySelector("#pageCount").innerHTML).toEqual("1");
  });
  afterEach(function () {
    document.body.innerHTML = "";
  });
});

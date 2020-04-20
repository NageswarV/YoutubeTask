describe("populate", function () {
  beforeEach(function () {
    for (i = 0; i < 4; i++) {
      var sampleDiv = document.createElement("div");
      sampleDiv.setAttribute("class", "thumbnails");
      var image = document.createElement("img");
      image.setAttribute("class", "video");
      var title = document.createElement("h5");
      title.setAttribute("class", "title");
      var publisher = document.createElement("p");
      publisher.setAttribute("class", "publisher");
      sampleDiv.appendChild(image);
      sampleDiv.appendChild(title);
      sampleDiv.appendChild(publisher);
      document.body.appendChild(sampleDiv);
    }
    item = {
      snippet: {
        channelTitle: "Bollywood Hits Songs",
        title:
          "Romantic Hindi Love Songs 2020 💖 Latest Bollywood Songs 2020 💖 Bollywood New Song 2020 🔴 Live",
        thumbnails: {
          high: {
            url: "https://i.ytimg.com/vi/2bfl0vKXQeM/hqdefault_live.jpg",
          },
        },
      },
    };
    inputs = [item, item, item, item];
  });
  afterEach(function () {
    var sampleDiv = document.querySelector(".thumbnails");
    sampleDiv.remove();
    inputs.length = 0;
    getItems.and.stub();
  });
  it("should add content to created thumbnails", function (done) {
    spyOn(window, "getItems").and.returnValue(inputs);
    populate();
    var sampleDiv = document.querySelector(".thumbnails");
    expect(document.querySelectorAll(".thumbnails").length).toBeGreaterThan(1);
    expect(sampleDiv.querySelector("img").getAttribute("src")).toBeDefined();
    expect(sampleDiv.querySelector(".title").textContent).toEqual(
      "Romantic Hindi Love Songs 2020 💖 Latest Bollywood Songs 2020 💖 Bollywood New Song 2020 🔴 Live"
    );
    expect(sampleDiv.querySelector(".publisher").textContent).toBe(
      "Bollywood Hits Songs"
    );
    done();
  });
});

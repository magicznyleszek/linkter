describe("filtersInterface", () => {
  let testData = null;
  let filtersInterface = null;

  beforeEach(() => {
    module("testAppModule");
    module("filtersModule");
    inject(($injector) => {
      testData = $injector.get("testData");
      filtersInterface = $injector.get("filtersInterface");
    });
  });

  it("should store phrase as lowercase for easier comparison", () => {
    filtersInterface.setPhrase("FooBar");
    expect(filtersInterface._phrase).toBe("foobar");
  });

  describe("matchAlbum method", () => {
    it("should match any album for empty phrase", () => {
      expect(filtersInterface.matchAlbum(testData.list[0])).toBeTruthy();
      expect(filtersInterface.matchAlbum(testData.list[1])).toBeTruthy();
      expect(filtersInterface.matchAlbum(testData.list[2])).toBeTruthy();
    });

    it("should match albums by title", () => {
      filtersInterface.setPhrase(testData.list[0].title);
      expect(filtersInterface.matchAlbum(testData.list[0])).toBeTruthy();
      expect(filtersInterface.matchAlbum(testData.list[1])).toBeFalsy();
      expect(filtersInterface.matchAlbum(testData.list[2])).toBeFalsy();
    });

    it("should match albums by artist", () => {
      filtersInterface.setPhrase(testData.list[0].artist);
      expect(filtersInterface.matchAlbum(testData.list[0])).toBeTruthy();
      expect(filtersInterface.matchAlbum(testData.list[1])).toBeFalsy();
      expect(filtersInterface.matchAlbum(testData.list[2])).toBeFalsy();
    });

    it("should match albums by decade", () => {
      filtersInterface.setPhrase(testData.list[0].decade);
      expect(filtersInterface.matchAlbum(testData.list[0])).toBeTruthy();
      expect(filtersInterface.matchAlbum(testData.list[1])).toBeTruthy();
      expect(filtersInterface.matchAlbum(testData.list[2])).toBeFalsy();
    });

    it("should match albums by year number", () => {
      filtersInterface.setPhrase(testData.list[0].year);
      expect(filtersInterface.matchAlbum(testData.list[0])).toBeTruthy();
      expect(filtersInterface.matchAlbum(testData.list[1])).toBeFalsy();
      expect(filtersInterface.matchAlbum(testData.list[2])).toBeFalsy();
    });

    it("should match albums by stars amount", () => {
      filtersInterface.setPhrase(testData.list[0].stars);
      expect(filtersInterface.matchAlbum(testData.list[0])).toBeTruthy();
      expect(filtersInterface.matchAlbum(testData.list[1])).toBeFalsy();
      expect(filtersInterface.matchAlbum(testData.list[2])).toBeFalsy();
    });
  });
});

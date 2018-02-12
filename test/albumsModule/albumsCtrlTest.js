describe("albumsCtrl", () => {
  let albumsCtrl = null;
  let testData = null;
  let $window = null;

  beforeEach(() => {
    module("testAppModule");
    module("albumsModule");
    inject(($injector, $controller) => {
      testData = $injector.get("testData");
      $window = $injector.get("$window");
      // set backend data
      $window.albumsData = testData;
      albumsCtrl = $controller("albumsCtrl", {
        $window: $window
      });
    });
  });

  it("should use data from backend", () => {
    expect(albumsCtrl.list.length).toBe(testData.list.length);
  });
});

describe("filtersPhraseCtrl", () => {
  let filtersPhraseCtrl = null;

  beforeEach(() => {
    module("testAppModule");
    module("filtersModule");
    inject(($controller) => {
      filtersPhraseCtrl = $controller("filtersPhraseCtrl");
    });
  });

  it("should start with empty string value", () => {
    expect(filtersPhraseCtrl.value).toBe("");
  });
});

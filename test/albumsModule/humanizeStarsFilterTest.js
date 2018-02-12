describe("humanizeStarsFilter", () => {
  let humanizeStars = null;

  beforeEach(() => {
    module("testAppModule");
    module("albumsModule");
    inject(($injector, $filter) => {
      humanizeStars = $filter("humanizeStars");
    });
  });

  it("should return a stringified representation of stars", () => {
    expect(humanizeStars(0)).toBe("☆☆☆☆☆");
    expect(humanizeStars(1)).toBe("★☆☆☆☆");
    expect(humanizeStars(2)).toBe("★★☆☆☆");
    expect(humanizeStars(3)).toBe("★★★☆☆");
    expect(humanizeStars(4)).toBe("★★★★☆");
    expect(humanizeStars(5)).toBe("★★★★★");
  });

  it("should fail for stars over or under limit", () => {
    expect(() => {
      humanizeStars(6);
    }).toThrow();
    expect(() => {
      humanizeStars(-1);
    }).toThrow();
  });
});

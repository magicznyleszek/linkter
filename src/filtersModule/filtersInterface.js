// -----------------------------------------------------------------------------
// filtersInterface keeps current filters value
// -----------------------------------------------------------------------------

class FiltersInterfaceService {
  constructor() {
    this._phrase = null;
  }

  setPhrase(phrase) {
    // we want to keep the phrase lowercased for easier comparison
    this._phrase = phrase.toLowerCase();
  }

  matchAlbum(album) {
    // check album by title, artist, decade and stars
    if (
      _.isEmpty(this._phrase) ||
      album.title.toLowerCase().includes(this._phrase) ||
      album.artist.toLowerCase().includes(this._phrase) ||
      album.decade.toLowerCase().includes(this._phrase) ||
      String(album.year) === this._phrase ||
      String(album.stars) === this._phrase
    ) {
      return true;
    } else {
      return false;
    }
  }
}

angular
  .module("filtersModule")
  .service("filtersInterface", FiltersInterfaceService);

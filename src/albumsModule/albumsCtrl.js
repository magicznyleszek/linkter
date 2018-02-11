// -----------------------------------------------------------------------------
// albumsCtrl -- displays a filtered list of albums
// -----------------------------------------------------------------------------

class albumsController {
  static initClass() {
    albumsController.$inject = ["$window", "filtersInterface"];
  }

  constructor($window, filtersInterface) {
    this._$window = $window;

    // THE list
    this.list = this._getListFromBackendData();

    // use the function from interface
    this.matchAlbum = filtersInterface.matchAlbum.bind(filtersInterface);
  }

  _getListFromBackendData() {
    if (typeof this._$window.albumsData === "object") {
      return this._$window.albumsData.list;
    } else {
      return [];
    }
  }
}

albumsController.initClass();

angular.module("albumsModule").controller("albumsCtrl", albumsController);

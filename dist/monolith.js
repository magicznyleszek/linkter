
;(function () {
"use strict";

// -----------------------------------------------------------------------------
// albumsModule for displaying a list of albums, uses some modules for filtering
// -----------------------------------------------------------------------------

angular.module("albumsModule", ["filtersModule"]);
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// -----------------------------------------------------------------------------
// albumsCtrl -- displays a filtered list of albums
// -----------------------------------------------------------------------------

var albumsController = function () {
  _createClass(albumsController, null, [{
    key: "initClass",
    value: function initClass() {
      albumsController.$inject = ["$window", "filtersInterface"];
    }
  }]);

  function albumsController($window, filtersInterface) {
    _classCallCheck(this, albumsController);

    this._$window = $window;

    // THE list
    this.list = this._getListFromBackendData();

    // use the function from interface
    this.matchAlbum = filtersInterface.matchAlbum.bind(filtersInterface);
  }

  _createClass(albumsController, [{
    key: "_getListFromBackendData",
    value: function _getListFromBackendData() {
      if (_typeof(this._$window.albumsData) === "object") {
        return this._$window.albumsData.list;
      } else {
        return [];
      }
    }
  }]);

  return albumsController;
}();

albumsController.initClass();

angular.module("albumsModule").controller("albumsCtrl", albumsController);
"use strict";

// -----------------------------------------------------------------------------
// humanizeStars filter returns a string of 5 stars with fulls and empties
// -----------------------------------------------------------------------------

angular.module("albumsModule").filter("humanizeStars", function () {
  return function (numberOfStars) {
    return "\u2605".repeat(numberOfStars) + "\u2606".repeat(5 - numberOfStars);
  };
});
"use strict";

// -----------------------------------------------------------------------------
// linkterAppModule is our single ngApp module for whole web app
// -----------------------------------------------------------------------------

angular.module("linkterAppModule", ["albumsModule", "angular.filter"]);
"use strict";

// -----------------------------------------------------------------------------
// tweak default angular configuration
// -----------------------------------------------------------------------------

angular.module("linkterAppModule").config(["$interpolateProvider", "$compileProvider", function ($interpolateProvider, $compileProvider) {
  // unfortunately we can't use "{{ symbols }}" because Jekyll uses them
  $interpolateProvider.startSymbol("[[");
  $interpolateProvider.endSymbol("]]");

  // We're disabling angular debug info - significant performance boost
  $compileProvider.debugInfoEnabled(false);
  // Don't look for directives in comments and classes (~10% boost)
  $compileProvider.commentDirectivesEnabled(false);
  $compileProvider.cssClassDirectivesEnabled(false);
}]);
"use strict";

// -----------------------------------------------------------------------------
// filtersModule for displaying a bunch of filters for albums
// -----------------------------------------------------------------------------

angular.module("filtersModule", ["observableModule"]);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// -----------------------------------------------------------------------------
// filtersInterface keeps current filters value
// -----------------------------------------------------------------------------

var FiltersInterfaceService = function () {
  function FiltersInterfaceService() {
    _classCallCheck(this, FiltersInterfaceService);

    this._phrase = null;
  }

  _createClass(FiltersInterfaceService, [{
    key: "setPhrase",
    value: function setPhrase(phrase) {
      // we want to keep the phrase lowercased for easier comparison
      this._phrase = phrase.toLowerCase();
    }
  }, {
    key: "matchAlbum",
    value: function matchAlbum(album) {
      // check album by title, artist, decade and stars
      if (_.isEmpty(this._phrase) || album.title.toLowerCase().includes(this._phrase) || album.artist.toLowerCase().includes(this._phrase) || album.decade.toLowerCase().includes(this._phrase) || String(album.stars) === this._phrase) {
        return true;
      } else {
        return false;
      }
    }
  }]);

  return FiltersInterfaceService;
}();

angular.module("filtersModule").service("filtersInterface", FiltersInterfaceService);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// -----------------------------------------------------------------------------
// filtersPhraseCtrl -- handles a text input value for matching by phrase
// -----------------------------------------------------------------------------

var FiltersPhraseController = function () {
  _createClass(FiltersPhraseController, null, [{
    key: "initClass",
    value: function initClass() {
      FiltersPhraseController.$inject = ["filtersInterface"];
    }
  }]);

  function FiltersPhraseController(filtersInterface) {
    _classCallCheck(this, FiltersPhraseController);

    this._filtersInterface = filtersInterface;
    this.value = "";
    this.dispatchValue();
  }

  _createClass(FiltersPhraseController, [{
    key: "dispatchValue",
    value: function dispatchValue() {
      this._filtersInterface.setPhrase(this.value);
    }
  }]);

  return FiltersPhraseController;
}();

FiltersPhraseController.initClass();

angular.module("filtersModule").controller("filtersPhraseCtrl", FiltersPhraseController);
"use strict";

// -----------------------------------------------------------------------------
// observableModule is for managing a list of observers.
// -----------------------------------------------------------------------------

angular.module("observableModule", []);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// -----------------------------------------------------------------------------
// observable is a factory that creates a new instance of observer pattern.
// It handles adding observers, running them and removing.
// Any service that would like to keep a list of observers of some kind, can
// easily use this object for handling common logic of keeping and controlling
// sets of callback (observers) functions.
// -----------------------------------------------------------------------------

var ObservableModel = function () {
  function ObservableModel() {
    _classCallCheck(this, ObservableModel);

    this._observers = [];
    this._amountOfObservers = 0;
    this._observersToRemove = [];
    this._amountToRemove = 0;
    this._stateObservers = [];
    this._isActive = false;
  }

  _createClass(ObservableModel, [{
    key: "_createCancelFunction",
    value: function _createCancelFunction(observerToCancel, afterCancelCallback) {
      return function () {
        afterCancelCallback(observerToCancel);
        observerToCancel = null;
        afterCancelCallback = null;
      };
    }
  }, {
    key: "_afterCancel",
    value: function _afterCancel(observerToRemove) {
      this._amountToRemove = this._observersToRemove.push(observerToRemove);
    }
  }, {
    key: "_cleanRemovedObservers",
    value: function _cleanRemovedObservers() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this._observersToRemove[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var observerToRemove = _step.value;

          var indexOf = this._observers.indexOf(observerToRemove);
          if (indexOf !== -1) {
            this._observers.splice(indexOf, 1);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this._amountOfObservers = this._observers.length;
      this._amountToRemove = 0;
      this._observersToRemove.length = 0;
      this._updateState(this._amountOfObservers > 0);
    }
  }, {
    key: "_updateState",
    value: function _updateState(newActiveState) {
      if (this._isActive === newActiveState) {
        return;
      }

      this._isActive = newActiveState;

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this._stateObservers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var stateObserver = _step2.value;

          stateObserver(this._isActive);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: "register",
    value: function register(newObserver) {
      this._amountOfObservers = this._observers.push(newObserver);
      this._updateState(true);
      return this._createCancelFunction(newObserver, this._afterCancel.bind(this));
    }
  }, {
    key: "notify",
    value: function notify() {
      if (this._amountToRemove !== 0) {
        this._cleanRemovedObservers();
      }

      if (!this._isActive) {
        return;
      }

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (this._amountOfObservers === 1) {
        this._observers[0].apply(null, args);
        return;
      }

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this._observers[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var observer = _step3.value;

          observer.apply(undefined, args);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }, {
    key: "onStateChange",
    value: function onStateChange(stateObserver) {
      return this._stateObservers.push(stateObserver);
    }
  }]);

  return ObservableModel;
}();

angular.module("observableModule").factory("Observable", function () {
  return ObservableModel;
});

//# sourceMappingURL=monolith.js.map
})();

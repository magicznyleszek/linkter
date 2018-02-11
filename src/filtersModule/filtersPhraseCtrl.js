// -----------------------------------------------------------------------------
// filtersPhraseCtrl -- handles a text input value for matching by phrase
// -----------------------------------------------------------------------------

class FiltersPhraseController {
  static initClass() {
    FiltersPhraseController.$inject = ["filtersInterface"];
  }

  constructor(filtersInterface) {
    this._filtersInterface = filtersInterface;
    this.value = "";
    this.dispatchValue();
  }

  dispatchValue() {
    this._filtersInterface.setPhrase(this.value);
  }
}

FiltersPhraseController.initClass();

angular
  .module("filtersModule")
  .controller("filtersPhraseCtrl", FiltersPhraseController);

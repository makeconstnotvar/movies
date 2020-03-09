import {action, computed, observable} from "mobx";

//import {getError} from "mobx/errors";

class BaseStore {
  constructor(options = {}) {
    this.$root = options.$root;
    this.fetchMethod = options.fetchMethod || this.fetchMethod;
    this.saveMethod = options.saveMethod || this.saveMethod;
  }

  fetchMethod = function () {
    throw 'Не задан fetchMethod'
  };
  fetchFailed = function (e) {

  };
  fetchSuccess = function (response) {

  };
  firstFetchSuccess = function (response) {

  };
  saveMethod = function () {
    throw 'Не задан saveMethod'
  };
  itemsCached = [];
  selectedCached = null;

  @observable fetchProgress = false;
  @observable fetchError = false;
  @observable fetchErrorText = "";
  @observable fetchDone = false;
  @observable fetchFirst = false;

  @observable saveProgress = false;
  @observable saveError = false;
  @observable saveErrorText = "";
  @observable saveDone = false;
  @observable items = [];
  @observable count = 0;
  @observable noResults = false;
  @observable selected = null;

  @observable item = {};

  @action selectedToCache() {
    this.selectedCached = this.selected;
    this.selected = null;
  }

  @action selectedFromCache() {
    if (this.selectedCached)
      this.selected = this.selectedCached;
  }

  @action reset() {
    this.selected = null;
    this.selectedCached = null;
    this.fetchErrorText = "";
    this.saveErrorText = "";
  }

  @action fullReset() {
    this.fetchProgress = false;
    this.fetchError = false;
    this.selected = null;
    this.selectedCached = null;
    this.fetchErrorText = "";
    this.saveErrorText = "";
    this.fetchDone = false;
    this.items = [];
    this.item = {};
    this.count = 0;
    this.noResults = false;
  }

  @action setSelected(item) {
    this.selected = item;
    this.selectedCached = null;
  }

  @computed get noSelected() {
    return this.selected == null;
  }

  @action itemsToCache(params) {
    return this.fetchItems(params, true);
  }

  @action itemsFromCache() {
    this.items = this.itemsCached;
    this.selectedFromCache();
  }

  @action fetchItems(params, needCache) {
    this.fetchProgress = true;
    this.fetchError = false;
    this.fetchErrorText = "";
    this.fetchDone = false;
    return this.fetchMethod(params)
      .catch(e => {
        if (e.message !== "user cancel") {
          this.fetchError = true;
          if (e.response && e.response.data) {
            let {code = "", error = ""} = e.response.data;
            //this.fetchErrorText = getError(code, error);
          }
          this.fetchFailed(e);
          console.error(`Ошибка в ${this.fetchMethod.name}`, e);
        }
      })
      .then(action((response = {}) => {
        this.items = response.results || [];
        this.count = response.total_results || 0;
        this.fetchProgress = false;
        this.fetchDone = true;
        this.fetchSuccess(response);
        if (needCache) {
          this.itemsCached = this.items;
          this.noResults = this.items.length === 0;
          this.fetchFirst = true;
          this.firstFetchSuccess(response)
        }
      }));
  }

  @computed get noItem() {
    return this.fetchDone && Object.entries(this.item).length === 0;
  }

  @computed get noItems() {
    return this.fetchDone && this.items.length === 0;
  }

  @action fetchItem(params) {
    this.fetchProgress = true;
    this.fetchError = false;
    this.fetchErrorText = "";
    this.fetchDone = false;
    return this.fetchMethod(params)
      .catch(e => {
        this.fetchError = true;
        if (e.response && e.response.data) {
          let {code = "", error = ""} = e.response.data;
          //this.fetchErrorText = getError(code, error);
        }
        console.error(`Ошибка в ${this.fetchMethod.name}`, e);
      })
      .then(action(item => {
        this.item = item || {};
        this.fetchProgress = false;
        this.fetchDone = true;

      }));
  }

  @action save(params) {
    this.saveProgress = true;
    this.saveError = false;
    this.saveDone = false;
    this.saveErrorText = "";
    return this.saveMethod(params)
      .catch(e => {
        this.saveError = true;
        if (e.response && e.response.data) {
          let {code = "", error = ""} = e.response.data;
          //this.saveErrorText = getError(code, error);
        }
        console.error(this.saveMethod.name, e);
      })
      .then(action(resp => {
        this.saveProgress = false;
        this.saveDone = true;
      }));
  }
}

export {BaseStore}

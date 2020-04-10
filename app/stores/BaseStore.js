import {action, computed, observable} from "mobx";

class BaseStore {
  ssrLocation = null;

  constructor({state, fetchMethod, saveMethod/*, $root*/} = {}) {
    if (state)
      Object.assign(this, state);
    this.fetchMethod = fetchMethod || this.fetchMethod;
    this.saveMethod = saveMethod || this.saveMethod;
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

  @observable fetchProgress = false;
  @observable fetchError = false;
  @observable fetchErrorText = "";
  @observable fetchDone = false;
  @observable fetchFirst = false;
  @observable fetchQuery = null;

  @observable saveProgress = false;
  @observable saveError = false;
  @observable saveErrorText = "";
  @observable saveDone = false;
  @observable items = [];
  @observable item = {};
  @observable total = 0;
  @observable noResults = false;

  @computed get noItem() {
    return this.fetchDone && Object.entries(this.item).length === 0;
  }

  @computed get noItems() {
    return this.fetchDone && this.items.length === 0;
  }

  @action reset() {
    this.fetchErrorText = "";
    this.saveErrorText = "";
  }

  @action fullReset() {
    this.fetchProgress = false;
    this.fetchError = false;
    this.fetchErrorText = "";
    this.saveErrorText = "";
    this.fetchDone = false;
    this.items = [];
    this.item = {};
    this.total = 0;
    this.noResults = false;
  }

  @action setState(state) {
    if (isObject(state))
      for (let key in state) {
        this[key] = state[key];
      }
  }

  @action fetchItems(params, isFirst) {
    this.fetchProgress = true;
    this.fetchError = false;
    this.fetchErrorText = "";
    this.fetchDone = false;
    return this.fetchMethod(params)
      .catch(action(e => {
        if (e.message !== "user cancel") {
          this.fetchError = true;
          //this.fetchErrorText = getError(e);
          this.fetchFailed(e);
          console.error(`Ошибка в ${this.fetchMethod.name}`, e);
        }
      }))
      .then(action((response = {}) => {
        this.items = response.results || [];
        this.total = response.total_results || 0;
        this.fetchProgress = false;
        this.fetchDone = true;
        this.fetchSuccess(response);
        if (isFirst) {
          this.noResults = this.items.length === 0;
          this.fetchFirst = true;
          this.firstFetchSuccess(response)
        }
      }));
  }


  @action fetchItem(params) {
    this.fetchProgress = true;
    this.fetchError = false;
    this.fetchErrorText = "";
    this.fetchDone = false;
    return this.fetchMethod(params)
      .catch(e => {
        this.fetchError = true;
        //this.fetchErrorText = getError(e);
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
      .catch(action(e => {
        this.saveError = true;
        //this.saveErrorText = getError(e);
        console.error(this.saveMethod.name, e);
      }))
      .then(action(resp => {
        this.saveProgress = false;
        this.saveDone = true;
      }));
  }
}

export {BaseStore}

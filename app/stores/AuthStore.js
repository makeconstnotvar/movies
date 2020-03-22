import {action, computed, observable} from "mobx";
import {authApi} from "../api/auth";

class AuthStore {
  ssrLocation = null;

  constructor({state}) {
    if (state)
      Object.assign(this, state);
  }

  @observable token = {};

  @action
  async getToken() {
    this.token = await authApi.getToken();
  }

  @computed get requestToken() {
    return this.token.request_token;
  }

}
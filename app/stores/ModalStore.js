import {action, observable} from "mobx";

class ModalStore {
  /*
   * component - компонент модала, например LoginModal
   * props - объект с пропсами, просто передается в Component
   * Есть необходимость после заверешения работы модала иногда вызвать callback, например открыть другой модал.
   * Для этого есть аргументы props.onSuccess и props.onFailed, оба по умолчанию пустая функция;
   */
  ssrLocation = null;

  constructor({state}) {
    if (state)
      Object.assign(this, state);
  }

  @observable isVisible = false;
  @observable component = () => null;
  @observable props = {};
  @observable className = "";

  @action
  show(component, props = {}) {
    props.onSuccess = props.onSuccess || function () {
    };
    props.onFailed = props.onFailed || function () {
    };
    props.onShow = props.onShow || function () {
    };
    props.onHide = props.onHide || function () {
    };
    this.isVisible = true;
    this.component = component;
    this.props = props;
    this.className = props.className || "";
    let htmlEl = document.querySelector("html");
    htmlEl.classList.add("modal-open");
    this.props.onShow();
  }

  @action
  hide() {
    this.component = () => "";
    this.isVisible = false;
    let htmlEl = document.querySelector("html");
    htmlEl.classList.remove("modal-open");
    this.props.onHide && this.props.onHide();
    this.props = {};
  }

  @action
  setClassName(className) {
    this.className = className;
  }
}

export {ModalStore}

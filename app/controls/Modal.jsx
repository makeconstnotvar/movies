import {Component} from 'inferno';
import {inject, observer} from "inferno-mobx";

@inject("$modal")
@observer
class Modal extends Component {
  hideModal(e) {
    if (e.target === e.currentTarget)
      this.props.$modal.hide()
  }

  render(nextProps, nextState, nextContext) {
    let {$modal} = nextProps;
    let Component = $modal.component;
    if (!$modal.isVisible)
      return null;
    return (
      <modal>
        <div className="modal-backdrop in"/>
        <div className="modal show" tabIndex="-1" onMouseDown={e => this.hideModal(e)}>
          <div className={`dialog-box ${$modal.className}`}>
            <div className="dialog">
              <Component hide={() => $modal.hide()} {...$modal.props}/>
            </div>
          </div>
        </div>
      </modal>
    )
  }
}

export {Modal}

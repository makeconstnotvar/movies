import React, {Component, Fragment} from 'react';
import {inject, observer} from "mobx-react";

@inject("$modal")
@observer
class Modal extends Component {
  hideModal(e) {
    if (e.target === e.currentTarget)
      this.props.$modal.hide()
  }

  render() {
    let {$modal} = this.props;
    let Component = $modal.component;
    if (!$modal.isVisible)
      return null;
    return (
      <Fragment>
        <div className="modal-backdrop in"/>
        <div className="modal show" tabIndex="-1" onMouseDown={e => this.hideModal(e)}>
          <div className={`dialog-box ${$modal.className}`}>
            <div className="dialog">
              <Component hide={() => $modal.hide()}
                         {...$modal.props}/>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export {Modal}

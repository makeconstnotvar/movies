import {inject, observer} from "mobx-react";
import {Component, Fragment} from 'react';
import React from 'react';
import {Link} from "react-router-dom";
import qs from 'qs';

@inject("$pager")
@observer
class Pager extends Component {
  componentDidUpdate(prevProps) {
    console.log('-Pager-')
    console.log(prevProps, this.props)
  };

  render() {
    let {$pager} = this.props;
    let query = qs.parse(location.search, {ignoreQueryPrefix: true})
    if (!$pager.showPager)
      return null;
    return (
      <div className="pager flex-row flex-wrap unselectable">
        {
          $pager.isPrev &&
          <a className="page undecorate pointer" onClick={e => this.pageChange(e, 1)}><i className="fas fa-arrow-left"/></a>
        }
        {
          !$pager.showAll &&
          <Fragment>
            {
              $pager.pages.map(page => <Link to={`${location.pathname}?${qs.stringify({...query, page})}`} key={page}
                                             className={`page undecorate pointer ${page === $pager.currentPage ? 'active' : ''}`}>{page}</Link>)
            }
          </Fragment>
        }
        {
          $pager.isNext &&
          <a className="page undecorate pointer" onClick={e => this.pageChange(e, $pager.currentPage + 1)}><i className="fas fa-arrow-right"/></a>
        }
      </div>
    )
  }
}

export {Pager}

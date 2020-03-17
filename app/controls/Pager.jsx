import {inject, observer} from "mobx-react";
import React, {Component, Fragment} from 'react';
import {Link} from "@reach/router";
import qs from 'qs';

@inject("$pager")
@observer
class Pager extends Component {
  componentDidMount() {
    let {total, $pager} = this.props;
    $pager.total = total;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let {total, $pager} = this.props;
    $pager.total = total;
  }

  state = {
    showAll: false
  };

  static defaultProps = {
    titles: null,
    total: 0,
    needShowAll: false,
    onPageChange(page) {
      console.log('empty onPageChange ', page)
    },
    onShowAll(status) {
      console.log('empty onShowAll ', status)
    }
  };

  pageChange = (e, page) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    this.props.$pager.setPage(page);
    this.props.onPageChange(page)
  };

  showAll = (e, showAll) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    this.setState({showAll});
    this.props.$pager.setPage(0);
    this.props.onPageChange(0, showAll)
  };

  render() {
    let {$pager, path = ""} = this.props;
    let {showAll} = this.state;

    if (!$pager.showPager)
      return null;
    return (
      <div className="pager flex-row flex-wrap unselectable">
        {
          $pager.isPrev &&
          <a className="page undecorate pointer" onClick={e => this.pageChange(e, 1)}><i className="fas fa-arrow-left"/></a>
        }
        {
          !showAll &&
          <Fragment>
            {
              $pager.pages.map(page => <Link to={`${path}?${qs.stringify({...$pager.query, page: page - 1})}`}
                                             key={page}
                                             className={`page undecorate pointer ${page == $pager.currentPage ? 'active' : ''}`}
                                             onClick={e => this.pageChange(e, page)}>{page}</Link>)
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

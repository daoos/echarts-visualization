'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
    this.assign("title", "曲线");
    this.assign("quxian", "active");
    return this.display();
  }
}

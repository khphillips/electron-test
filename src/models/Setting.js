// User Model

import PersistModel from './PersistModel'

export default class Setting extends PersistModel {
  // This is the name used as module name of the Vuex Store.
  static entity = 'item'
  // List of all fields (schema) of the post model. `this.attr` is used
  // for the generic field type. The argument is the default value.
  static fields () {
    return {
      id: this.increment(),
      label: this.attr(''),
      value: this.attr(''),
      type: this.attr(''),
    }
  }

  static state ()  {
    return {
      persist : true,
      repo : 'darknote',
      use_git : true
      //repo: "engagement_label".  //replace with the engagement model for the repo. 
    }
  }

}
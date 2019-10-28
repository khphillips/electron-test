// User Model

import FireStoreModel from './FireStoreModel'

export default class Item extends FireStoreModel {
  // This is the name used as module name of the Vuex Store.
  static entity = 'item'
  static firestorePath = 'item'// 'users/{userId}/pokeDex'
  static firestoreRefType = 'collection'
  // List of all fields (schema) of the post model. `this.attr` is used
  // for the generic field type. The argument is the default value.
  static fields () {
    return {
      id: this.increment(),
      first_name: this.attr(''),
      last_name: this.attr(''),
      email: this.attr(''),
      is_dirty: this.boolean(true),
      docRefId: this.attr(''),
    }
  }

  static state ()  {
    return {
      dirty: false,
      docRefId: null
    }
  }

}
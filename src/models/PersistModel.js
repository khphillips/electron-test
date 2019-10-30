import { Model } from '@vuex-orm/core'

export default class PersistModel extends Model {
  // This is the name used as module name of the Vuex Store.
  //static entity = 'users'

  static afterCreate (model) {
    //save to file and then add commit
  }

  static afterUpdate (model) {
    //save to file and then add commit
  }

  refObject(){

  }

}
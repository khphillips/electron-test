import { Model } from '@vuex-orm/core'
import firebase from '../plugins/firebase'

export default class FireStoreModel extends Model {
  // This is the name used as module name of the Vuex Store.
  //static entity = 'users'

  static beforeCreate (model) {
    var result;
    //console.log(model.constructor.firestorePath);
    var obj = model.refObject();
    model.is_dirty = true;
    firebase.collection(model.constructor.firestorePath)
      .add(obj)
      .then(function(docRef) {
          model.constructor.update(
              {
                where : model.id,
                data : {
                  is_dirty : false,
                  docRefId : docRef.id
                }
              }
            )
      })
      .catch(function(error) {
          model.is_dirty = true;
      });
  }

  static afterUpdate (model) {
    console.log(model.is_dirty);
    if(!model.is_dirty){
      return;
    }
    var result;
    //console.log(model.constructor.firestorePath);
    var obj = model.refObject();
    model.is_dirty = true;
    model.$save();
    (async () => {
        result = await firebase.collection(model.constructor.firestorePath)
          .doc(model.doRefId)
          .update(obj)
          .then(function(docRef) {
              model.is_dirty = false;
          })
          .catch(function(error) {
              model.is_dirty = true;
          });
    })();
  }

  refObject(){
    var obj = Object.assign({}, this);
    delete obj.docRefId;
    delete obj.$id;
    delete obj.is_dirty;
    return obj;
  }

}
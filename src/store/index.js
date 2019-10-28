import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import createPersistedState from 'vuex-persistedstate'

import Item from '../models/Item'

Vue.use(Vuex)

const database = new VuexORM.Database()

database.register(Item)

const store = new Vuex.Store({
  plugins: [
  	VuexORM.install(database),
  	createPersistedState({
            key: 'entities'
        })
  	]
})

export default store
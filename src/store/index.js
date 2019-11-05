import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import config from '../../config'
import Item from '../models/Item'
import GitStore from '@/plugins/GitStore'

Vue.use(Vuex)

const database = new VuexORM.Database()

database.register(Item)

const store = new Vuex.Store({
  plugins: [
  	VuexORM.install(database),
  	GitStore.install({
  		key : 'entities', 
  		repo : 'darknote'
  	})
  	]
})

export default store
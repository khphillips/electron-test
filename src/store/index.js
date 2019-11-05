import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import config from '../../config'
import Item from '../models/Item'

Vue.use(Vuex)

const database = new VuexORM.Database()

database.register(Item)

const store = new Vuex.Store({
  plugins: [
  	VuexORM.install(database),
  	config.storage.driver.install({
  		//key : 'entities', 
  		//repo : 'darknote'
  	})
  	]
})

export default store
import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import User from '../models/User'

Vue.use(Vuex)

const database = new VuexORM.Database()

database.register(User)

const store = new Vuex.Store({
  plugins: [VuexORM.install(database)]
})

export default store
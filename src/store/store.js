import Vue from 'vue'
import Vuex from 'vuex'

// import * as actions from './actions.js'
// import * as getters from './getters.js'
// import * as mutations from './mutations.js'

import menu from './module/menu'
import users from './module/users'
import status from './module/status'


Vue.use(Vuex);

export const store = new Vuex.Store({
    // state:{
    //     //放的属性与数据
    // },
    // getters,
    // mutations,
    // actions

    modules:{
        menu,
        users,
        status
    }
})
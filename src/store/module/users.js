const state = {
    currentUser:null,
}

const getters = {
    currentUser:state => state.currentUser
}

const mutations = {
    userStatus(state,user){
        if(user != null){
            state.currentUser = user;
            state.isLogin = true;
        }else{
            state.currentUser = null;
            state.isLogin = false;
        }
    }
}

const actions = {
    setUser({commit},user){
        commit('userStatus',user);
    }
}

export default{
    state,
    getters,
    mutations,
    actions
}
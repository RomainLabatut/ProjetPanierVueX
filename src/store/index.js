import {createStore} from 'vuex'

export default createStore({
    state:{
        panier:0,
 

    },
    getters:{
         getPanier(state){
             return state.panier
         }
     },
     actions:{
        increment(context){
             context.commit('UpdatePanier')
         }
     },
     mutations:{
         updatePanier(state){
             state.panier++
         }
     }
    
})

// this.$store.panier
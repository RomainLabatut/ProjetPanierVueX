import {createStore} from 'vuex'

export default createStore({
    state:{
        panier:0,
        product: [
        {
          "imgUrl": "https://image.shutterstock.com/z/stock-photo-pair-of-white-sneakers-isolated-on-white-background-sport-shoes-712448377.jpg",
          "name": "Sport Shoes",
          "price": 110
        },
        {
          "imgUrl": "https://image.shutterstock.com/z/stock-photo-vintage-red-shoes-on-white-background-92008067.jpg",
          "name": "Red SNEAKER",
          "price": 91
        },
        {
          "imgUrl": "https://image.shutterstock.com/z/stock-photo-pink-and-black-sport-woman-shoes-isolated-on-white-background-709418083.jpg",
          "name": "Sport Shoes Women",
          "price": 94
        },

     ]

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
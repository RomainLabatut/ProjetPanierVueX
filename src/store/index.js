import {createStore} from 'vuex'

export default createStore({
    state:{
        panier:0,
        chaussure: [
        {
          "id": 1,
          "imgUrl": "https://image.shutterstock.com/z/stock-photo-pair-of-white-sneakers-isolated-on-white-background-sport-shoes-712448377.jpg",
          "name": "Sport Shoes",
          "price": "110€"
        },
        {
          "id": 2,
          "imgUrl": "https://image.shutterstock.com/z/stock-photo-vintage-red-shoes-on-white-background-92008067.jpg",
          "name": "Red SNEAKER",
          "price": "91€"
        },
        {
          "id": 3,
          "imgUrl": "https://image.shutterstock.com/z/stock-photo-pink-and-black-sport-woman-shoes-isolated-on-white-background-709418083.jpg",
          "name": "Sport Shoes Women",
          "price": "94€"
        },
        {
          "id": 4,
          "imgUrl": "https://image.shutterstock.com/z/stock-photo-children-s-autumn-or-winter-fashion-boots-isolated-on-white-background-708900334.jpg",
          "name": "Winter boots children",
          "price": "143€"
        },
        {
          "id": 5,
          "imgUrl": "https://image.shutterstock.com/z/stock-photo-bangkok-thailand-january-onitsuka-tiger-asics-gel-lyte-iii-on-january-in-bangkok-292088969.jpg",
          "name": "Sports shoes Red-White",
          "price": "150€"
        },
        {
          "id": 6,
          "imgUrl": "https://image.shutterstock.com/z/stock-photo-leather-shoes-isolated-on-white-background-including-clipping-path-216565609.jpg",
          "name": "Black leather shoes",
          "price": "250€"
        },
        {
          "id": 7,
          "imgUrl": "https://image.shutterstock.com/z/stock-photo-casual-shoes-on-white-background-included-clipping-path-667459072.jpg",
          "name": "Shoes Canvas",
          "price": "50€"
        },
        {
          "id": 8,
          "imgUrl": "https://image.shutterstock.com/z/stock-photo-white-sneakers-on-white-background-including-clipping-path-1100736923.jpg",
          "name": "Shoes White",
          "price": "85€"
        },
        {
          "id": 9,
          "imgUrl": "https://image.shutterstock.com/z/stock-photo-yellow-sneakers-15066415.jpg",
          "name": "Sneakers Yellow",
          "price": "125€"
        }
      ],
      listePanier: []
    },
    getters:{
         getPanier(state){
             return state.panier
         },
         getProduct(state){
            return state.chaussure
        },
        // getPanier(state){
        //   return state.listeProduit
        // }
           
     },
     actions:{
        increment(context){
             context.commit('UpdatePanier')
         }
     },
     mutations:{
         updatePanier(state, listeProduit){
             state.listePanier.push(listeProduit)
         }
     }
})


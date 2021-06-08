<template>
<div class="aligne">
    <div class="card-group">
        <div class="card" v-for="product in getProduct" v-bind:key="product" style="width: 18rem;">
            <img v-bind:src="product.imgUrl" class="imgSize" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ product.name }}</h5>
                <p class="card-text">{{ product.price }}</p>
                <a href="#" v-on:click="increment(product.id)" class="btn btn-primary">Ajouter au panier</a>
            </div>
        </div>
    </div>
</div>

</template>

<script>

export default {
  methods:{
    increment: function(chaussure){
      this.$store.commit('updatePanier',chaussure)
    },
    addToCard: function(){
      this.$store.dispatch('updatePanier')
    }
  },
  computed:{
    getProduct:function(){
      return this.$store.getters.getProduct
    }
  }

}

</script>

<style>
.aligne{
    display: flex ;
    justify-content: center;
    align-items: center;
}

</style>
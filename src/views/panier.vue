<template>
 <h1> PAGE PANIER</h1>
<div>
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Nom du produit</th>
                <th scope="col">Prix</th>
                <th scope="col">Quantité</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="panier in getPanier" v-bind:key="panier">
            <th scope="row">{{panier.id}}</th>
                <td>{{panier.name}}</td>
                <td>{{panier.price}}</td>
                <td>{{panier.imageUrl}}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
    computed:{
        getPanier: function(){
            return this.$store.getters.getPanier
        }
    },
}
</script>

<style>

</style>
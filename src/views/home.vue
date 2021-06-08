<template>
<div class="aligne">
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button v-on:click="increment" class="btn btn-primary">Go somewhere</button> 
  </div>
</div>

<div class="card-group">
        <div class="card" v-for="product in chaussure" v-bind:key="product" style="width: 18rem;">
            <img v-bind:src="product.imgUrl" class="imgSize" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ product.name }}</h5>
                <p class="card-text">{{ product.price }}</p>
                <a href="#" v-on:click="count" class="btn btn-primary">Ajouter au panier</a>
            </div>
        </div>
    </div>
</div>

</template>

<script>

export default {
         chaussure: [
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
        

     ]
  
}
</script>

<style>
.aligne{
    display: flex ;
    justify-content: center;
    align-items: center;
}

</style>
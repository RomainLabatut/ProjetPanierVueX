<template>
<div class="aligne">
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button v-on:click="increment" class="btn btn-primary">Go somewhere</button> 
  </div>
</div>

 <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <button v-on:click="increment" class="btn btn-primary">Go somewhere</button> 
  </div>
</div>
</div>

</template>

<script>

export default {
  
}
</script>

<style>
.aligne{
    display: flex ;
    justify-content: center;
    align-items: center;
}

</style>
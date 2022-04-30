<template>
  <div class="col-lg-4 col-sm-6 mb-4" @click="$emit('selected')">
    <div class="product-item">
      <a class="product-link" data-bs-toggle="modal">
        <div class="product-hover">
          <div class="product-hover-content"><i class="fas fa-plus fa-3x"></i></div>
        </div>
        <img class="img-fluid" :src="imageUrl" alt="#" />
      </a>
      <div class="product-caption">
        <div class="product-caption-heading">{{ item.heading }}</div>
        <div class="product-caption-subheading text-muted-mb0">{{ item.subheading }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  computed: {
    imageUrl () {
      return require(`@/assets/img/products/${this.item.id}.png`)
    }
  }
}
</script>
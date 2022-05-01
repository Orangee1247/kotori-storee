<template>
  <div class="product mb-4" :class="{ mobile }" @click="$emit('selected')">
    <div class="product-item">
      <a class="product-link">
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
    mobile () {
      return this.$device.mobile
    },
    imageUrl () {
      return require(`@/assets/img/products/${this.item.id}.png`)
    }
  }
}
</script>

<style scoped>
.product {
  flex: 0 0 auto;
  width: 33.33333333%;
}
.mobile {
  width: 50%;
}
.product .img-fluid {
  height: 356px;
  width: 356px;
}
.mobile .img-fluid {
  height: 180px;
  width: 180px;
}
</style>
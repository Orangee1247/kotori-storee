<template>
  <div class="commonModal" @click="$emit('close')">
    <div class="commonModal-center" @click.stop>
      <div class="commonModal-center-title">Mô tả sản phẩm</div>
      <div class="commonModal-center-content">
        <div class="commonModal-center-content-image">
          <img :src="imageUrl" />
        </div>
      </div>
      <div class="commonModal-center-text">
        Price: 120,000VND
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

<style scoped>
.commonModal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1055;
}
.commonModal-center {
  position: relative;
  flex: 1;
  max-width: 1140px;
  max-height: 700px;
  margin: auto 15px;
  background: #fff;
  padding: 25px 10px 20px;
  border-radius: 3px;
}
.commonModal-center-title {
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
  color: black;
}
.commonModal-center-text {
  color: #555;
  font-size: 12px;
}
</style>
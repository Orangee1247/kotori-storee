<template>
  <div>
    <!-- MASTHEAD-->
    <header class="masthead">
      <div class="container">
        <div class="masthead-subheading">
          <vue-typer text='🌻 Cảm ơn bạn đã ghé thăm 🌻' repeat='0' type-delay='120' caret-animation='smooth' />
        </div>
        <div class="masthead-heading text-uppercase">Chúng mình là Kotori Store</div>
        <a class="btn btn-primary btn-xl text-uppercase" href="#about">Tìm hiểu thêm</a>
      </div>
    </header>
    <!-- ABOUT-->
    <section class="page-section" id="about">
      <div class="container">
        <div class="text-center">
            <h2 class="section-heading text-uppercase">Giới thiệu Dịch vụ</h2>
            <h3 class="section-subheading text-muted">🌱 Chúng mình là Kotori Store, xin gửi đến bạn những sản phẩm chất lượng nhất từ Nhật Bản 🌱</h3>
        </div>
        <div class="row text-center">
          <div class="col-md-4">
            <span class="fa-stack fa-3x">
              <i class="fas fa-circle fa-stack-2x text-primary"></i>
              <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="my-3">Mặt hàng đa dạng</h4>
            <p class="text-muted">Kotori Store gửi đến bạn các những hàng nội địa Nhật Bản nhiều người tin dùng. Từ gói Vitamin, rau củ của nhà DHC đến những lọ nhỏ mắt Rotho giúp bạn nhìn rõ được giá trị bản thân. Và khi nghỉ ngơi trà chiều, bạn đừng quên những vị Kitkat mới lạ của chúng mình nhé.</p>
          </div>
          <div class="col-md-4">
            <span class="fa-stack fa-3x">
              <i class="fas fa-circle fa-stack-2x text-primary"></i>
              <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="my-3">Dễ dàng truy cập</h4>
            <p class="text-muted">Chúng mình hiện tại đăng các mặt hàng trên nhiều nền tảng như Facebook, Instagram cũng như website các bạn đang theo dõi. Kotore Store sẽ cố gắng cập nhật thông tin các sản phẩm nhanh chóng giúp bạn chốt đơn nhanh bổ rẻ cùng các chương trình khuyến mại trong tương lai.</p>
          </div>
          <div class="col-md-4">
            <span class="fa-stack fa-3x">
              <i class="fas fa-circle fa-stack-2x text-primary"></i>
              <i class="fas fa-clock fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="my-3">Trả hàng nhanh chóng</h4>
            <p class="text-muted">Với phương châm thời gian là tiền bạc, chúng mình sẽ cố gắng trả hàng sớm nhất đến bạn trong vòng 1 tuần với hàng có sẵn và 3 ~ 4 tuần với hàng order mới. Càng nhiều mặt hàng được order mới thì chúng mình càng có thể gom đơn và gửi về Việt Nam được sớm hơn.</p>
          </div>
        </div>
      </div>
    </section>
    <!-- PRODUCT-->
    <section class="page-section bg-light" id="product">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">Sản Phẩm</h2>
          <h3 class="section-subheading text-muted">🌱 Cùng xem qua những sản phẩm nội địa được ưa chuộng ở Nhật Bản nhé 🌱</h3>
        </div>
        <b-form-select v-model="selectingCategory" :options="categoryOptions" class="mb-3"></b-form-select>
        <div class="row">
          <product-item v-for="item in productList" :key="item.id" :item="item" @selected="selectItem(item)" />
        </div>
      </div>
    </section>
    <!-- CONTACT-->
    <section class="page-section" id="contact">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">Liên hệ</h2>
          <h3 class="section-subheading text-muted">Đặt hàng sản phẩm qua Facebook và Instagram</h3>
        </div>
        <div class="contact">
          <img class="mx-auto rounded-circle" src="@/assets/img/logo.jpg" alt="..." />
          <h4>Kotori Store</h4>
          <p class="text-muted">Hàng xách tay nội địa Nhật Bản</p>
          <a class="btn btn-dark btn-social mx-2" href="https://www.facebook.com/Kotori.Storee" target="_blank"><i class="fab fa-facebook-f"></i></a>
          <a class="btn btn-dark btn-social mx-2" href="https://www.instagram.com/kotori.storee/" target="_blank"><i class="fab fa-instagram"></i></a>
          <a class="btn btn-dark btn-social mx-2" href="https://kotori-store.netlify.app/" target="_blank"><i class="fas fa-globe"></i></a>
        </div>
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <p class="large text-muted">Vui lòng liên hệ với chúng mình qua inbox Facebook, Instagram và theo dõi sản phẩm mới nhất</p>
          </div>
        </div>
      </div>
    </section>
    <!-- FOOTER-->
    <footer class="footer py-4" id="footer">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-4 text-lg-start">Copyright &copy; Kotori Store 2022</div>
          <div class="col-lg-4 text-lg-center"></div>
          <div class="col-lg-4 text-lg-end backTop">
            <a href="#product">Quay lại sản phẩm <i class="fas fa-arrow-up"></i></a>
          </div>
        </div>
      </div>
    </footer>
    <!-- PRODUCT MODAL -->
    <transition name="modal">
      <product-detail v-if="selectingItem" :item="selectingItem" @close="selectItem(null)" />
    </transition>
  </div>
</template>

<script>
import PRODUCT_DATAS from '@/resources/productData'
import PRODUCT_CATEGORIES from '@/resources/productCategory'
import ProductItem from '@/components/ProductItem.vue'
import ProductDetail from '@/components/ProductDetail.vue'

export default {
  components: {
    ProductItem,
    ProductDetail
  },
  data () {
    return {
      selectingCategory: null,
      selectingItem: null
    }
  },
  methods: {
    selectItem (item) {
      this.selectingItem = item
    }
  },
  computed: {
    categoryOptions () {
      const defaultOption = { value: null, text: 'Danh mục sản phẩm' }
      return [defaultOption, ...PRODUCT_CATEGORIES]
    },
    productList () {
      if (this.selectingCategory) return PRODUCT_DATAS.filter(v => v.category === this.selectingCategory)
      return PRODUCT_DATAS.slice(0, 6)
    }
  }
}
</script>
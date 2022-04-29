<template>
  <div>
    <!-- Masthead-->
    <header class="masthead">
      <div class="container">
        <div class="masthead-subheading">🌻 Cảm ơn bạn đã ghé thăm 🌻</div>
        <div class="masthead-heading text-uppercase">Chúng mình là Kotori Store</div>
        <a class="btn btn-primary btn-xl text-uppercase" href="#services">Tìm hiểu thêm</a>
      </div>
    </header>
    <!-- Services-->
    <section class="page-section" id="services">
      <div class="container">
        <div class="text-center">
            <h2 class="section-heading text-uppercase">Services</h2>
            <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
        <div class="row text-center">
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fas fa-circle fa-stack-2x text-primary"></i>
              <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="my-3">E-Commerce</h4>
            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
          </div>
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fas fa-circle fa-stack-2x text-primary"></i>
              <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="my-3">Responsive Design</h4>
            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
          </div>
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fas fa-circle fa-stack-2x text-primary"></i>
              <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="my-3">Web Security</h4>
            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
          </div>
        </div>
      </div>
    </section>
    <!-- product Grid-->
    <section class="page-section bg-light" id="product">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">Sản Phẩm</h2>
          <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
        <div class="row">
          <product-item v-for="item in PRODUCT_DATA" :key="item.id" :item="item" @selected="selectItem(item)" />
        </div>
      </div>
    </section>
    <!-- Team-->
    <section class="page-section bg-light" id="team">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
          <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
          <div class="row">
            <div class="col-lg-4">
              <div class="team-member">
                <img class="mx-auto rounded-circle" src="@/assets/img/team/1.jpg" alt="..." />
                <h4>Parveen Anand</h4>
                <p class="text-muted">Lead Designer</p>
                <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i class="fab fa-twitter"></i></a>
                <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="team-member">
                <img class="mx-auto rounded-circle" src="@/assets/img/team/2.jpg" alt="..." />
                <h4>Diana Petersen</h4>
                <p class="text-muted">Lead Marketer</p>
                <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile"><i class="fab fa-twitter"></i></a>
                <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Facebook Profile"><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="team-member">
                <img class="mx-auto rounded-circle" src="@/assets/img/team/3.jpg" alt="..." />
                <h4>Larry Parker</h4>
                <p class="text-muted">Lead Developer</p>
                <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i class="fab fa-twitter"></i></a>
                <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
          </div>
      </div>
    </section>
    <!-- Footer-->
    <footer class="footer py-4">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-4 text-lg-start">Copyright &copy; Your Website 2022</div>
          <div class="col-lg-4 my-3 my-lg-0">
            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          </div>
          <div class="col-lg-4 text-lg-end">
            <a class="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
            <a class="link-dark text-decoration-none" href="#!">Terms of Use</a>
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
import PRODUCT_DATA from '@/utils/productData'
import ProductItem from '@/components/ProductItem.vue'
import ProductDetail from '@/components/ProductDetail.vue'

export default {
  components: {
    ProductItem,
    ProductDetail
  },
  data () {
    return {
      PRODUCT_DATA,
      selectingItem: null
    }
  },
  methods: {
    selectItem (item) {
      this.selectingItem = item
    }
  }
}
</script>
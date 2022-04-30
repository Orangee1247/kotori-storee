<template>
  <b-navbar class="fixed-top" toggleable="sm" type="dark" variant="dark">
    <div class="container">
      <b-navbar-brand>Kotori Store</b-navbar-brand>
      <b-navbar-toggle target="nav-item-collapse">
        MENU
        <i class="fas fa-bars ms-1" />
      </b-navbar-toggle>
      <b-collapse id="nav-item-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#about">Giới thiệu</b-nav-item>
          <b-nav-item href="#product">Sản Phẩm</b-nav-item>
          <b-nav-item href="#contact">Liên hệ</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>
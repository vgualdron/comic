<template>
  <div>
    <nav id="navbar" class="navbar is-fixed-top" :class="selectedNavTheme">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <img
            :src="companyLogo"
            alt="Comics project"
            width="100"
            height="28"
          />
        </a>
        <div
          @click="active = !active"
          :class="{ 'is-active': active }"
          class="navbar-burger burger"
          data-target="navbarExampleTransparentExample"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div :class="{ 'is-active': active }" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a @click="showPoints" class="navbar-item">
                  <span><font-awesome-icon icon="fa-solid fa-flag-checkered" /> Show table points </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import companyLogo from "../../assets/img/logo.png";

export default {
  name: 'Navbar',
  data() {
    return {
      active: false,
      companyLogo: companyLogo,
      selectedNavTheme: "is-warning",
    };
  },
  methods: {
    showPoints() {
      this.$emit('showPoints');
    },
  },
};
</script>

<style>
</style>
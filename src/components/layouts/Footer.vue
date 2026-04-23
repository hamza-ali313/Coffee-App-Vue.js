<template>
  <footer class="footer-section text-white" :class="{ bg_green: hasBg, negm: negm }">
    <div class="container">
      <h1 class="larg_f">come in<span>,</span> stay a while</h1>
      <div class="sec_heading text-center py-lg-4 py-md-4">
        <h2 style="color: #fff; margin: 0">join our community</h2>
        <p style="width: unset">
          Be the first one to know about our limited editions and special offers.
        </p>
      </div>
      <!-- Newsletter -->
      <div class="newsletter">
        <div class="input-wrapper">
          <i class="bi bi-envelope-fill"></i>
          <input type="text" placeholder="type your email..." />
          <button class="submit-btn menu-btn">SUBMIT</button>
        </div>
      </div>

      <!-- Main Footer -->
      <div class="row mt-5">
        <!-- Left -->
        <div class="col-lg-8 col-md-8 -sm-12 text-md-start text-center">
          <router-link to="/" style="background-image: none">
            <img src="@/assets/images/footlogo.png" class="logo mb-3" />
          </router-link>
          <p class="desc">
            A neighbourhood café offering high-quality coffee, fresh and brunch in a calm,
            nature-inspired setting.
          </p>

          <div class="social mt-3">
            <ul
              class="list-unstyled d-flex justify-content-md-start justify-content-center gap-2"
            >
              <li>
                <a href="#" target="_blank">
                  <i class="bi bi-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i class="bi bi-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i class="bi bi-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Explore -->
        <div class="col-6 col-lg-2 col-md-2 col-sm-6 text-md-start">
          <h5>Working</h5>
          <ul class="">
            <li>
              <router-link to="/food-drinks">
                <p>Menu</p>
              </router-link>
            </li>
            <li>
              <router-link to="/whatsonevent">
                <p>Whats On</p>
              </router-link>
            </li>
            <li>
              <router-link to="/our-story">
                <p>Our Story</p>
              </router-link>
            </li>
            <li>
              <router-link to="/whatsonevent">
                <p>Our Local Community</p>
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Quick Links -->
        <div class="col-6 col-lg-2 col-md-2 col-sm-6 text-md-start">
          <h5>QUICK LINKS</h5>
          <ul class="">
            <li>
              <router-link to="/contactus">
                <p>Contact us</p>
              </router-link>
            </li>
            <li>
              <router-link to="/whatsonevent">
                <p>Art at Dee</p>
              </router-link>
            </li>
            <li>
              <router-link to="/whatsonevent">
                <p>Blog & Shop</p>
              </router-link>
            </li>
            <li>
              <router-link to="/locations">
                <p>Locations</p>
              </router-link>
            </li>
            <li>
              <router-link to="/faqs">
                <p>FAQ’s</p>
              </router-link>
            </li>
            <li>
              <router-link to="">
                <p>Careers</p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom -->
      <div
        class="footer-bottom d-lg-flex d-sm-flex justify-content-between mt-4 py-3 text-md-start text-center"
      >
        <p>© 2026 Dee Café. Made with care for our community</p>
        <div>
          <span>Privacy Policy</span>
          <span class="mx-2">|</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const props = defineProps({
  hasBg: {
    type: Boolean,
    default: true,
  },
  negm: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped lang="scss">
// Footer-specific overrides only
// Main styles are in global SCSS
</style>

<template>
  <footer class="footer-section text-white" :class="{ 'bg_green': hasBg }">
    <div class="container">
      <h1 class="larg_f">come in, stay a while</h1>
      <div class="sec_heading text-center py-4">
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
          <button class="submit-btn">SUBMIT</button>
        </div>
      </div>

      <!-- Main Footer -->
      <div class="row mt-5">
        <!-- Left -->
        <div class="col-md-8 text-start">
          <img src="@/assets/images/Footlogo.png" class="logo mb-3" />

          <p class="desc">
            A neighbourhood café offering high-quality coffee, fresh and brunch in a calm,
            nature-inspired setting.
          </p>

          <div class="social mt-3">
            <ul class="list-unstyled d-flex gap-2">
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
        <div class="col-md-2 text-start">
          <h5>Working</h5>
          <ul class="">
            <li>
              <a href="#">
                <p>Menu</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>Whats On</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>Our Story</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>Our Local Community</p>
              </a>
            </li>
          </ul>
        </div>

        <!-- Quick Links -->
        <div class="col-md-2 text-start">
          <h5>QUICK LINKS</h5>
          <ul class="">
            <li>
              <a href="#">
                <p>Contact us</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>Art at Dee</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>Blog & Shop</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>Locations</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>FAQ’s</p>
              </a>
            </li>
            <li>
              <a href="#">
                <p>Careers</p>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom -->
      <div class="footer-bottom d-flex justify-content-between mt-4 pt-3">
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
    default: true
  }
});
</script>

<style scoped lang="scss">
// Footer-specific overrides only
// Main styles are in global SCSS
</style>

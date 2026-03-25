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
<style>
@font-face {
  font-family: "TitilliumWeb-Italic";
  src: url(../fonts/TitilliumWeb-Italic.ttf);
}

@font-face {
  font-family: "DramaturgA";
  src: url(../fonts/DramaturgA.otf);
}

@font-face {
  font-family: "DramaturgB";
  src: url(../fonts/DramaturgB.otf);
}

@font-face {
  font-family: "Dramaturg";
  src: url(../fonts/Dramaturg.otf);
}

@font-face {
  font-family: "DaughterDemoRegular";
  src: url(../fonts/DaughterDemoRegular.ttf);
}

@font-face {
  font-family: "TitilliumWeb-Light";
  src: url(../fonts/TitilliumWeb-Light.ttf);
}

@font-face {
  font-family: "DramaturgSC";
  src: url(../fonts/DramaturgSC.otf);
}

.bg_green {
  background-color: #2a4b1f;
  padding: 0 0 0 0 !important;
}

.footer-section {
  background-image: url("@/assets/images/footbg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 200px 0 0 0;
  font-family: sans-serif;

  .newsletter {
    background: transparent;
    margin-bottom: 40px;

    .input-wrapper {
      border: none;
      background: url(/src/assets/images/inputbg.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      outline: none;
      width: 100%;
      color: #333;
      height: 80px;
      position: relative;

      .icon {
        margin-right: 10px;
        font-size: 18px;
      }

      input {
        border: none;
        outline: none;
        width: 80%;
        color: #333;
        position: absolute;
        top: 33%;
        left: 6%;
        font-weight: 500;
        font-family: "TitilliumWeb-Italic";
        background: transparent;

        &::placeholder {
          color: #000;
          background: transparent !important;
          font-weight: 500;
          font-family: "TitilliumWeb-Italic";
        }
      }
    }

    .submit-btn {
      background-image: url(/src/assets/images/obtnbg.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      border: none;
      padding: 17px 51px;
      color: white;
      position: absolute;
      top: 15%;
      right: 1px;
      font-weight: 600;
      background-color: transparent;
    }
  }

  .logo {
    width: 120px;
  }

  .desc {
    max-width: 350px;
  }

  h5 {
    font-family: cursive;
    margin-bottom: 15px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 8px;
      cursor: pointer;
      font-size: 14px;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .social li a {
    border: 1px solid #fff;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    background: #fff;
    color: #d08a44;
  }

  .footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    font-size: 13px;
  }
}

.footer-bottom p,
.footer-bottom span {
  font-family: "TitilliumWeb-Light";
}

footer .container {
  max-width: 1150px;
}

footer a p {
  color: #ffff;
}

h5 {
  font-family: "DramaturgSC" !important;
  font-size: 54px;
  line-height: 40px;
}

.input-wrapper i {
  position: absolute;
  top: 32%;
  left: 3%;
  font-size: 24px;
}

.larg_f {
  font-family: "DaughterDemoRegular";
  text-transform: capitalize;
  font-size: 70px;
}
</style>

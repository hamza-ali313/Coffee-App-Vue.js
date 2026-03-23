<template>
  <footer class="footer-section text-white">
    <div class="container">
      <!-- Newsletter -->
      <div class="newsletter d-flex align-items-center justify-content-between">
        <div class="input-wrapper d-flex align-items-center">
          <span class="icon">✉</span>
          <input type="text" placeholder="type your email..." />
        </div>

        <button class="submit-btn">SUBMIT</button>
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
          <h5>EXPLORE</h5>
          <ul class="list-unstyled">
            <li><a href="#">Menu</a></li>
            <li><a href="#">Whats On</a></li>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Our Local Community</a></li>
          </ul>
        </div>

        <!-- Quick Links -->
        <div class="col-md-2 text-start">
          <h5>QUICK LINKS</h5>
          <ul class="list-unstyled">
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Art at Dee</a></li>
            <li><a href="#">Blog & Shop</a></li>
            <li><a href="#">Locations</a></li>
            <li><a href="#">FAQ’s</a></li>
            <li><a href="#">Careers</a></li>
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

<style>
.footer-section {
  background: linear-gradient(135deg, #2e5b2f, #234a25);
  padding: 60px 0;
  font-family: sans-serif;

  .newsletter {
    background: transparent;
    margin-bottom: 40px;

    .input-wrapper {
      flex: 1;
      background: url("@/assets/images/input-bg.png") no-repeat center;
      background-size: cover;
      border-radius: 50px;
      padding: 15px 20px;
      max-width: 800px;

      .icon {
        margin-right: 10px;
        font-size: 18px;
      }

      input {
        border: none;
        background: transparent;
        outline: none;
        width: 100%;
        color: #333;

        &::placeholder {
          color: #777;
        }
      }
    }

    .submit-btn {
      background: #d48b4f;
      border: none;
      padding: 12px 30px;
      border-radius: 50px;
      color: white;
      font-weight: 600;
      margin-left: 15px;
    }
  }

  .logo {
    width: 120px;
  }

  .desc {
    font-size: 14px;
    line-height: 1.6;
    max-width: 250px;
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

  .social span {
    display: inline-flex;
    width: 35px;
    height: 35px;
    background: #f3e6d8;
    color: #333;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    cursor: pointer;
  }

  .footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    font-size: 13px;
  }
}
</style>

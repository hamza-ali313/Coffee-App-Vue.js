<template>
  <div class="our_story">
    <div class="container">
      <div class="sec_heading text-center">
        <h2>Our Local community</h2>

        <p>
          We are proud to be part of the community in Barnes. We work with local suppliers
          and producers, source mostly UK ingredients, and open our walls and tables to
          local artists, groups and ideas.
        </p>

        <p class="mt-4">
          Dee is a space to share, connect and get involved, whether you’re a regular, a
          neighbour, or just passing through.
        </p>

        <OButton btntxt="learn more" />
      </div>
    </div>
  </div>
</template>

<script setup>
import OButton from "../ui/OButton.vue";
</script>

<style scoped>
.our_story {
  background-image: url(/src/assets/images/LocalCom.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 620px;
  padding: 50px 0 0 0;
}
p {
  width: 40%;
}
.menu-btn {
  padding: 21px 15px;
}
</style>

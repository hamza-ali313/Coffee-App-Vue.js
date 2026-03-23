<template>
  <div class="our_story">
    <div class="container">
      <div class="sec_heading text-start">
        <h2>Our Story</h2>

        <p>
          Dee Café was created with a simple yet important motto: healthy people, healthy
          planet. From the ingredients we choose to the way the space is designed and run,
          Dee is inspired by nature, community, and thoughtful design. If you’re curious
          about the thinking behind our choices, the people involved, and the journey
          we’re on, we’d love to share our story with you.
        </p>

        <OButton btntxt="get to know us" />
      </div>
    </div>
  </div>
</template>

<script setup>
import OButton from "../ui/OButton.vue";
</script>

<style scoped>
h2,
p {
  color: #fff;
}
p {
  margin: 0 0 20px 0;
}

.our_story {
  background-image: url("@/assets/images/OurStory.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 340px 20px 340px 200px;
}

.menu-btn {
    padding: 21px 15px;
}
</style>

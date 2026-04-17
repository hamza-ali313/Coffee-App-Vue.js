<template>
  <div class="bg_pink">
    <div class="orderahead_pg">
      <MobileHeader iconColor="" />
      <div class="pb-3">
        <SecHeading
          main_h="Order Ahead a pick at dee"
          sub_h="here is how it works"
          description="Alongside good food and coffee, we host a rotating programme of community events in
      Barnes, gatherings and exhibitions that reflect the people and ideas around us."
          :showLeaf="true"
        />
      </div>

      <OrdersAhead :steps="steps" />
      <BrowseMenu />
      <FAQSection />
      <GetInvolved />
    </div>
    <Footer :hasBg="true" />
  </div>
</template>

<script setup>
import MobileHeader from "../components/layouts/MobileHeader.vue";
import FAQSection from "../components/layouts/FAQ/FAQSection.vue";
import OrdersAhead from "../components/layouts/OrdersAhead.vue";
import GetInvolved from "../components/layouts/GetInvolved.vue";
import BrowseMenu from "../components/layouts/BrowseMenu.vue";
import Footer from "../components/layouts/Footer.vue";
import SecHeading from "../components/ui/SecHeading.vue";
import { steps } from "../data/gettinghere1.js";
</script>

<style lang="scss" scoped>
.d-bg {
}
</style>

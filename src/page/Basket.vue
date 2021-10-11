<template>
  <div class="order">
    <Basket />
  </div>
</template>

<script>
import Basket from "../components/BasketPage/Basket.vue";
export default {
  name: "Order",
  components: {
    Basket,
  },
};
</script>


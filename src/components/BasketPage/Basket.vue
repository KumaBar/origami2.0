<template>
  <div class="basket">
    <div class="basket-title">Корзина</div>
    <div class="baskset-warning" v-if="getOrderedItems.length <= 0">
      Корзина пуста
    </div>
    <div class="basket-list">
      <BasketItem v-for="item in getOrderedItems" :key="item.id" :item="item" />
    </div>
    <Spices/>
    <div class="basket-price"><span>Сумма вашего заказа:</span> <span>{{ getTotalPrice }} ₽</span></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BasketItem from "./BasketItem";
import Spices from './Spices'
export default {
  name: "Basket",
  computed: {
    ...mapGetters(["getOrderedItems", "getTotalPrice"]),
  },
  components: {
    BasketItem,
    Spices,
  },
};
</script>
<style>
.basket-title {
  font-size: 40px;
  padding-left: 20px;
  margin-bottom: 20px;
  padding-top:70px;
}
.basket-price {
  font-size: 32px;
  padding-right: 10px;
   padding-left: 10px;
  padding-top: 20px;
  padding-bottom: 40px;
  text-align:center;
  display:flex;
  justify-content: space-around;
}
.baskset-warning {
  text-align: center;
  font-size: 20px;
  margin:100px;
}
.basket-set-item {
  max-width: 250px;
}
.basket-set-item-img {
  width: 100%;
  display: block;
}
@media (max-width: 1000px) {
  .basket-item-config {
    max-width: 250px;
  }
}
@media (max-width: 650px) {
  .basket-item {
    padding: 5px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .basket-title{
    font-size:24px;
  }
  .basket-item-row {
    margin-left: 0;
    margin-right: 0;
    flex-direction: column;
    align-items: stretch;
  }
  .basket-item-img {
    width: 200px;
  }
  .basket-item-text {
    font-size: 14px;
  }
  .basket-item-descr {
    justify-content: center;
  }
  .basket-item-config {
    font-size: 28px;
    padding-top: 20px;
    padding-bottom: 30px;
    margin: 0 auto;
    align-items:center;
  }
  .basket-price {
    font-size: 20px;
  }
}
</style>
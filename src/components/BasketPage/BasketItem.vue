<template>
  <div class="basket-item">
    <div class="basket-item-row">
      <div class="basket-item-descr">
        <img class="basket-item-img" :src="item.img" />
        <div class="basket-item-text">
          <div class="basket-item-title">{{ item.title }}</div>
          <div
            class="basket-item-subtitle"
            v-for="item in item.descr"
            :key="item.title"
          >
            {{ item.title }}
          </div>
          <div v-if="!item.gram"></div>
          <div v-else-if="item.gram" class="basket-item-gram">{{ item.gram }} гр</div>
        </div>
      </div>
      <div class="basket-item-config">
        <img
          src="../../assets/minus.svg"
          class="basket-item-decrement"
          @click="decrementNumber(item)"
        />
        <div class="basket-item-number">{{ item.number }}</div>
        <img
          src="../../assets/plus.svg"
          class="basket-item-increment"
          @click="incrementNumber(item)"
        />
        <div class="basket-item-price">{{ price }} ₽</div>
        <div class="basket-item-remove" @click="removeOrderedItems(item)">
          ×
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "BasketItem",
  props: {
    item: {
      type: Object,
      require: true,
    },
  },
  computed: {
    price() {
      return this.item.price * (this.item.number <= 0 ? 1 : this.item.number);
    },
  },
  methods: {
    ...mapActions(["incrementNumber", "decrementNumber", "removeOrderedItems"]),
  },
};
</script>
<style>
.basket-item {
  font-size: 20px;
  padding: 10px;
   max-width:1100px;
  margin:0 auto;
  margin-bottom:20px;
  border-radius:10px;
box-shadow: 0px 5px 13px 0px rgba(34, 60, 80, 0.2);
}
.basket-item-subtitle {
  font-size: 12px;
  color: gray;
  line-height: 1.5;
}
.basket-item:last-child {
  border: none;
}
.basket-item-img {
  max-width: 150px;
  max-height: 150px;
  margin-right: 20px;
  margin-left: 5px;
  flex-basis: 50%;
  background:darkblue;
}
.basket-item-title {
  margin-bottom: 20px;
}
.basket-item-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  padding-bottom:20px;
  
}
.basket-item-descr {
  display: flex;

}
.basket-item-text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 50%;
}
.basket-item-config {
  display: flex;
  justify-content: space-between;
  max-width: 300px;
  width: 100%;
  font-size: 30px;
}
.basket-item-decrement,
.basket-item-increment {
  width: 30px;
}
.basket-item-remove {
  padding: 0px 5px;
}
.basket-item-decrement,
.basket-item-increment,
.basket-item-remove {
  text-align: center;
  cursor: pointer;
}
</style>
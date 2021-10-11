<template>
  <div :class="{main:true,pOpen:getOpenPopup}">
    <Popup />
    <Navigation />
    <Burger />
    <List />
  </div>
</template>

<script>
import Navigation from "../components/MainPage/Navigation";
import Burger from "../components/MainPage/Burger";
import List from "../components/MainPage/List";
import Popup from "../components/Popup/Popup";
import { mapGetters } from 'vuex';
export default {
  name: "Main",
  components: {
    Navigation,
    Burger,
    List,
    Popup,
  },
  computed:{
    ...mapGetters(['getOpenPopup'])
  }
};
</script>

<style>

</style>
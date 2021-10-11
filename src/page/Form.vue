<template>
  <div class="forma">
    <div class="form"><FormLeft /> <FormRight /></div>
  </div>
</template>

<script>
import FormLeft from "../components/PlaceOrder/FormLeft";
import FormRight from "../components/PlaceOrder/FormRight";
export default {
  name: "Form",
  components: {
    FormLeft,
    FormRight,
  },
};
</script>

<style>
.form {
  display: flex;
  justify-content: space-between;
}
.form-title{
  font-size: 40px;
  padding-left: 40px;
  margin-bottom: 20px;
  padding-top:70px;
}
.form-left {
  flex-basis: 50%;
}
@media (max-width: 1000px) {
  .form-left-title {
    display: none;
  }
  .form-right-title {
    display: block;
  }
  .form {
    flex-direction: column-reverse;
  }
  .form-right {
    position: relative;
    padding-left: 20px;
    top: 0;
    max-width: 600px;
  }
}
@media (max-width: 650px) {
  .form-right-title {
    font-size: 24px;
  }
  .form-right-item {
    width: 100%;
    max-width: 400px;
  }
}
</style>
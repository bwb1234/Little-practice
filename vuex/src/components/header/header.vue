<template>
  <div class="top">
    <div class="top-1">
      <img class="img" @click="add" src="../../../static/zuojiantou.png" alt="">
      <p>{{msg}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  props: {
    msg: String
  },
  methods: {
    add() {
      this.$router.push("/");
    }
  }
};
</script>
<style>
.top {
  display: flex;
  width: 100%;
  background: #53ab3a;
  color: #fff;
  align-items: center;
  height: 40px;
  font-size: 18px;
}
.top-1 {
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

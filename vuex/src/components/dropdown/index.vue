<template>
  <div>
    <div class="mont">
      <div v-for="(item,index) in list">
        <p @click="changetab(index)">{{item.title}}</p>
      </div>
    </div>
    <div v-if="flag">
      <ul id="ul">
        <div v-for="(item,index) in list">
          <div v-if="item.msg&&ind==index">
            <div v-if="flag" class="mk">
              <div v-if="ind==index">
                <div
                  v-for=" val in  item.msg"
                  class="li"
                  @click="sorttap(item.title,val.mk)"
                >{{val.mk}}</div>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>
<script>
import city from "../city/city.vue";
import utils from "../../utils/utils";
export default {
  data() {
    return {
      flag: false,
      list: [],
      ind: -1
    };
  },
  components: {
    city
  },
  methods: {
    changetab(index) {
      this.flag = !this.flag;
      this.ind = index;
    },
    sorttap(title, mk) {
      this.$emit("parent", title, mk);
    }
  },
  mounted() {
    utils("/list").then(res => {
      this.list = res;
      let arr = [];
    });
  }
};
</script>
<style>
.li {
  font-size: 14px;
  padding-left: 16px;
  height: 30px;
  padding: 12px 0;
  border-bottom: 1px solid #ccc;
  padding-left: 14px;
}
.mk {
  width: 100%;
  background: #fff;
  font-size: 13px;
}
.mont {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 18px;
  height: 50px;
  font-size: 14px;
  border-bottom: 1px solid #ccc;
  align-items: center;
}
body {
  position: relative;
  overflow: hidden;
}
#ul {
  flex-grow: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 90px;
  left: 0;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
}
</style>

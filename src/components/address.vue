<template>
  <div class="selectArea">
    <ul class="address">
      <li class="province addressList" @click="getProvince()">
        {{selectPro.text}}
        <i class="icon" :class="{active:status1}"></i>
        <ul class="list provinceList" :class="{hide:!status1}">
          <li v-for="(item, index) in province" :key="index" @click="choosePro(item,index)">
            <p>{{item}}</p>
          </li>
        </ul>
      </li>
      <li class="city addressList" @click="getCity()">
        {{selectCity.text}}
        <i class="icon" :class="{active:status2}"></i>
        <ul class="list cityList" :class="{hide:!status2}">
          <li v-for="(item, index) in city" :key="index" @click="chooseCity(item,index)">
            <p>{{item}}</p>
          </li>
        </ul>
      </li>
      <li class="town addressList" @click="getTown()">
        {{selectTown.text}}
        <i class="icon" :class="{active:status3}"></i>
        <ul class="list townList" :class="{hide:!status3}">
          <li v-for="(item, index) in town" :key="index" @click="chooseTown(item,index)">
            <p>{{item}}</p>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      status1: false,
      status2: false,
      status3: false
    };
  },
  props: {
    province: {
      type: Array,
      default: function() {
        return ["11", "22", "33", "44", "55"];
      }
    },
    town: {
      type: Array,
      default: function() {
        return ["11", "22"];
      }
    },
    city: {
      type: Array,
      default: function() {
        return ["11", "22"];
      }
    },
    selectPro: {
      type: Object,
      default: function() {
        return {
          value: 0,
          text: "请选择"
        };
      }
    },
    selectCity: {
      type: Object,
      default: function() {
        return {
          value: 0,
          text: "请选择"
        };
      }
    },
    selectTown: {
      type: Object,
      default: function() {
        return {
          value: 0,
          text: "请选择"
        };
      }
    }
  },
  methods: {
    getProvince() {
      this.status1 = !this.status1;
    },
    getCity() {
      this.status2 = !this.status2;
    },
    getTown() {
      this.status3 = !this.status3;
    },
    choosePro(item, index) {
      this.selectPro.text = item;
      this.$emit("province", this.selectPro.text, this.selectPro.value);
    },
    chooseCity(item, index) {
      this.selectCity.text = item;
      this.$emit("city", this.selectCity.text, this.selectCity.value);
    },
    chooseTown(item, index) {
      this.selectTown.text = item;
      this.$emit("town", this.selectTown.text, this.selectTown.value);
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.hide {
  display: none;
}
.selectArea {
  width: 360px;
  height: 32px;
  line-height: 32px;
  margin: 0 auto;
}
.address {
  display: flex;
  width: 100%;
  height: 100%;
}
.address .addressList {
  position: relative;
  flex: 1;
  height: 100%;
  list-style: none;
  border: 1px solid #d6d6d2;
}
.address .city {
  margin: 0 3px;
}
.icon {
  position: absolute;
  right: 3px;
  top: 50%;
  width: 10px;
  height: 10px;
  margin-top: -5px;
  background: url(../assets/icon.png) no-repeat;
  background-size: contain;
}
.active {
  transform: scale(-1);
}
.list {
  position: absolute;
  top: 32px;
  left: -1px;
  width: 100%;
  height: 120px;
  border: 1px solid #b5b6a9;
  overflow-y: scroll;
}
.list li {
  height: 30px;
  line-height: 30px;
  list-style: none;
}
.list li:nth-child(even) {
  background: #f5f5f3;
}
.list li:nth-child(odd) {
  background: #ffffff;
}
.list li:hover {
  transform: scale(1, 1.2);
  transition: 0.1s;
}
</style>

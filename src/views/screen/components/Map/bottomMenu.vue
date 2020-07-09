<template>
  <div class="bottom-menu-container">
    <!-- <div
      v-for="company in companies"
      :key="company.value"
      class="company-wrapper hbtn "
      :class="[selectedCompany===company.value?'active':'hb-fill-right-rev']"
      @click="selectedCompany=company.value"
    >
      {{ company.name }}
    </div> -->
    <div class="all">
      <div
        class="itemer"
        :class="{ center: parseInt(company.value) === 6 ,
        active:selectedCompany.value === company.value}"
        v-for="company in companies"
        :key="company.value"
        :style="{
          transform: `translateX(${15 *
            parseInt(company.value - 6)}px) translateZ(${-Math.abs(
            5 * parseInt(company.value - 6)
          )}px) rotateY(${1 * parseInt(company.value - 6)}deg)`,
          'background-image':`url(${company.pic})`
        }"
        @click="changeCompany(company.value)"
      >
        <div class="explainer" v-if="parseInt(company.value) === 6">
          <span>{{selectedCompany.name}}</span>
        </div>
        <div class="text">{{ company.name }}</div>
      </div>
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedCompany: this.companies[0]
    };
  },
  props: {
    companies: {}
  },
  watch: {
    selectedCompany(val) {
      this.$emit("changeCompany", val);
    }
  },
  methods: {
    changeCompany(index) {
      this.selectedCompany = this.companies[index];
    }
  }
};
</script>
<style lang="scss" scoped>
$width: 100px;
body {
  font-family: "Raleway", sans-serif;
  // background-image: radial-gradient(circle at center, #899dc4, #495d84);
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  // background: radial-gradient(ellipse at bottom, #1b2735, #090a0f);
  font-weight: 300;
  .all {
    display: flex;
    perspective: 10px;
    // transform: perspective(300px) rotateX(20deg);
    will-change: perspective;
    perspective-origin: center center;
    transition: all 1.3s ease-out;
    justify-content: center;
    transform-style: preserve-3d;
  }
  .all:hover {
    perspective: 1000px;
    transition: all 1.3s ease-in;
    // transform: perspective(10000px) rotateX(0deg);
    .text {
      text-align: center;
      opacity: 1;
      width: $width;
    }
    & > div {
      opacity: 1;
      transition-delay: 0s;
    }
    .explainer {
      opacity: 0;
    }
  }

  .itemer {
    width: $width;
    height: 50px;
    transform-style: preserve-3d;
    border-radius: 10px;
    border: 1px solid #fff;
    box-shadow: 0 0 20px 5px rgba(100, 100, 255, 0.4);
    opacity: 0;
    transition: all 0.3s ease;
    transition-delay: 0.5s;
    position: relative;
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: #58d;
    cursor: pointer;
    background-blend-mode: color-burn;

    &:hover {
      box-shadow: 0 0 30px 10px rgba(100, 100, 255, 0.6);
      background-color: #ccf;
    }
  }
  .text {
    transform: translateY(30px);
    opacity: 0;
    transition: all 0.3s ease;
    bottom: 0;
    left: 5px;
    position: absolute;
    will-change: transform;
    color: black;
    text-shadow: 0 0 5px rgba(100, 100, 255, 0.6);
  }
  .active{
    background-color: yellow;
    &:hover {
      box-shadow: 0 0 30px 10px rgba(100, 100, 255, 0.6);
      background-color: yellow;
    }
  }
  .center {
    opacity: 1;
  }
  
  .explainer {
    font-weight: 300;
    font-size: 1rem;
    text-align: center;
    color: #fff;
    transition: all 0.6s ease;
    width: 100%;
    height: 100%;
    background-color: #303050;
    background-image: radial-gradient(circle at center top, lightgrey, #3477f3);
    border-radius: 10px;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ref {
    background-color: #000;
    background-image: linear-gradient(to bottom, #d80, #c00);
    border-radius: 3px;
    padding: 7px 10px;
    position: absolute;
    font-size: 16px;
    bottom: 10px;
    right: 10px;
    color: #fff;
    text-decoration: none;
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
    &::first-letter {
      font-size: 12px;
    }
  }
}

// @import "./button-hover.css";
// .bottom-menu-container {
//   display: flex;
//   flex-wrap: wrap;
//   width: 660px;
//   .company-wrapper {
//     width: 110px;
//     border: 1px solid black;
//     text-align: center;
//     padding: 10px 0;
//     border-radius: 10px;
//     margin: 10px;
//     cursor: pointer;

//   }
//   .active {
//     background-color: #367af1 !important;
//     color:white !important;
//   }
// }
</style>

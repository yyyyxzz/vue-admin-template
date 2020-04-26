import Vue from 'vue'
// const install = function(Vue) {
  Vue.directive("preventReClick", {
    inserted(el, binding) {
      el.addEventListener("click", () => {
        if (!el.disabled) {
          el.disabled = true;
          setTimeout(() => {
            el.disabled = false;
          }, binding.value || 2000);
        }
      });
    }
  });
// }

// if (window.Vue) {
//   Vue.use(install); // eslint-disable-line
// }

// const preventReClick.install = install
// export default preventReClick

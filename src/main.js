import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

document.querySelectorAll('.nav-item').forEach((el) =>{
  el.addEventListener('click', (ev) => {
    ev.preventDefault();
    let divId = el.getAttribute('href');
    document.querySelector('' + divId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
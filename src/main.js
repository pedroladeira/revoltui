import Vue from 'vue';
import App from "./App.vue";

import Plugin from './plugin.js';

Vue.use(Plugin);

new Vue({
    // router,
    // store,
    render: h => h(App)
}).$mount("#app");
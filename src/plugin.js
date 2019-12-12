import Button from '@/components/Button.vue';
import '@/components/scss/main.scss';


export default {
    install(Vue) {
        Vue.component(Button.name, Button);
    }
}
import Vue from 'vue';
import { configure } from '@storybook/vue';
import Plugin from "../src/plugin.js";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";


// Install Vue plugins.
Vue.use(Plugin);

const req = require.context('../src', true, /stories.js$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);

import "../scss/main.scss";

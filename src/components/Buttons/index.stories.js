import { storiesOf } from "@storybook/vue";
import Button from "./index.vue";

const stories = storiesOf("Buttons", module);
stories.add("Default", () => ({
  components: {
    vButton: Button
  },
  template: `<v-button>Example</v-button>`
}));
stories.add("Color", () => ({
  components: {
    vButton: Button
  },
  template: `<div>
<v-button>Default</v-button>
<v-button color="primary">Primary</v-button>
<v-button color="success">Success</v-button>
<v-button color="info">Info</v-button>
<v-button color="danger">Danger</v-button>
<v-button color="warning">Warning</v-button></div>`
}));
stories.add("With icon", () => ({
  components: {
    vButton: Button
  },
  template: `<div><v-button icon="fas fa-user" color="primary">Icons Left</v-button><span class="mx-2"></span><v-button icon="fas fa-user" icon-right color="primary">Icons Right</v-button></div>`
}));

stories.add("Button Groups", () => ({
  components: {
    vButton: Button
  },
  template: `<div>
<v-button-group><v-button color="primary">Left</v-button><v-button color="primary">Center</v-button><v-button color="primary">Right</v-button></v-button-group>
<v-button-group class="mt-2"><v-button color="primary" icon="fas fa-align-left"></v-button><v-button color="primary" icon="fas fa-align-justify"></v-button><v-button color="primary" icon="fas fa-align-right"></v-button></v-button-group></div>`
}));

import { storiesOf } from "@storybook/vue";
import Button from "./index.vue";

const stories = storiesOf("Badges", module);
stories.add("Default", () => ({
  components: {
    vButton: Button
  },
  template: `<v-badge>Example</v-badge>`
}));
stories.add("Color", () => ({
  components: {
    vButton: Button
  },
  template: `<div>
<v-badge>Example</v-badge>
<v-badge color="primary">Example</v-badge>
<v-badge color="success">Example</v-badge>
<v-badge color="info">Example</v-badge>
<v-badge color="danger">Example</v-badge>
<v-badge color="warning">Example</v-badge></div>`
}));

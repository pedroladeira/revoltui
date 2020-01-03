<template>
  <DocContent title="Introduction" id="introduction">
    <div slot="example" class="row">
      <div class="row mb-5">
        <div class="flex col-md-12">
          <div class="px-1"><v-badge>Default</v-badge></div>
          <div class="px-1"><v-badge color="primary">Primary</v-badge></div>
          <div class="px-1"><v-badge color="secondary">secondary</v-badge></div>
          <div class="px-1"><v-badge color="success">Success</v-badge></div>
          <div class="px-1"><v-badge color="info">Info</v-badge></div>
          <div class="px-1"><v-badge color="danger">Danger</v-badge></div>
          <div class="px-1"><v-badge color="warning">Warning</v-badge></div>
        </div>
      </div>
    </div>
    <template slot="code" type="html">
      <code class="html">
        {{ code }}
      </code>
    </template>

    <div class="footer">
      <p>
        <strong>:color</strong>
      </p>
      <p class="text-sm">
        default, primary, secondary, success, info, danger, warning
      </p>
    </div>
  </DocContent>
</template>

<script>
import DocContent from "../partials/DocContent";

export default {
  components: {
    DocContent
  },
  data() {
    return {
      code: `
<v-badge>Default</v-badge>
<v-badge color="primary">Primary</v-badge>
<v-badge color="secondary">secondary</v-badge>
<v-badge color="success">Success</v-badge>
<v-badge color="info">Info</v-badge>
<v-badge color="danger">Danger</v-badge>
<v-badge color="warning">Warning</v-badge>
`
    };
  }
};
</script>

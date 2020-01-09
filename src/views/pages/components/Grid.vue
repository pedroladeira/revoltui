<template>
  <DocContent title="Responsive Grid" id="grid">
    <div slot="example" class="row" v-html="code"></div>
    <template slot="code" type="html">
      <code class="html">
        {{ code }}
      </code>
    </template>

    <div class="footer">
      <p><strong>.row</strong> the row</p>
      <p><strong>.w-##</strong> divided width by 12 columns</p>
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
<div class="col-sm-6 col-md-8 col-lg-3">
    <div class="py-3 m-3 text-center bg-primary text-white">col-sm-6 col-md-8 col-lg-3</div>
</div>
<div class="col-sm-4">
    <div class="py-3 m-3 text-center bg-primary text-white">col-sm-4</div>
</div>`
    };
  }
};
</script>

<template>
  <DocContent title="Menus" id="menus">
    <div slot="example" class="mb-5">
      <v-icon>far fa-arrow-alt-circle-up</v-icon>
    </div>
    <template slot="code" type="html">
      <code class="html">
        {{ code }}
      </code>
    </template>
    <div class="footer">
      <p>
        <strong>(slot)</strong>
      </p>
      <p class="text-sm">
        string
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
<v-icon>far fa-arrow-alt-circle-up</v-icon>
`
    };
  }
};
</script>

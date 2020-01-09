<template>
  <div>
    <div class="m-3">
      <v-header>Badges</v-header>
    </div>
    <DocContent title="Badges">
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

      <TablePropsDocsItem slot="doc-props">
        <template slot="name">color</template>
        <template slot="type">string</template>
        <template slot="default">default</template>
        <template slot="mandatory"></template>
        <template slot="description">You can use the styles bellow: <br/><b>(default, primary, secondary, success, info, danger, warning)</b></template>
      </TablePropsDocsItem>
    </DocContent>
  </div>
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

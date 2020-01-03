<template>
  <div class="doc-content m-3" :id="id">
    <v-card :title="title">
      <slot name="example"></slot>
      <div ref="code" class="code px-3">
        <pre>
            <slot name="code"></slot>
        </pre>
      </div>
      <div v-if="this.$slots['doc-props']" class="mb-2">
        <h3>Props</h3>
        <v-table :heads="propsHeaders" :bordered="true">
          <slot name="doc-props"></slot>
        </v-table>
      </div>
      <div v-if="this.$slots['doc-events']" class="mb-2">
        <h3>Events</h3>
        <slot name="doc-events"></slot>
      </div>
    </v-card>
  </div>
</template>

<script>
import hljs from "highlight.js/lib/highlight";
import "highlight.js/styles/github.css";

export default {
  props: ["title", "id"],
  data() {
    return {
      propsHeaders: ["Name", "Type", "Default", "Mandatory", "Description"]
    };
  },
  mounted() {
    // set highlight block
    hljs.highlightBlock(this.$refs.code);
  }
};
</script>

<style lang="scss" scoped>
.doc-content .code {
  border: 1px solid rgba(0, 0, 0, 0.2);
}
</style>

<template>
  <div>
    <DocContent title="Instalation" id="Instalation">
      <div slot="example" class="mb-5">
        Install with NPM
      </div>
      <template slot="code" type="html">
        <code class="bash">
          {{ codeNpm }}
        </code>
      </template>
    </DocContent>
    <DocContent>
      <div slot="example" class="mb-5">
        Install with Yarn
      </div>
      <template slot="code" type="html">
        <code class="bash">
          {{ codeYarn }}
        </code>
      </template>
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
      codeYarn: `
$ yarn add vuepp
`,
      codeNpm: `
$ npm install vuepp
`
    };
  }
};
</script>

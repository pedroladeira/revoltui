<template>
  <div>
    <div class="m-3">
      <v-header>Buttons</v-header>
    </div>
    <DocContent title="Normal Buttons">
      <div slot="example" class="row">
        <div class="row mb-5">
          <div class="flex col-md-12">
            <div class="px-1"><v-button>Default</v-button></div>
            <div class="px-1"><v-button color="primary">Primary</v-button></div>
            <div class="px-1">
              <v-button color="secondary">Secondary</v-button>
            </div>
            <div class="px-1"><v-button color="success">Success</v-button></div>
            <div class="px-1"><v-button color="info">Info</v-button></div>
            <div class="px-1"><v-button color="danger">Danger</v-button></div>
            <div class="px-1"><v-button color="warning">Warning</v-button></div>
          </div>
          <div class="flex col-md-12 mt-5">
            <div class="px-1"><v-button :no-shadow="true">Default</v-button></div>
            <div class="px-1">
              <v-button :no-shadow="true" color="primary">Primary</v-button>
            </div>
            <div class="px-1">
              <v-button :no-shadow="true" color="secondary">Secondary</v-button>
            </div>
            <div class="px-1">
              <v-button :no-shadow="true" color="success">Success</v-button>
            </div>
            <div class="px-1">
              <v-button :no-shadow="true" color="info">Info</v-button>
            </div>
            <div class="px-1">
              <v-button :no-shadow="true" color="danger">Danger</v-button>
            </div>
            <div class="px-1">
              <v-button :no-shadow="true" color="warning">Warning</v-button>
            </div>
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
      <TablePropsDocsItem slot="doc-props">
        <template slot="name">no-shadow</template>
        <template slot="type">boolean</template>
        <template slot="default">true</template>
        <template slot="mandatory"></template>
        <template slot="description"></template>
      </TablePropsDocsItem>
      <TablePropsEventsItem slot="doc-events">
        <template slot="name">@click</template>
        <template slot="params"></template>
        <template slot="description">Fired when user click on button</template>
      </TablePropsEventsItem>
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
<v-button>Default</v-button>
<v-button color="primary">Primary</v-button>
<v-button color="secondary">Secondary</v-button>
<v-button color="success">Success</v-button>
<v-button color="info">Info</v-button>
<v-button color="danger">Danger</v-button>
<v-button color="warning">Warning</v-button>

<v-button :no-shadow="true">Default</v-button>
<v-button :no-shadow="true" color="primary">Primary</v-button>
<v-button :no-shadow="true" color="secondary">Secondary</v-button>
<v-button :no-shadow="true" color="success">Success</v-button>
<v-button :no-shadow="true" color="info">Info</v-button>
<v-button :no-shadow="true" color="danger">Danger</v-button>
<v-button :no-shadow="true" color="warning">Warning</v-button>
`
    }
  }
};
</script>

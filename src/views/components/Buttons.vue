<template>
  <DocContent title="Buttons" id="buttons">
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

    <div class="footer">
      <p><strong>.row</strong> the row</p>
      <p><strong>.w-##</strong> divided width by 12 columns</p>
      <p>
        <strong>:color</strong>
      </p>
      <p class="text-sm">
        default, primary, secondary, success, info, danger, warning
      </p>
      <p class="mt-2">
        <strong>:no-shadow</strong>
      </p>
      <p class="text-sm">
        boolean #true #false
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

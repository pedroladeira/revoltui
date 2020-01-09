<template>
  <DocContent title="Menus" id="menus">
    <div slot="example" class="mb-5">
      <div class="row">
        <div class="col-sm-3">
          <v-menu title="NavMenu">
            <v-menu-item>Homepage</v-menu-item>
            <v-menu-item>Item One</v-menu-item>
            <v-menu-item to="https://www.google.com" target="_blank">
              Item Two
            </v-menu-item>
          </v-menu>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col-sm-12">
          <v-menu title="Horizontal Menu" view="horizontal">
            <v-menu-item>Homepage</v-menu-item>
            <v-menu-item>Item One</v-menu-item>
            <v-menu-item to="https://www.google.com" target="_blank">
              Item Two
            </v-menu-item>
          </v-menu>
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
        <strong>(slot)</strong>
      </p>
      <p class="text-sm">
        string
      </p>
      <p>
        <strong>:view</strong> can be <i>horizontal</i>
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
<v-menu title="Example">
  <v-menu-item>Homepage</v-menu-item>
  <v-menu-item>Item One</v-menu-item>
  <v-menu-item to="https://www.google.com" target="_blank">Item Two</v-menu-item>
</v-menu>
`
    };
  }
};
</script>

<template>
  <DocContent title="Menus" id="menus">
    <div slot="example" class="mb-5">
      <v-navbar class="mb-3" title="Example" link="#">
        <v-menu>
          <v-menu-item>Homepage</v-menu-item>
          <v-menu-item>About Us</v-menu-item>
          <v-menu-item>Contacts</v-menu-item>
        </v-menu>
      </v-navbar>
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

<template>
  <div>
    <div class="m-3">
      <v-header>Menus</v-header>
    </div>
    <DocContent title="Menus" >
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

      <TablePropsDocsItem slot="doc-props">
        <template slot="name">view</template>
        <template slot="type">string</template>
        <template slot="default">vertical</template>
        <template slot="mandatory"></template>
        <template slot="description">vertical or horizontal</template>
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

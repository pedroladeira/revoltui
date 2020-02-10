<template>
  <div>
    <div
      class="my-8"
      style="position: relative; height: 500px; border:1px solid red"
    >
      <v-layout-admin>
        Full layout
      </v-layout-admin>
    </div>
    <div
      class="my-8"
      style="position: relative; height: 500px; border:1px solid red"
    >
      <v-layout-admin :aside-left="asideLeftOpen">
        <div slot="header" class="bg-blue">
          <v-navbar
            title="ExampleUI"
            action-icon="fas fa-bars"
            @actionClick="asideLeftOpen = !asideLeftOpen"
          >
            <v-menu>
              <v-menu-item>Item One {{ asideLeftOpen }}</v-menu-item>
            </v-menu>
          </v-navbar>
        </div>
        <div slot="left" class="bg-red">This is a left thing</div>
        <div slot="right" class="bg-red">This is a right thing</div>
        <div slot="footer" class="bg-red">This is a left thing</div>
        This is some layout
      </v-layout-admin>
    </div>
    <div
      class="my-8"
      style="position: relative; height: 500px; border:1px solid red"
    >
      <v-layout-center>
        This is center layout
      </v-layout-center>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      asideLeftOpen: false
    };
  }
};
</script>

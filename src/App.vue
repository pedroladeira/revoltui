<template>
  <div id="app">
    <v-layout-admin>
      <v-navbar slot="header" title="Vue++">
        <v-menu slot="right">
          <v-menu-item>Homepage</v-menu-item>
          <v-menu-item>Item One</v-menu-item>
          <v-menu-item to="https://www.google.com" target="_blank">
            Item Two
          </v-menu-item>
        </v-menu>
      </v-navbar>
      <div slot="left">
        <v-menu title="Get Start">
          <v-menu-item to="/">Introduction</v-menu-item>
          <v-menu-item to="/instalation">Instalation</v-menu-item>
        </v-menu>
        <v-menu title="Components">
          <v-menu-item to="/grid">Grid</v-menu-item>
          <v-menu-item to="/buttons">Buttons</v-menu-item>
          <v-menu-item to="/badges">Badges</v-menu-item>
          <v-menu-item to="/cards">Cards</v-menu-item>
          <v-menu-item to="/menus">Menus</v-menu-item>
          <v-menu-item to="/forms">Forms</v-menu-item>
        </v-menu>
        <v-menu title="Others">
          <v-menu-item to="#grid">Help</v-menu-item>
        </v-menu>
      </div>

      <div class="p-2">
        <router-view></router-view>
      </div>
    </v-layout-admin>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--global-text-color-dark);
}
</style>

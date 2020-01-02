<template>
  <div id="app">
    <v-layout-admin>
      <v-navbar slot="header" title="Vue++"></v-navbar>
      <div slot="left">
        <v-menu title="Get Start">
          <v-menu-item link="/instalation">Instalation</v-menu-item>
        </v-menu>
        <v-menu title="Components">
          <v-menu-item link="#grid">Grid</v-menu-item>
          <v-menu-item link="#buttons">Buttons</v-menu-item>
          <v-menu-item link="#badges">Badges</v-menu-item>
          <v-menu-item link="#cards">Cards</v-menu-item>
          <v-menu-item link="#menus">Menus</v-menu-item>
        </v-menu>
        <v-menu title="Others">
          <v-menu-item link="#grid">Help</v-menu-item>
        </v-menu>
      </div>

      <div class="p-2">
        <GridView />
        <ButtonsView />
        <BadgesView />
        <CardsView />
        <MenusView />
        <NavbarView />
      </div>
    </v-layout-admin>
  </div>
</template>

<script>
import GridView from "@/views/components/Grid";
import ButtonsView from "@/views/components/Buttons";
import BadgesView from "@/views/components/Badges";
import CardsView from "@/views/components/Cards";
import MenusView from "@/views/components/Menus";
import NavbarView from "@/views/components/Navbar";

export default {
  name: "app",
  components: {
    GridView,
    ButtonsView,
    BadgesView,
    CardsView,
    MenusView,
    NavbarView
  }
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

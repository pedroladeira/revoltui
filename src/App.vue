<template>
  <div id="app">
    <v-layout-admin>
      <v-navbar slot="header" title="Vue++"></v-navbar>
      <div slot="left">
        <v-menu title="Components">
          <v-menu-item link="#grid">Grid</v-menu-item>
          <v-menu-item link="#buttons">Buttons</v-menu-item>
          <v-menu-item link="#badges">Badges</v-menu-item>
          <v-menu-item link="#cards">Cards</v-menu-item>
          <v-menu-item link="#menus">Menus</v-menu-item>
        </v-menu>
      </div>

      <div class="p-2">
        <GridView />
        <ButtonsView />
        <BadgesView />
        <CardsView />
        <MenusView />

        <!-- <div class="m-3" id="flex">
                    <v-card title="Flex">
                        <div class="flex flex-wrap">
                            <div class="text-center px-2 py-2 m-2 bg-primary text-white">Side A</div>
                            <div class="flex-1 text-center py-2 m-2 bg-primary text-white">Side B (flex-1)</div>
                        </div>

                        <div slot="footer">
                            <p><strong>.flex</strong> display as flex</p>
                            <p><strong>.flex-wrap</strong> allows to wrap line</p>
                            <p><strong>.flex-1</strong> flex grow</p>
                        </div>
                    </v-card>
                </div>

                <div class="m-3" id="sizes">
                    <v-card title="Sizes">
                        <div class="flex flex-wrap">
                            <div v-for="(x,i) in 10" :key="i" :class="'w-'+x">
                                <div class="text-center py-2 m-2 bg-primary text-white">{{ x }}</div>
                            </div>
                        </div>
                    </v-card>
                </div>


                
                <div class="m-3" id="menus">
                    <v-card title="Menus">
                        <div class="flex flex-wrap">
                            <v-menu title="NavMenu">
                                <v-menu-item>Homepage</v-menu-item>
                                <v-menu-item>Item One</v-menu-item>
                                <v-menu-item>Item Two</v-menu-item>
                            </v-menu>
                        </div>
                        <div slot="footer">
                            <p>
                                <strong>(slot)</strong>
                            </p>
                            <p class="text-sm">
                                string
                            </p>
                        </div>
                    </v-card>
                </div> -->
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

export default {
  name: "app",
  components: {
    GridView,
    ButtonsView,
    BadgesView,
    CardsView,
    MenusView
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

<template>
  <div>
    <v-spacer margin="6">
      <v-navbar title="Navbar example">
        <v-menu>
          <v-menu-item>Item one</v-menu-item>
          <v-menu-item>Item two</v-menu-item>
          <v-menu-item>Item tree</v-menu-item>
        </v-menu>
        <v-menu slot="right">
          <v-menu-item>Another link</v-menu-item>
          <v-menu-item>User Profile</v-menu-item>
        </v-menu>
      </v-navbar>
    </v-spacer>

    <v-spacer margin="6">
      <v-navbar title="Navbar example">
        <v-menu>
          <v-menu-item>Item one</v-menu-item>
          <v-menu-item>Item two</v-menu-item>
          <v-menu-item>Item tree</v-menu-item>
        </v-menu>
        <v-button-group slot="right">
          <v-button>
            <v-icon>fas fa-home</v-icon>
          </v-button>
          <v-button>
            <v-icon>fas fa-home</v-icon>
          </v-button>
        </v-button-group>
      </v-navbar>
    </v-spacer>
  </div>
</template>

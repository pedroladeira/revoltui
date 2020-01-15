<template>
  <div>
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
  </div>
</template>

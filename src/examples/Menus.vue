<template>
  <div>
    <div>
      <v-menu title="Vertical">
        <v-menu-item>Item one</v-menu-item>
        <v-menu-item>Item two</v-menu-item>
        <v-menu-item>Item tree</v-menu-item>
      </v-menu>
    </div>
    <div>
      <v-menu title="Horizontal" view="horizontal">
        <v-menu-item icon="fas fa-home">Item one</v-menu-item>
        <v-menu-item icon="fas fa-home" iconRight>Item one</v-menu-item>
        <v-menu-item to="/cards">Item two</v-menu-item>
        <v-menu-item link="https://www.google.com" target="_blank"
          >Item tree</v-menu-item
        >
      </v-menu>
    </div>
  </div>
</template>

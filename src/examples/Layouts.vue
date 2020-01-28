<template>
  <div>
    <div class="m-8" style="position: relative; height: 500px">
      <v-layout-admin>
        Full layout
      </v-layout-admin>
    </div>
    <div class="m-8" style="position: relative; height: 500px">
      <v-layout-admin>
        <div slot="header" class="bg-blue">This is a left thing</div>
        <div slot="left" class="bg-red">This is a left thing</div>
        <div slot="right" class="bg-red">This is a right thing</div>
        <div slot="footer" class="bg-red">This is a left thing</div>
        This is some layout
      </v-layout-admin>
    </div>
    <div class="m-8" style="position: relative; height: 500px">
      <v-layout-center>
        This is center layout
      </v-layout-center>
    </div>
  </div>
</template>

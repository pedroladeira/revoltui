<template>
  <div>
    <div class="m-6">
      Simple Table
      <v-table :heads="['First Column', 'Second Column', 'Last Column']">
        <v-table-row>
          <v-table-col>A</v-table-col>
          <v-table-col>B</v-table-col>
          <v-table-col>C</v-table-col>
        </v-table-row>
      </v-table>
    </div>
    <div class="m-6">
      Bordered table
      <v-table
        :heads="['First Column', 'Second Column', 'Last Column']"
        :bordered="true"
      >
        <v-table-row>
          <v-table-col>A</v-table-col>
          <v-table-col>B</v-table-col>
          <v-table-col>C</v-table-col>
        </v-table-row>
      </v-table>
    </div>
  </div>
</template>

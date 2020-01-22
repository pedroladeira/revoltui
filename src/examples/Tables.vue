<template>
  <div>
    <div class="m-6">
      Simple Table
      <v-table :heads="['First Column', 'Second Column', 'Last Column']">
        <v-table-row v-for="(r, i) in 3" :key="i">
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
        <v-table-row v-for="(r, i) in 3" :key="i">
          <v-table-col>A</v-table-col>
          <v-table-col>B</v-table-col>
          <v-table-col>C</v-table-col>
        </v-table-row>
      </v-table>
    </div>
    <div class="m-6">
      Striped table
      <v-table
        :heads="['First Column', 'Second Column', 'Last Column']"
        :striped="true"
      >
        <v-table-row v-for="(r, i) in 3" :key="i">
          <v-table-col>A</v-table-col>
          <v-table-col>B</v-table-col>
          <v-table-col>C</v-table-col>
        </v-table-row>
      </v-table>
    </div>
    <div class="m-6">
      Hover table
      <v-table
        :heads="['First Column', 'Second Column', 'Last Column']"
        :striped="true"
        :hover="true"
      >
        <v-table-row v-for="(r, i) in 3" :key="i">
          <v-table-col>A</v-table-col>
          <v-table-col>B</v-table-col>
          <v-table-col>C</v-table-col>
        </v-table-row>
      </v-table>
    </div>
    <div class="m-6">
      Search Table
      <v-table
        :heads="['First Column', 'Second Column', 'Last Column']"
        :striped="true"
        :hover="true"
        :search="true"
      >
        <template v-slot="slotProps">
          <v-table-row v-for="(r, i) in 3" :key="i">
            <v-table-col>{{ slotProps.search.query }}</v-table-col>
            <v-table-col>B</v-table-col>
            <v-table-col>C</v-table-col>
          </v-table-row>
        </template>
      </v-table>
    </div>
  </div>
</template>

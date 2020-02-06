<template>
  <v-spacer margin="9">
    <v-pagination
      :total="15"
      :visible="7"
      :selected="page"
      @change="onChangePagination"
    >
      <template slot="btn-prev-content">
        <v-icon>fas fa-chevron-left</v-icon>
      </template>
      <template slot="btn-next-content">
        <v-icon>fas fa-chevron-right</v-icon>
      </template>
    </v-pagination>
    <v-spacer margin="9">
      <v-button color="warning" @click="page++">Next Page</v-button>
      <span>Current Page: {{ page }}</span>
    </v-spacer>
  </v-spacer>
</template>

<script>
export default {
  data() {
    return {
      page: 3
    };
  },
  methods: {
    onChangePagination(page) {
      this.page = page;
    }
  }
};
</script>

<template>
  <div class="m-3">
    <v-header>Introduction</v-header>
    <v-card id="introduction" class="mb-6">
      Some introduction
    </v-card>
    <v-card title="Component Status">
      <strong>
        See bellow the status of development of all components
      </strong>
      <ul>
        <li v-for="(c, i) in componentsStatus" :key="i" class="my-4">
          <input
            type="checkbox"
            :checked="c.status === 'completed'"
            disabled
            class="mr-2"
          />
          <span class="mr-2">{{ c.title }}</span>
          <v-badge v-if="!c.exist" color="primary">Not Implemented</v-badge>
        </li>
      </ul>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      componentsStatus: [
        {
          title: "Button",
          status: "completed",
          exist: true
        },
        {
          title: "Badge",
          status: "completed",
          exist: true
        },
        {
          title: "Card",
          status: "completed",
          exist: true
        },
        {
          title: "Menu",
          status: "completed",
          exist: true
        },
        {
          title: "Forms",
          status: "",
          exist: true
        },
        {
          title: "Alerts",
          status: "",
          exist: false
        }
      ]
    };
  }
};
</script>

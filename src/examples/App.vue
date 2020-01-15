<template>
  <div>
    <ul>
      <li v-for="(r, i) in routes" :key="i">
        <router-link :to="r.path">{{ r.name }}</router-link>
      </li>
    </ul>
    <hr />
    <div class="mt-6">
      <router-view />
    </div>
  </div>
</template>

<script>
import Router from "./router.js";

export default {
  computed: {
    routes: () => {
      return Router.options.routes;
    }
  }
};
</script>

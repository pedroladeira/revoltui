<template>
  <div class="v-menu-item w-full cursor-pointer text-noselection">
    <a :href="to" :target="target">
      <div class="px-2">
        <span class="text-sm">
          <slot></slot>
        </span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "v-menu-item",
  props: ["to", "target"]
};
</script>

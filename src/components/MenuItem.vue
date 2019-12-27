<template>
  <div class="v-menu-item w-full">
    <a :href="to" :target="target" class="cursor-pointer">
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

<template>
    <div class="v-menu w-full">
        <div v-if="title" class="border-b">
            <span class="text-xs uppercase">{{ title }}</span>
        </div>
        <ul>
            <slot></slot>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'v-menu',
    props: ['title'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.v-menu {
}
</style>

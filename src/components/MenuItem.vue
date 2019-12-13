<template>
    <div class="v-menu-item w-full hover:bg-red-900">
        <a :href="link" class="cursor-pointer">
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
    name: 'v-menu-item',
    props: ['link'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.v-menu-item {
    height: 30px;
    line-height: 30px;
    vertical-align: middle;
}
</style>

<template>
    <div class="v-menu-item w-full">
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
    padding: 0.5rem;
    margin: 0.75rem 0;
    vertical-align: middle;
    transition: all .2s;
    border-radius: var(--theme-border-radius);

    &:hover {
        background-color: #e0f3ff;
        color: var(--theme-primary);
    }
}
</style>

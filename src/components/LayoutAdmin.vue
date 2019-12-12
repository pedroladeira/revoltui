<template>
    <div class="v-layout">
        <div class="v-layout__aside">
            <slot name="left"></slot>
        </div>
        <div class="v-layout__content">
            <slot></slot>
        </div>
        <div class="v-layout__aside">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-layout-admin',
}
</script>

<style lang="scss" scoped>
.v-layout {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;

    &__aside {
        width: var(--layout-aside-width);
        height: 100%;
        overflow: none;
        overflow-y: scroll;
    }
    
    &__content {
        flex-grow: 1;
        overflow: scroll;
    }
}
</style>

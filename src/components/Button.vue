<template>
    <button class="v-button"
        :class="[getColorClass]">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'v-button',
    props: ['color'],
    computed: {
        getColorClass() {
            if (['primary', 'secundary', 'info', 'success', 'danger'].indexOf(this.color) > -1) {
                return 'v-button-' + this.color;
            }
            return '';
        }
    }
}
</script>

<style lang="scss" scoped>
.v-button {
    padding: 2px 5px;
    border: 1px solid transparent;
    color: var(--global-text-color-dark);
    background-color: var(--global-bg-color-default);

    &-primary {
        background-color: var(--global-bg-color-primary);
        color: var(--global-text-color-light);
    }

    &-secundary {
        background-color: var(--global-bg-color-secundary);
        color: var(--global-text-color-light);
    }

    &-success {
        background-color: var(--global-bg-color-success);
        color: var(--global-text-color-light);
    }

    &-info {
        background-color: var(--global-bg-color-info);
        color: var(--global-text-color-light);
    }

    &-danger {
        background-color: var(--global-bg-color-danger);
        color: var(--global-text-color-light);
    }
}
</style>

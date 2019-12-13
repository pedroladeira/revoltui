<template>
    <span class="v-badge px-1" :class="[getColorClass]">
        <slot></slot>
    </span>
</template>

<script>
export default {
    name: 'v-badge',
    props: ['color'],
    computed: {
        getColorClass() {
            if (['primary', 'secundary', 'info', 'success', 'danger', 'warning'].indexOf(this.color) > -1) {
                return 'v-badge-' + this.color;
            }
            return '';
        }
    }
}
</script>

<style lang="scss" scoped>
.v-badge {
    color: var(--global-text-color-dark);
    background-color: var(--global-bg-color-default);
    border-radius: var(--layout-radius);
    border: 1px solid var(--global-border-color-dark);

    &-primary {
        background-color: var(--global-bg-color-primary);
        color: var(--global-text-color-light);
        border: 1px solid var(--global-bg-color-primary);
    }

    &-secundary {
        background-color: var(--global-bg-color-secundary);
        color: var(--global-text-color-light);
        border: 1px solid var(--global-bg-color-secundary);
    }

    &-success {
        background-color: var(--global-bg-color-success);
        color: var(--global-text-color-light);
        border: 1px solid var(--global-bg-color-success);
    }

    &-info {
        background-color: var(--global-bg-color-info);
        color: var(--global-text-color-light);
        border: 1px solid var(--global-bg-color-info);
    }

    &-danger {
        background-color: var(--global-bg-color-danger);
        color: var(--global-text-color-light);
        border: 1px solid var(--global-bg-color-danger);
    }

    &-warning {
        background-color: var(--global-bg-color-warning);
        color: var(--global-text-color-light);
        border: 1px solid var(--global-bg-color-warning);
    }
}
</style>

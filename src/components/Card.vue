<template>
    <div class="v-card" :class="[getColorClass]">
        <div v-if="hasHeaderSlot||title" class="v-card__header">
            <span v-if="!hasHeaderSlot" class="text-xl">{{ title }}</span>
            <slot name="header"></slot>
        </div>
        <div v-if="hasContentSlot" class="v-card__content">
            <slot></slot>
        </div>
        <div v-if="hasFooterSlot" class="v-card__footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-card',
    props: ['title', 'color'],
    computed: {
        getColorClass() {
            if (['primary', 'secundary', 'info', 'success', 'danger', 'warning'].indexOf(this.color) > -1) {
                return 'v-card-' + this.color;
            }
            return '';
        },
        hasHeaderSlot () {
            return !!this.$slots['header'];
        },
        hasFooterSlot () {
            return !!this.$slots['footer'];
        },
        hasContentSlot () {
            return !!this.$slots.default;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.v-card {
    color: var(--global-text-color-dark);
    background-color: var(--global-bg-color-default);
    border-radius: var(--card-border-width);
    box-shadow: var(--border-shadow);
    overflow: hidden;


    &-primary > &__header {
        background-color: var(--global-bg-color-primary);
        color: var(--global-text-color-light);
    }

    &-secundary > &__header {
        background-color: var(--global-bg-color-secundary);
        color: var(--global-text-color-light);
    }

    &-success > &__header {
        background-color: var(--global-bg-color-success);
        color: var(--global-text-color-light);
    }

    &-info > &__header {
        background-color: var(--global-bg-color-info);
        color: var(--global-text-color-light);
    }

    &-danger > &__header {
        background-color: var(--global-bg-color-danger);
        color: var(--global-text-color-light);
    }

    &-warning > &__header {
        background-color: var(--global-bg-color-warning);
        color: var(--global-text-color-light);
    }

    &__content {
        padding: var(--card-padding-width);
    }

    &__header {
        padding: calc(var(--card-padding-width) * 0.5);
    }

    &__footer {
        padding: calc(var(--card-padding-width) * 0.5);
    }
}
</style>

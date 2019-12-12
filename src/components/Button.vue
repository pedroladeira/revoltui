<template>
    <button class="pp-button">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'pp-button',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.pp-button {
    border: 1px solid transparent;
    background-color: red;
}
</style>

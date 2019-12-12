<template>
    <div id="app">

        <div class="py-6 border border-red-900">
            <div class="flex border-b">
                <div class="p-2">
                    <v-button>Default</v-button>
                </div>
                <div class="p-2">
                    <v-button color="primary">Primary</v-button>
                </div>
                <div class="p-2">
                    <v-button color="secundary">Secundary</v-button>
                </div>
                <div class="p-2">
                    <v-button color="success">Success</v-button>
                </div>
                <div class="p-2">
                    <v-button color="info">Info</v-button>
                </div>
                <div class="p-2">
                    <v-button color="danger">Danger</v-button>
                </div>
            </div>

            <div class="py-2">
                <ul>
                    <li>
                        <p><strong>Default</strong></p>
                    </li>
                    <li>
                        <p><strong>Primary</strong></p>
                    </li>
                    <li>
                        <p><strong>Secundary</strong></p>
                    </li>
                    <li>
                        <p><strong>Success</strong></p>
                    </li>
                    <li>
                        <p><strong>Info</strong></p>
                    </li>
                    <li>
                        <p><strong>Danger</strong></p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'app',
    components: {
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>

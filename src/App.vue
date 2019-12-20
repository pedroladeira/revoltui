<template>
    <div id="app">

        <v-layout-admin>
            <v-navbar slot="header" title="Vue++"></v-navbar>
            <div slot="left">
                <v-menu title="Components">
                    <v-menu-item link="#grid">Grid</v-menu-item>
                    <v-menu-item link="#buttons">Buttons</v-menu-item>
                    <v-menu-item link="#badges">Badges</v-menu-item>
                    <v-menu-item link="#cards">Cards</v-menu-item>
                    <v-menu-item link="#menus">Menus</v-menu-item>
                </v-menu>
            </div>


            <div class="p-2">

                <GridView />


                <!-- <div class="m-3" id="flex">
                    <v-card title="Flex">
                        <div class="flex flex-wrap">
                            <div class="text-center px-2 py-2 m-2 bg-primary text-white">Side A</div>
                            <div class="flex-1 text-center py-2 m-2 bg-primary text-white">Side B (flex-1)</div>
                        </div>

                        <div slot="footer">
                            <p><strong>.flex</strong> display as flex</p>
                            <p><strong>.flex-wrap</strong> allows to wrap line</p>
                            <p><strong>.flex-1</strong> flex grow</p>
                        </div>
                    </v-card>
                </div>

                <div class="m-3" id="sizes">
                    <v-card title="Sizes">
                        <div class="flex flex-wrap">
                            <div v-for="(x,i) in 10" :key="i" :class="'w-'+x">
                                <div class="text-center py-2 m-2 bg-primary text-white">{{ x }}</div>
                            </div>
                        </div>
                    </v-card>
                </div>


                <div class="m-3" id="buttons">
                    <v-card title="Buttons">
                        <div class="flex">
                            <div class="flex-none px-1"><v-button>Default</v-button></div>
                            <div class="flex-none px-1"><v-button color="primary">Primary</v-button></div>
                            <div class="flex-none px-1"><v-button color="secondary">Secondary</v-button></div>
                            <div class="flex-none px-1"><v-button color="success">Success</v-button></div>
                            <div class="flex-none px-1"><v-button color="info">Info</v-button></div>
                            <div class="flex-none px-1"><v-button color="danger">Danger</v-button></div>
                            <div class="flex-none px-1"><v-button color="warning">Warning</v-button></div>
                        </div>
                        <div class="flex mt-4">
                            <div class="flex-none px-1"><v-button :no-shadow="true">Default</v-button></div>
                            <div class="flex-none px-1"><v-button :no-shadow="true" color="primary">Primary</v-button></div>
                            <div class="flex-none px-1"><v-button :no-shadow="true" color="secondary">Secondary</v-button></div>
                            <div class="flex-none px-1"><v-button :no-shadow="true" color="success">Success</v-button></div>
                            <div class="flex-none px-1"><v-button :no-shadow="true" color="info">Info</v-button></div>
                            <div class="flex-none px-1"><v-button :no-shadow="true" color="danger">Danger</v-button></div>
                            <div class="flex-none px-1"><v-button :no-shadow="true" color="warning">Warning</v-button></div>
                        </div>

                        <div slot="footer">
                            <p>
                                <strong>:color</strong>
                            </p>
                            <p class="text-sm">
                                default, primary, secondary, success, info, danger, warning
                            </p>
                            <p class="mt-2">
                                <strong>:no-shadow</strong>
                            </p>
                            <p class="text-sm">
                                boolean #true #false
                            </p>
                        </div>
                    </v-card>
                </div>

                <div class="m-3" id="badges">
                    <v-card title="Badges">
                        <div class="flex">
                            <div class="flex-none px-1"><v-badge>Default</v-badge></div>
                            <div class="flex-none px-1"><v-badge color="primary">Primary</v-badge></div>
                            <div class="flex-none px-1"><v-badge color="secondary">secondary</v-badge></div>
                            <div class="flex-none px-1"><v-badge color="success">Success</v-badge></div>
                            <div class="flex-none px-1"><v-badge color="info">Info</v-badge></div>
                            <div class="flex-none px-1"><v-badge color="danger">Danger</v-badge></div>
                            <div class="flex-none px-1"><v-badge color="warning">Warning</v-badge></div>
                        </div>
                        <div slot="footer">
                            <p>
                                <strong>:color</strong>
                            </p>
                            <p class="text-sm">
                                default, primary, secondary, success, info, danger, warning
                            </p>
                        </div>
                    </v-card>
                </div>

                <div class="m-3" id="cards">
                    <v-card title="Cards">
                        <div class="flex flex-wrap">
                            <div class="w-1/4 p-1">
                                <v-card title="Default">
                                    The conntent
                                    <div slot="footer">The footer</div>
                                </v-card>
                            </div>
                            <div class="w-1/4 p-1">
                                <v-card color="primary" title="Primary">
                                    The conntent
                                    <div slot="footer">The footer</div>
                                </v-card>
                            </div>
                            <div class="w-1/4 p-1">
                                <v-card color="secondary" title="secondary">
                                    The conntent
                                    <div slot="footer">The footer</div>
                                </v-card>
                            </div>
                            <div class="w-1/4 p-1">
                                <v-card color="success" title="Success">
                                    The conntent
                                    <div slot="footer">The footer</div>
                                </v-card>
                            </div>
                            <div class="w-1/4 p-1">
                                <v-card color="info" title="Info">
                                    The conntent
                                    <div slot="footer">The footer</div>
                                </v-card>
                            </div>
                            <div class="w-1/4 p-1">
                                <v-card color="danger" title="Danger">
                                    The conntent
                                    <div slot="footer">The footer</div>
                                </v-card>
                            </div>
                            <div class="w-1/4 p-1">
                                <v-card color="warning" title="Warning">
                                    The conntent
                                    <div slot="footer">The footer</div>
                                </v-card>
                            </div>
                        </div>
                        <div slot="footer">
                            <p>
                                <strong>:color</strong>
                            </p>
                            <p class="text-sm">
                                default, primary, secondary, success, info, danger, warning
                            </p>
                        </div>
                    </v-card>
                </div>

                <div class="m-3" id="menus">
                    <v-card title="Menus">
                        <div class="flex flex-wrap">
                            <v-menu title="NavMenu">
                                <v-menu-item>Homepage</v-menu-item>
                                <v-menu-item>Item One</v-menu-item>
                                <v-menu-item>Item Two</v-menu-item>
                            </v-menu>
                        </div>
                        <div slot="footer">
                            <p>
                                <strong>(slot)</strong>
                            </p>
                            <p class="text-sm">
                                string
                            </p>
                        </div>
                    </v-card>
                </div> -->
            </div>
        </v-layout-admin>
    </div>
</template>

<script>
import GridView from '@/views/components/Grid';

export default {
    name: 'app',
    components: {
        GridView
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--global-text-color-dark);
}
</style>

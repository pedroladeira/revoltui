<template>
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
</template>

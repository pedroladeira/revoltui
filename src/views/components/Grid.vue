<template>
    <div class="m-3" id="grid">
        <v-card title="Grid Responsive">
            <div class="row">
                <div class="col-xs-12">
                    <div class="text-center py-2 m-2 bg-primary text-white">xs/12</div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-6 col-sm-8">
                    <div class="text-center py-2 m-2 bg-primary text-white">sm/6</div>
                </div>
                <div class="col-xs-6 col-sm-4">
                    <div class="text-center py-2 m-2 bg-primary text-white">sm/6</div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8">
                    <div class="text-center py-2 m-2 bg-primary text-white">lg/8</div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8 xs-hidden">
                    <div class="text-center py-2 m-2 bg-primary text-white">lg/8</div>
                </div>
            </div>

            <div class="footer">
                <p><strong>.row</strong> the row</p>
                <p><strong>.w-##</strong> divided width by 12 columns</p>
            </div>
        </v-card>
    </div>
</template>

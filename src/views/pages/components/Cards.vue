<template>
  <DocContent title="Cards" id="cards">
    <div slot="example" class="row mb-5">
      <div class="col-md-3 p-2">
        <v-card title="Default">
          The conntent
          <div slot="footer">The footer</div>
        </v-card>
      </div>
      <div class="col-md-3 p-2">
        <v-card color="primary" title="Primary">
          The conntent
          <div slot="footer">The footer</div>
        </v-card>
      </div>
      <div class="col-md-3 p-2">
        <v-card color="secondary" title="secondary">
          The conntent
          <div slot="footer">The footer</div>
        </v-card>
      </div>
      <div class="col-md-3 p-2">
        <v-card color="success" title="Success">
          The conntent
          <div slot="footer">The footer</div>
        </v-card>
      </div>
      <div class="col-md-3 p-2">
        <v-card color="info" title="Info">
          The conntent
          <div slot="footer">The footer</div>
        </v-card>
      </div>
      <div class="col-md-3 p-2">
        <v-card color="danger" title="Danger">
          The conntent
          <div slot="footer">The footer</div>
        </v-card>
      </div>
      <div class="col-md-3 p-2">
        <v-card color="warning" title="Warning">
          The conntent
          <div slot="footer">The footer</div>
        </v-card>
      </div>
    </div>
    <template slot="code" type="html">
      <code class="html">
        {{ code }}
      </code>
    </template>

    <div class="footer">
      <p>
        <strong>:color</strong>
      </p>
      <p class="text-sm">
        default, primary, secondary, success, info, danger, warning
      </p>
    </div>
  </DocContent>
</template>

<script>
import DocContent from "../partials/DocContent";

export default {
  components: {
    DocContent
  },
  data() {
    return {
      code: `
<v-card title="Default" class="m-2">
  The conntent
  <div slot="footer">The footer</div>
</v-card>
<v-card color="primary" title="Primary" class="m-2">
  The conntent
  <div slot="footer">The footer</div>
</v-card>
<v-card color="secondary" title="secondary" class="m-2">
  The conntent
  <div slot="footer">The footer</div>
</v-card>
<v-card color="success" title="Success" class="m-2">
  The conntent
  <div slot="footer">The footer</div>
</v-card>
<v-card color="info" title="Info" class="m-2">
  The conntent
  <div slot="footer">The footer</div>
</v-card>
<v-card color="danger" title="Danger" class="m-2">
  The conntent
  <div slot="footer">The footer</div>
</v-card>
<v-card color="warning" title="Warning" class="m-2">
  The conntent
  <div slot="footer">The footer</div>
</v-card>`
    };
  }
};
</script>

<template>
  <div>
    <div class="m-3">
      <v-header>Forms</v-header>
    </div>
    <DocContent title="Selects" id="selects">
      <div slot="example" class="row">
        <div class="col-md-12 mb-5">
          <v-select placeholder="Select some option">
            <v-select-item value="Option A">Option A</v-select-item>
            <v-select-item value="Option B">Option B</v-select-item>
            <v-select-item value="Option C">Option C</v-select-item>
            <v-select-item value="Option D">Option D</v-select-item>
            <v-select-item value="Option E">Option E</v-select-item>
          </v-select>
        </div>
      </div>
      <template slot="code" type="html">
        <code class="html">
          {{ code }}
        </code>
      </template>
      <TablePropsDocsItem slot="doc-props">
        <template slot="name">placeholder</template>
        <template slot="type">string</template>
        <template slot="default"></template>
        <template slot="mandatory"></template>
        <template slot="description"></template>
      </TablePropsDocsItem>
    </DocContent>
    <DocContent title="Input fields" id="input-fields">
      <div slot="example" class="row">
        <div class="col-md-6 p-3">
          <v-input value="This is a random text" />
        </div>
        <div class="col-md-6 p-3">
          <v-input placeholder="This is a random placeholder" />
        </div>
        <div class="col-md-6 p-3">
          <v-input type="number" value="33,76" />
        </div>
        <div class="col-md-6 p-3">
          <v-input type="select">
            <option selected>Option A</option>
          </v-input>
        </div>
      </div>
      <template slot="code" type="html">
        <code class="html">
          {{ codeInput }}
        </code>
      </template>
      <TablePropsDocsItem slot="doc-props">
        <template slot="name">placeholder</template>
        <template slot="type">string</template>
        <template slot="default"></template>
        <template slot="mandatory"></template>
        <template slot="description"></template>
      </TablePropsDocsItem>
      <TablePropsDocsItem slot="doc-props">
        <template slot="name">value</template>
        <template slot="type">string</template>
        <template slot="default"></template>
        <template slot="mandatory"></template>
        <template slot="description"></template>
      </TablePropsDocsItem>
      <TablePropsDocsItem slot="doc-props">
        <template slot="name">type</template>
        <template slot="type">string</template>
        <template slot="default">text</template>
        <template slot="mandatory"></template>
        <template slot="description">
          Options: text, select, number, date, textarea
        </template>
      </TablePropsDocsItem>
      <TablePropsDocsItem slot="doc-events">
        <template slot="name">@input</template>
        <template slot="type">string</template>
        <template slot="default"></template>
        <template slot="mandatory"></template>
        <template slot="description"></template>
      </TablePropsDocsItem>
    </DocContent>
  </div>
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
<v-select placeholder="Select some option">
  <v-select-item value="Option A">Option A</v-select-item>
  <v-select-item value="Option B">Option B</v-select-item>
  <v-select-item value="Option C">Option C</v-select-item>
  <v-select-item value="Option D">Option D</v-select-item>
  <v-select-item value="Option E">Option E</v-select-item>
</v-select>
`,
      codeInput: `
<div class="col-md-6 p-3">
  <v-input value="This is a random text" />
</div>
<div class="col-md-6 p-3">
  <v-input placeholder="This is a random placeholder" />
</div>
<div class="col-md-6 p-3">
  <v-input type="number" value="33,76" />
</div>
<div class="col-md-6 p-3">
  <v-input type="select">
    <option selected>Option A</option>
  </v-input>
</div>
`
    };
  }
};
</script>

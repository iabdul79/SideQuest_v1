<template>
  <v-container>
    <v-row align="center">
      <v-col cols="4">
        <v-text-field hide-details="auto" label="Project Name" variant="outlined"></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field hide-details="auto" label="Proficiency" variant="outlined"></v-text-field>
      </v-col>
      <v-col cols="3">
        <!-- <v-text-field hide-details="auto" label="Skills set" variant="outlined"></v-text-field> -->
        <v-combobox v-model="chips" :items="items" label="Skills set" hide-details="auto"
          variant="outlined" chips clearable multiple>
          <template v-slot:selection="{ attrs, item, select, selected }">
            <v-chip v-bind="attrs" :model-value="selected" closable @click="select" @click:close="remove(item)">
              <strong>{{ item }}</strong>&nbsp;
              <span>(interest)</span>
            </v-chip>
          </template>
        </v-combobox>
      </v-col>
      <v-col cols="2">
        <v-btn block ariant="tonal">
          Search
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      chips: ['Java', 'Typescript'],
      items: ['Terraform', 'Javascript', 'Python', 'SAP', 'AWS', 'GO', 'PHP', 'MySQL'],
    }
  },

  methods: {
    remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1)
    },
  },
}
</script>
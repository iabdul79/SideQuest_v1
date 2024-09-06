<template>
  <v-card link :title="title" :subtitle="subheading">
    <template v-slot:prepend>
      <v-icon color="primary" icon="mdi-briefcase-search"></v-icon>
    </template>
    <template v-slot:append>
      <v-chip class="ma-2" color="green" label>
        Open
      </v-chip>
    </template>
    <v-card-text class="job_card_text">
      <div>{{ descriptionLine1 }}</div>
      <div>{{ descriptionLine2 }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subheading: {
      type: String,
      required: true
    },
    descriptionLine1: {
      type: String,
      required: true
    },
    descriptionLine2: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="css" scoped>
.job_card_text {
  padding: 16px;
}
</style>
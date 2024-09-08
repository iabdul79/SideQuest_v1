<template>
  <!-- <router-link class="no_decoration_link" :to="`/job/${id}`"> -->
    <v-card class="mx-2" link :title="title" :subtitle="subheading" @click="$emit('routeToJobCard')">
      <template v-slot:prepend>
        <v-icon color="primary" icon="mdi-briefcase-search"></v-icon>
      </template>
      <template v-slot:append>
        <v-chip class="ma-2" color="green" label>
          {{ status }}
        </v-chip>
      </template>
      <v-card-text class="job_card_text">
        <div v-for="(line, index) in description" :key="index">
          {{ line }}
        </div>
      </v-card-text>
    </v-card>
  <!-- </router-link> -->
</template>

<script lang="ts">

export default {
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subheading: {
      type: String,
      required: true
    },
    description: {
      type: Array,
      required: true
    },
    status: {
      type: String,
      required: true
    }
  },
}
</script>

<style lang="css" scoped>
.job_card_text {
  padding: 16px;
}

.no_decoration_link {
  text-decoration: none;
}
</style>
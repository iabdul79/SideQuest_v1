<template>
  <v-card class="mx-auto py-4">
    <v-card-title>Create post</v-card-title>

    <v-card-text>
      <v-text-field label="Title" variant="outlined" v-model="jobTitle"></v-text-field>

      <v-text-field label="Team" variant="outlined" v-model="teamName"></v-text-field>

      <v-text-field label="Hours required (hrs)" variant="outlined" type="number"
        v-model="hoursRequired"></v-text-field>

      <v-combobox variant="outlined" v-model="skills" v-model:search="search" :hide-no-data="true" :items="items"
        label="Add skills required" hide-selected multiple small-chips>
      </v-combobox>

      <v-textarea label="Job Description" variant="outlined" v-model="jobDescription"></v-textarea>
    </v-card-text>

    <v-card-actions>
      <v-btn color="primary" variant="outlined" block @click="submitForm">Submit</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app';

const appStore = useAppStore()

const jobTitle = ref('')
const teamName = ref('')
const hoursRequired = ref(0)
const jobDescription = ref('')
const items = ref([])
const skills = ref([])
const search = ref(null)

const submitForm = () => {
  appStore.createJobPost({
    title: jobTitle.value,
    subtitle: teamName.value,
    hoursRequired: hoursRequired.value,
    skills: skills.value,
    description: jobDescription.value,
  })
}
</script>

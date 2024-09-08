<template>
  <v-card class="mx-auto" max-width="344">
    <v-img height="200px" :src="profile.pictureUrl" cover></v-img>

    <v-card-title>
      {{ profile.name }}
    </v-card-title>

    <v-card-subtitle>
      Experience: {{ profile.experience }} Years
    </v-card-subtitle>

    <v-card-subtitle>
      Skill set
    </v-card-subtitle>

    <v-row align="center" class="ma-2">
      <v-chip v-for="(skill, index) in profile.skills" :key="index" class="ml-2 mb-2" color="green" density="compact" size="small" prepend-icon="mdi-checkbox-marked-circle">
        {{ skill }}
      </v-chip>
    </v-row>

    <v-card-actions>
      <v-btn color="orange-lighten-2" text="Certification"></v-btn>

      <v-spacer></v-spacer>

      <v-btn :icon="showCertificates ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="showCertificates = !showCertificates"></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="showCertificates">
        <v-divider></v-divider>

        <v-card-text>
          <v-chip v-for="(certificates, index) in profile.certifications" :key="index" class="ml-2 mb-2" color="primary" variant="outlined">
            {{ certificates }}
          </v-chip>
        </v-card-text>
      </div>
    </v-expand-transition>

    <v-card-actions>
      <v-btn color="orange-lighten-2" text="About"></v-btn>

      <v-spacer></v-spacer>

      <v-btn :icon="showAbout ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="showAbout = !showAbout"></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="showAbout">
        <v-divider></v-divider>

        <v-card-text>
          <v-sheet class="py-2" v-for="({ title, paragraph }, index) in profile.description" :key="index">
            <h3 class="text-h6">{{ title }}</h3>
            <p class="text-body-2">{{ paragraph }}</p>
          </v-sheet>
        </v-card-text>
      </div>
    </v-expand-transition>

    <v-divider></v-divider>
    <v-card-text>
      <v-file-input label="Resume" variant="underlined"></v-file-input>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app';

const appStore = useAppStore()

const showAbout = ref(false)
const showCertificates = ref(false)

const profile = appStore.candidateProfile
</script>
<template>
  <v-container>
    <v-card>
      <v-card-item>
        <v-card-title>{{ activeJob.title }}</v-card-title>

        <v-card-subtitle>
          <span class="me-1">Job id: {{ activeJob.id }}</span>
        </v-card-subtitle>
        <v-card-subtitle>
          <span class="me-1"> {{ activeJob.subtitle }}</span>
        </v-card-subtitle>
        <template v-slot:append>
          <v-chip class="ma-2" :color="activeJob.status === 'closed' ? 'error' : 'primary'" label>
            {{ activeJob.status }}
          </v-chip>
        </template>
      </v-card-item>
      <v-card-text class="pb-0">
        <div class="py-2">
          <v-row align="center" class="mx-0">
            <div>
              Hours required: {{ activeJob.hoursRequired }}
            </div>
          </v-row>
          <v-row align="center" class="mx-0">
            <div class="subheading">Skill set</div>
              <v-chip v-for="(skill, index) in activeJob.skills" :key="index" class="ma-2" color="green" prepend-icon="mdi-checkbox-marked-circle">
                {{ skill }}
              </v-chip>
          </v-row>
        </div>
        <v-divider class="my-4"></v-divider>
        <div class="my-4">
          <v-sheet class="py-2" v-for="({ title, paragraph }, index) in activeJob.description" :key="index">
            <h3 class="text-h6">{{ title }}</h3>
            <p class="text-body-2">{{ paragraph }}</p>
          </v-sheet>
        </div>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions class="mx-2">
        <span><i>Posted on: {{ activeJob.postedDate }}</i></span>
        <v-spacer></v-spacer>
        <v-btn variant="tonal" color="error">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app';

const appStore = useAppStore()
const jobId =  window.location.pathname.split("/").pop();
appStore.updateActiveManagerJobId(`${jobId}` || '');
const activeJob = appStore.getManagerActiveJobFromId
</script>
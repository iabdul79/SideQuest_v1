<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <v-container class="pa-0 job_list_container">
          <v-row v-for="job in appStore.getManagerJobsList" :key="job.id">
            <v-col>
              <ShortJobCard :id="job.id" :title="job.title" :subheading="job.subtitle"
                :description="job.shortDescription" :status="job.status" @routeToJobCard="routeToJobCard(job.id)" />
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="4">
        <JobPosterForm />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app';
import { useRouter } from 'vue-router'

const appStore = useAppStore()
const router = useRouter()

function routeToJobCard(id: string) {
  router.push({ path: `/post/${id}` })
}
</script>

<style lang="css" scoped>
.job_list_container {
  max-height: 100vh;
  overflow-y: auto;
  margin-bottom: 30px;
}
</style>

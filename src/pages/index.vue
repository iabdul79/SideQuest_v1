<template>
  <v-container>
    <v-row>
      <JobSearchBar />
    </v-row>
    <v-row>
      <v-col cols="8">
        <v-container class="pa-0 job_list_container">
          <v-row v-for="job in appStore.getCandidatesJobsList" :key="job.id">
            <v-col>
              <ShortJobCard :id="job.id" :title="job.title" :subheading="job.subtitle" :description="job.shortDescription"
                :status="job.status" @routeToJobCard="routeToJobCard(job.id)"/>
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="4">
        <ProfileCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app';
import { useRouter } from 'vue-router'

const router = useRouter()

const appStore = useAppStore()

function routeToJobCard(id: string) {
  router.push({ path: `/job/${id}` })
}
</script>

<style lang="css" scoped>
.job_list_container {
  max-height: 100vh;
  overflow-y: auto;
  margin-bottom: 30px;
}
</style>

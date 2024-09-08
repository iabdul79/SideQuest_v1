<template>
  <v-container>
    <v-card class="mx-auto my-4" max-width="344">
      <v-card-actions>
        <v-btn color="orange-lighten-2" text="Applied"></v-btn>
        <v-spacer></v-spacer>
        <v-btn :icon="showApplied ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="showApplied = !showApplied"></v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="showApplied">
          <v-divider></v-divider>
          <v-card-text>
            <v-btn v-for="candidate in appliedCandidates" :key="candidate.id" block rounded="xl" class="justify-start my-4" color="orange-lighten-3" variant="outlined"
              prepend-icon="mdi-account-circle">
              {{ candidate.name }}
              <template v-slot:prepend>
                <v-icon color="orange-lighten-3"></v-icon>
              </template>
            </v-btn>
          </v-card-text>
        </div>
      </v-expand-transition>


      <v-card-actions>
        <v-btn color="orange-lighten-2" text="Confirmed"></v-btn>
        <v-spacer></v-spacer>
        <v-btn :icon="showConfirmed ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="showConfirmed = !showConfirmed"></v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="showConfirmed">
          <v-divider></v-divider>
          <v-card-text>
            <v-btn v-for="candidate in confirmedCandidates" :key="candidate.id" block rounded="xl" class="justify-space-between my-4" color="green" variant="outlined">
              <span class="d-flex justify-content-start mr-auto">
                <v-icon class="v-btn__prepend" color="green" icon="mdi-account-circle"></v-icon>
                {{ candidate.name }}
              </span>
              <template v-slot:append>
                <v-icon color="green" icon="mdi-check-circle"></v-icon>
              </template>
            </v-btn>
          </v-card-text>
        </div>
      </v-expand-transition>


      <v-card-actions>
        <v-btn color="orange-lighten-2" text="Suggestions"></v-btn>
        <v-spacer></v-spacer>
        <v-btn :icon="showSuggestions ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="showSuggestions = !showSuggestions"></v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="showSuggestions">
          <v-divider></v-divider>
          <v-card-text>
            <v-btn v-for="candidate in suggestedCandidates" :key="candidate.id" block rounded="xl" class="justify-start my-4" color="primary" variant="outlined"
              prepend-icon="mdi-account-circle">
              {{ candidate.name }}
              <template v-slot:prepend>
                <v-icon color="primary"></v-icon>
              </template>
            </v-btn>
          </v-card-text>
        </div>
      </v-expand-transition>


      <v-card-actions>
        <v-btn color="orange-lighten-2" text="Search candidates"></v-btn>

        <v-spacer></v-spacer>

        <v-btn :icon="showSearch ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="showSearch = !showSearch"></v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="showSearch">
          <v-divider></v-divider>

          <v-card-text>
            Enim sunt id aliquip tempor commodo anim quis qui in. Nisi quis est ad cupidatat eiusmod in id in amet
            consectetur. Elit nulla commodo pariatur occaecat consequat enim ad.

            In est ut in aliqua est. Ipsum veniam aliquip laboris eiusmod laborum. Fugiat aliquip officia elit elit
            voluptate non eu quis. Deserunt incididunt enim est voluptate aute incididunt.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app';

const showApplied = ref(false)
const showConfirmed = ref(false)
const showSuggestions = ref(true)
const showSearch = ref(false)

const appStore = useAppStore()

const appliedCandidates = appStore.getAppliedCandidatesList
const confirmedCandidates = appStore.getConfirmedCandidatesList
const suggestedCandidates = appStore.getSuggestedCandidatesList
console.log(appliedCandidates)
</script>

<style lang="css" scoped>
.gird_display {
  display: grid;
}

.like_button {
  text-decoration: none;
}
</style>
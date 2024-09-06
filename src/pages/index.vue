<template>
  <v-container>
    <v-row>
      <JobSearchBar />
    </v-row>
    <v-row>
      <v-col cols="8">
        <v-container class="job_list_container">
          <v-row v-for="i in 10" :key="i">
            <v-col>
              <ShortJobCard title="Solution to optimize query search" subheading="Software Engineer"
                description-line1="Laborum et commodo ut do dolore aliquip ullamco non."
                description-line2="Aliqua esse qui dolore enim officia." />
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="4">
          <!-- Here comes the Profile card -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
//
</script>

<style lang="css" scoped>
.job_list_container {
  max-height: 78vh;
  overflow-y: auto;  
}

</style>

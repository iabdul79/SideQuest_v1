<template>
  <v-app>
    <v-main>
      <AppHeader />
      <NavigationDrawer />
      <v-container class="page_container">
        <router-view />
      </v-container>
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script lang="ts" setup>
import AppHeader from '@/components/AppHeader.vue';

  //
</script>

<style lang="css" scoped>
.page_container {
  min-height: 300px;
  min-width: 300px;
  max-width: 1260px;
  margin: auto;
}
</style>

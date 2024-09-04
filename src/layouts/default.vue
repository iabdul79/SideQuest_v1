<template>
  <v-app>
    <v-main>
      <AppHeader />
      <NavigationDrawer />
      <router-view />
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script lang="ts" setup>
import AppHeader from '@/components/AppHeader.vue';

  //
</script>

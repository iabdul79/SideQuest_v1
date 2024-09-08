<template>
  <v-app>
    <v-main>
      <AppHeader @toggle-theme="toggleTheme" />
      <NavigationDrawer />
      <v-container class="page_container">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import AppHeader from '@/components/AppHeader.vue';
import { useTheme } from 'vuetify';


const theme = useTheme()

function toggleTheme () {
  console.log('emit event is called', theme.global.current.value.dark)
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<style lang="css" scoped>
.page_container {
  min-height: 300px;
  min-width: 300px;
  max-width: 1260px;
  margin: auto;
}
</style>

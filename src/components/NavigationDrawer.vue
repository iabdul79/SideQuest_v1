<template>
  <v-navigation-drawer
    expand-on-hover
    rail
  >
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        subtitle="sandra@booking.com"
        title="Sandra Adams"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list nav>
      <v-list-item prepend-icon="mdi-view-dashboard" title="Listings" value="allListings" active></v-list-item>
      <v-list-item prepend-icon="mdi-check-circle" title="Applied" value="applied"></v-list-item>
      <v-list-item prepend-icon="mdi-history" title="History" value="history"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  
}
</script>
<style lang="">
  
</style>
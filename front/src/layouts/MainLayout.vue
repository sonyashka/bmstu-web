<template>
  <q-layout view="lHh Lpr lFf">
    <NavBar></NavBar>
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import NavBar from 'layouts/includes/NavBar.vue';

</script>

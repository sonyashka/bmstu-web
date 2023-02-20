<template>
  <div class="navbar">
    <div class="navbar__logo">
      BookList
    </div>
    <div class="navbar__actions">
      <q-btn @click="logout" flat no-caps class="btn">Выйти</q-btn>
    </div>
  </div>
</template>

<script setup lang="ts">

import { useRouter } from 'vue-router';
import { UserState } from 'src/services/UserState';

const uss = new UserState();
const router = useRouter();
const logout = () => {
  uss.removeToken();
  router.push('/signin');
};
</script>

<style lang="scss">
.navbar {
  background: #F5EAD1;
  display: flex;
  justify-content: space-between;
  padding: 40px;

  &__logo {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 800;
    font-size: 40px;
    line-height: 54px;
    display: flex;
    align-items: center;
  }
}
</style>

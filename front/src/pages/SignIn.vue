<template>
  <div class="brand-page">
    <div class="form">
      <div class="form__logo">
        BookList
      </div>

      <form class="form__card" @submit="signIn">
        <input-field v-model="form.email" label="Email" type="email"></input-field>
        <input-field v-model="form.password" label="Пароль" type="password"></input-field>

        <q-btn class="btn btn--accent" no-caps flat type="submit">
          Войти
        </q-btn>

        <q-btn class="btn btn--accent" no-caps flat to="/signup">
          Регистрация
        </q-btn>
      </form>

    </div>
  </div>
</template>

<script lang="ts" setup>
import InputField from 'components/InputField.vue';
import { ref } from 'vue';
import { UserService } from 'src/services/Auth';
import { useRouter } from 'vue-router';
import { UserState } from 'src/services/UserState';
import { Loading } from 'quasar';

const form = ref({
  email: '',
  password: '',
});

const us = new UserService();

const uss = new UserState();

const router = useRouter();
const signIn = async () => {
  Loading.show();
  const token = await us.signIn(form.value);

  if (!token) {
    return;
  }

  Loading.hide();

  uss.saveToken(token);

  await router.push('/');
};
</script>

<style lang="scss">

.form {
  width: 500px;
  margin: auto;
  padding-top: 300px;

  .form__logo {
    //styleName: Main logo style;
    font-family: Open Sans;
    font-size: 96px;
    font-weight: 800;
    line-height: 131px;
    letter-spacing: 0em;
    text-align: center;
  }

  &__card {
    margin-top: 20px;
    background: #F1EBE9;
    padding: 22px 36px;
    border-radius: 25px;
  }

  .input-field {
    margin-bottom: 20px;
  }

  .btn {
    margin-top: 20px;
  }

}

.brand-page {
  background: #F5EAD1;
  height: 100vh;
}

</style>

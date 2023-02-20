<template>
  <div class="book-edit-dialog">
    <div class="text-h5">Редактировать книгу</div>
    {{ book.author }} {{ book.title }}
    <input-field label="Состояние" v-model="bookValue.status"></input-field>
    <input-field label="Комментарий" v-model="bookValue.comment"></input-field>
    <button @click="save" class="btn btn--accent q-mt-sm">Редактировать книгу</button>
  </div>
</template>
<script setup lang="ts">
import InputField from 'components/InputField.vue';
import { onMounted, ref } from 'vue';
import { UserBook } from 'src/services/userBooks';

const props = defineProps(['book']);

const bookValue = ref<UserBook>({
  author: '',
  comment: '',
  id: '',
  status: '',
  title: '',
});

const emit = defineEmits(['save']);

onMounted(() => {
  if (props.book) {
    bookValue.value = { ...props.book };
  }
});

const save = () => {
  emit('save', bookValue.value);
};

</script>

<style lang="scss">
.book-edit-dialog {
  background: #fff;
  padding: 20px;
  border-radius: 25px;
}
</style>

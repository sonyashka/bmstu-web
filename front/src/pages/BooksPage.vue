<template>
  <div>
    <q-table bordered hide-bottom flat :rows="books" :columns="columns"></q-table>
  </div>
</template>

<script lang="ts" setup>
import { BookService, Book } from 'src/services/Book';
import { computed, onMounted, ref } from 'vue';
import { Loading } from 'quasar';

const bs = new BookService();

const books = ref<Book[]>([]);
const loadBooks = async () => {
  Loading.show();
  books.value = await bs.getBooks();
  Loading.hide();
};

const columns = computed(() => ([
  {
    field: 'id',
    label: 'id',
  },
  {
    field: 'title',
    label: 'Заголовок',
  },
  {
    field: 'author',
    label: 'Автор',
  },
]));

onMounted(() => {
  loadBooks();
});
</script>

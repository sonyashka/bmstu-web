<template>
  <q-page>
    <div class="row items-left">
      <BookCard
        v-for="book in books"
        :key="book.id" :book="book"
        @edit="editBook(book)" @delete="deleteBook(book)"/>
      <div class="q-pa-md">
        <q-btn @click="addBookAction" flat size="xs" no-caps>
          <BookCardAdd></BookCardAdd>
        </q-btn>
      </div>

    </div>

    <q-dialog v-model="editBookDialog">
      <BookEditModel :book="editBookValue" @save="editBookData"></BookEditModel>
    </q-dialog>

    <q-dialog v-model="deleteDialog">
      <q-card>
        <q-card-section>
          <div class="text-h5">
            Вы действительно хотете удалить?
          </div>

          <button @click="deleteBookData" class="btn btn--accent">Да</button>
          <button class="btn" v-close-popup>Нет</button>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="addBookDialog">
      <q-card>
        <q-card-section>
          <div class="text-h5">
            Новая книга
          </div>
          <div class="input-field">
            <div class="input-field__label">
              Книга
            </div>
            <q-select
              emit-value
              :options="booksOptions"
              v-model="addBookValue.bookId"
              rounded
              outlined
              map-options
            />
          </div>
          <div class="input-field">
            <div class="input-field__label">
              Состояние
            </div>
            <q-input rounded outlined
                     v-model="addBookValue.status"

            />
          </div>
          <div class="input-field">
            <div class="input-field__label">
              Комментарий
            </div>
            <q-input rounded outlined
                     v-model="addBookValue.comment"
            />
          </div>
          <button @click="addBookData" class="btn btn--accent q-mt-sm">Добавить книгу</button>

        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import BookCard from 'components/BookCard.vue';
import BookCardAdd from 'components/BookCardAdd.vue';
import BookEditModel from 'components/BookEditModel.vue';
import { UserBook, UserBookAdd, UserBookService } from 'src/services/userBooks';
import { Loading } from 'quasar';
import { Book, BookService } from 'src/services/Book';

const books = ref<UserBook[]>([]);

const deleteDialog = ref<boolean>(false);
const deleteId = ref<string>('');
const editBookDialog = ref<boolean>(false);
const editBookValue = ref<UserBook | null>(null);
const addBookValue = ref<UserBookAdd | null>(null);

const bs = new UserBookService();
const cbs = new BookService();

const cBooks = ref<Book[]>([]);

const booksOptions = computed(() => cBooks.value.map((b) => ({
  label: `${b.author} ${b.title}`,
  value: `${b.id}`,
})));

const reloadBooks = async () => {
  Loading.show();
  books.value = await bs.getBooks();
  Loading.hide();
};

onMounted(async () => {
  reloadBooks();

  cBooks.value = await cbs.getBooks();
});

const editBook = (book: UserBook) => {
  editBookDialog.value = true;
  editBookValue.value = book;
};
const editBookData = async (book: UserBook) => {
  Loading.show();
  await bs.updateBook(book);
  editBookDialog.value = false;
  Loading.hide();
  reloadBooks();
};

const deleteBook = (book: UserBook) => {
  deleteDialog.value = true;
  deleteId.value = book.id;
};

const deleteBookData = async () => {
  Loading.show();
  await bs.deleteBook(deleteId.value);
  deleteDialog.value = false;
  Loading.hide();
  reloadBooks();
};

const addBookDialog = ref(false);

const addBookAction = () => {
  addBookDialog.value = true;
  addBookValue.value = {
    bookId: '',
    comment: '',
    status: '',
  };
};

const addBookData = async () => {
  if (!addBookValue.value) return;

  Loading.show();
  await bs.createBook(addBookValue.value);
  addBookDialog.value = false;
  Loading.hide();
  reloadBooks();
};
</script>

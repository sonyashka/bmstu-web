<template>
  <div class="book-card">
    <div class="book-card__item">
      <div class="book-card__item__actions">
        <q-btn flat danse size="xs" class="btn btn--flat" @click="$emit('edit')">
          <img class="book-card__comment__icon" src="../assets/edit.svg">

        </q-btn>
        <q-btn flat danse size="xs" class="btn btn--flat" @click="$emit('delete')">
          <img class="book-card__comment__icon" src="../assets/trash.svg">
        </q-btn>
      </div>
      <div class="book-card__item__author">
        {{ book.author }}
      </div>
      <div class="book-card__item__title">
        {{ book.title }}
      </div>
      <div class="flex-space"></div>
      <div class="book-card__item__status">
        {{ book.status }}
      </div>
    </div>
    <div class="book-card__comment" v-if="book.comment && book.comment !== ''">
      <img class="book-card__comment__icon" src="../assets/quoteupsquare.svg">
      <div class="book-card__comment__text">
        {{ book.comment }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { emit } from 'cluster';

const props = defineProps(['book']);
</script>

<style lang="scss">

.book-card {
  width: 250px;
  margin: 20px;

  &__item {
    //background-color: #;
    height: 330px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    background: url("../assets/bookmark.svg") no-repeat 90% 0%;

    background-color: #F1EBE9;

    &__actions {
      height: 33px;
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
      margin-top: 10px;

      .btn {
        width: 33px;
        padding:0;
      }
    }

    &__author {
      font-family: Roboto;
      font-size: 20px;
      font-weight: 400;
      line-height: 23px;
      letter-spacing: 0em;
      text-align: center;
      padding: 0 20px;
      margin-top: 40px;
    }

    &__title {
      //styleName: Sys style;
      font-family: Raleway;
      font-size: 24px;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: 0em;
      text-align: center;
      padding: 0 20px;
      margin-top: 10px;

    }

    &__status {
      //styleName: Sys style;
      font-family: Raleway;
      font-size: 24px;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: 0em;
      text-align: center;

      background: #D9D9D9;
      padding: 10px;
      border-radius: 20px;
    }
  }

  &__comment {
    margin-top: 20px;
    display: flex;

    &__icon {
      height: 33px;
      width: 33px;
    }

    &__text {
      //styleName: Ordinary;
      font-family: Roboto;
      font-size: 20px;
      font-weight: 400;
      line-height: 23px;
      letter-spacing: 0em;
      text-align: left;
      padding-left: 10px
    }
  }
}

.book-card--add {
  width: 250px;
  height: 330px;
  //styleName: Sys style;
  font-family: Raleway;
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

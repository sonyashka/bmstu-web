<template>
  <div class="input-field">
    <div class="input-field__label">
      {{ label }}
    </div>
    <q-input rounded outlined :type="type" v-model="value"/>
  </div>
</template>

<style lang="scss">
.input-field {
  //styleName: Sys style;
  font-family: Raleway;
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;

  &__label {
    margin: 5px;
  }

  //input {
  //  display: block;
  //  width: 100%;
  //  height: 48px;
  //  padding: 10px;
  //  border-radius: 25px;
  //  border: 2px #ccc solid;
  //}

}
</style>

<script lang="ts" setup>

import { computed } from 'vue';

const props = defineProps(['label', 'type', 'modelValue']);

const emit = defineEmits(['update:modelValue']);

const value = computed({
  get: () => props.modelValue || '',
  set: (v) => {
    emit('update:modelValue', v);
  },
});
</script>

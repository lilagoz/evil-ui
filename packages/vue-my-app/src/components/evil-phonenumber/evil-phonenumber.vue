<script setup lang="ts">
const props = defineProps({
  foo: String,
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);

const onValueChange = (ev: any) => {
  console.log("e2", ev);
  emit("update:modelValue", ev.target.value);
};
</script>

<template>
  <h6>evil-phonenumber {{ foo }}</h6>
  <evil-phonenumber-input
    @valueChange="onValueChange($event)"
  ></evil-phonenumber-input>
</template>

<style scoped></style>

<script lang="ts" setup>
import evilPhonenumber from "../components/evil-phonenumber/evil-phonenumber.vue";
import { ref } from "vue";
const foo = ref("kukac");
const bar = ref("");
</script>

<template>
  <sizeable-window windowTitle="cim-cim">
    <div class="form-item">
      <p>cirmoscicahaj</p>
      <evilPhonenumber v-model="bar" foo="prop-test"></evilPhonenumber>
      <pre>value: {{ bar }}</pre>
    </div>
    <div class="form-item">
      <input v-model="foo" />
      <pre>{{ foo }}</pre>
    </div>
  </sizeable-window>
</template>

<style lang="scss">
.form-item {
  margin: 1em;
}
</style>

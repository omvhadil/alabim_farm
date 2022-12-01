<script setup>
import { Field } from "vee-validate";

defineProps({
  title: {
    type: String,
    default: "Input",
  },
  placeholder: {
    type: String,
    default: "text",
  },
});
</script>
<template>
  <div class="mb-3">
    <label :for="title" class="form-label">{{ title }}</label>
    <Field
      as="textarea"
      class="form-control"
      style="height: 100px"
      :id="title"
      :placeholder="placeholder"
    />
  </div>
</template>

<script setup>
import { Field, ErrorMessage } from "vee-validate";

defineProps({
  title: {
    type: String,
    default: "Input",
  },
  errors: {
    required: true,
  },
  name: {
    type: String,
    required: true,
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
      :name="name"
      :class="{ 'is-invalid': errors }"
      class="form-control"
      style="height: 100px"
      :id="title"
      :placeholder="placeholder"
    />
    <ErrorMessage :name="name" class="invalid-feedback" />
  </div>
</template>

<script setup>
import { ErrorMessage, Field } from "vee-validate";

defineProps({
  title: {
    type: String,
    default: "Input",
  },
  name: {
    type: String,
  },
  errors: {
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
      type="text"
      class="form-control"
      :class="{ 'is-invalid': errors }"
      :id="title"
      :placeholder="placeholder"
      :name="name"
    />
    <ErrorMessage :name="name" class="invalid-feedback" />
  </div>
</template>

<script setup>
import { ErrorMessage, Field } from "vee-validate";

const props = defineProps({
  title: {
    type: String,
    default: "Input",
  },
  name: {
    type: String,
  },
  errors: {
    required: true,
  },
  placeholder: {
    type: String,
    default: "text",
  },
  type: {
    required: true,
  },
});
</script>
<template>
  <div class="mb-3">
    <label :for="title" class="form-label">{{ title }}</label>
    <Field
      :type="type"
      class="form-control"
      :class="{ 'is-invalid': errors }"
      :id="title"
      :placeholder="placeholder"
      :name="name"
    />
    <ErrorMessage :name="name" class="invalid-feedback" />
  </div>
</template>

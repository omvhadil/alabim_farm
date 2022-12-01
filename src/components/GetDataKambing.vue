<script setup>
import { onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
const dataKambing = reactive({
  data: [],
});

const getData = async () => {
  await axios
    .get("https://6381d5c59842ca8d3c9a9d36.mockapi.io/db_kambing")
    .then((response) => {
      dataKambing.data = response.data;
    })
    .catch((error) => {
      alert(error);
    });
};

onMounted(() => {
  getData();
});
</script>
<template></template>

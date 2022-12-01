<script setup>
import { onMounted, reactive } from "vue";
import { getData } from "../plugins/Api";

const obj = reactive({
  dataKambing: [],
});

// const delete = (id) => {
//   delData(id)
//       .then((Response) => {
//         console.log(Response);
//         obj.dataKambing = Response.data;
//       })
//       .catch((error) => {
//         alert(error);
//       });
// }

onMounted(() => {
  getData()
    .then((Response) => {
      obj.dataKambing = Response.data;
    })
    .catch((error) => {
      alert(error);
    });
});
</script>
<template>
  <section class="data-list section bg-white">
    <h6 class="mb-3 text-primary">Total Data : {{ obj.dataKambing.length }}</h6>
    <div class="container-data-list">
      <div
        class="card-data d-flex mb-2"
        v-for="item in obj.dataKambing"
        :key="item.id"
      >
        <table>
          <tr>
            <td>Nama Kambing</td>
            <td>:</td>
            <td>{{ item.namaKambing }}</td>
          </tr>
          <tr>
            <td>Tanggal Masuk</td>
            <td>:</td>
            <td>{{ item.tanggalMasuk }}</td>
          </tr>
          <tr>
            <td>Berat /kg</td>
            <td>:</td>
            <td>{{ item.berat }}</td>
          </tr>
        </table>
        <button class="btn-detail bg-primary p-2 rounded-3 text-white">
          Detail
        </button>
      </div>
    </div>
  </section>
</template>
<style scoped>
.card-data {
  background-color: #fff;
  width: 100%;
  height: auto;
  border-top: 4px solid #ccc;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
}
</style>

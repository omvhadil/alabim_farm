<script setup>
import { onMounted, reactive } from "vue";
import { getData, delData } from "../plugins/Api";
import Swal from "sweetalert2";

const obj = reactive({
  dataKambing: [],
});

const onGetData = () => {
  getData()
    .then((Response) => {
      obj.dataKambing = Response.data;
    })
    .catch((error) => {
      alert(error);
    });
};

const onDelete = (id) => {
  delData(id)
    .then((Response) => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Data Berhasil dihapus",
        showConfirmButton: false,
        timer: 2000,
      });
      onGetData();
    })
    .catch((error) => {
      alert(error);
    });
};

onMounted(() => {
  onGetData();
});
</script>
<template>
  <section class="data-list section bg-white">
    <h6 class="mb-3 text-primary">Total Data : {{ obj.dataKambing.length }}</h6>
    <div class="container-data-list">
      <div
        class="card-data mb-2 flex-column"
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
        <div class="d-flex gap-2 mx-auto mt-3">
          <button
            @click="onDelete(item.id)"
            type="button"
            class="btn btn-danger"
            style="
              --bs-btn-padding-y: 0.25rem;
              --bs-btn-padding-x: 0.5rem;
              --bs-btn-font-size: 0.75rem;
            "
          >
            Hapus
          </button>
          <button
            type="button"
            class="btn btn-primary"
            style="
              --bs-btn-padding-y: 0.25rem;
              --bs-btn-padding-x: 0.5rem;
              --bs-btn-font-size: 0.75rem;
              width: 100%;
            "
          >
            Detail
          </button>
        </div>
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

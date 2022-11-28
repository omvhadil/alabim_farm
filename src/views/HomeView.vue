<script setup>
import DataList from "./DataList.vue";
import { useRouter } from "vue-router";

const router = useRouter();
</script>
<template>
  <!-- ================== Fitur ====================== -->
  <section class="p-3">
    <h5>Fitur</h5>
    <div class="row mt-3">
      <button
        @click="router.push('/TambahHewan')"
        class="col-3 text-center"
        style="cursor: pointer"
      >
        <img src="../assets/tambahHewan.png" alt="" style="width: 50px" />
        <p class="text-small" for="">
          Tambah <br />
          Hewan
        </p>
      </button>
      <div class="col-3 text-center" style="cursor: pointer">
        <img src="../assets/Brcode.png" alt="" style="width: 50px" />
        <p class="text-small" for="">
          Scan <br />
          Brcode
        </p>
      </div>
    </div>
  </section>
  <!-- ================== Data Kandang ====================== -->
  <div class="data-container bg-primary mb-4">
    <section class="ps-3 pe-3 mb-4">
      <h5 class="text-white">Data Kandang</h5>
      <div class="row mt-3 d-flex justify-content-center gap-3">
        <div class="col-5 text-center bg-white text-dark rounded p-2">
          <img src="../assets/jantan.png" alt="" style="width: 40px" />
          <h6>Jantan : 0</h6>
        </div>
        <div class="col-5 text-center bg-white text-dark rounded p-2">
          <img src="../assets/betina.png" alt="" style="width: 40px" />
          <h6>Betina : 0</h6>
        </div>
      </div>
      <div class="row mt-3 d-flex justify-content-center gap-3">
        <div class="col-5 text-center bg-white text-dark rounded p-2">
          <img src="../assets/terjual.png" alt="" style="width: 40px" />
          <h6>Terjual : 0</h6>
        </div>
        <div class="col-5 text-center bg-white text-dark rounded p-2">
          <img src="../assets/mati.png" alt="" style="width: 40px" />
          <h6>Mati : 0</h6>
        </div>
      </div>
    </section>
  </div>
  <!-- ================== Total Data ====================== -->
  <DataList />
</template>
<style scoped>
.data-container {
  width: 100%;
  height: auto;
  padding: 20px 0;
}
</style>

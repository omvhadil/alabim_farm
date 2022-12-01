<script setup>
import { useRouter } from "vue-router";
import DataList from "./DataList.vue";

const router = useRouter();
</script>
<template>
  <!-- ================== Fitur ====================== -->
  <section class="fitur">
    <div
      class="container-fitur section bg-white pt-2 pb-4 d-flex align-items-center justify-content-between"
    >
      <div class="fitur-search">
        <form style="width: 100%">
          <input
            class="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </div>
      <div class="fitur-tambah">
        <button @click="router.push('/TambahHewan')">
          <img src="../assets/tambahHewan.png" alt="" style="width: 45px" />
        </button>
      </div>
      <div class="fitur-scan">
        <img src="../assets/Brcode.png" alt="" style="width: 35px" />
      </div>
    </div>
  </section>

  <!-- ================== Banner ====================== -->
  <section class="banner section bg-white pb-4 pt-2">
    <div
      class="container-banner bg-primary p-3 d-flex align-items-center justify-content-between"
      style="height: 150px; border-radius: 20px"
    >
      <h5 class="text-white">
        berternak <br />
        dengan mudah
      </h5>
      <img src="../assets/banner.png" alt="" style="width: 130px" />
    </div>
  </section>

  <!-- ================== Data Kandang ====================== -->
  <section class="data-ternak section bg-white pt-3 pb-5">
    <div class="container-data-ternak">
      <div class="d-flex justify-content-center gap-3 mb-3">
        <div
          class="rounded p-2 ps-3 shadow-sm d-flex align-items-center"
          style="width: 100%"
        >
          <img src="../assets/jantan.png" class="me-3" style="width: 40px" />
          <p class="text-secondary mb-0">
            Jantan <span class="text-dark">: -</span>
          </p>
        </div>
        <div
          class="rounded p-2 ps-3 shadow-sm d-flex align-items-center"
          style="width: 100%"
        >
          <img src="../assets/betina.png" class="me-3" style="width: 40px" />
          <p class="text-secondary mb-0">
            Betina <span class="text-dark">: -</span>
          </p>
        </div>
      </div>
      <div class="d-flex justify-content-center gap-3">
        <div
          class="rounded p-2 ps-3 shadow-sm d-flex align-items-center"
          style="width: 100%"
        >
          <img src="../assets/terjual.png" class="me-3" style="width: 40px" />
          <p class="text-secondary mb-0">
            Terjual <span class="text-dark">: -</span>
          </p>
        </div>
        <div
          class="rounded p-2 ps-3 shadow-sm d-flex align-items-center"
          style="width: 100%"
        >
          <img src="../assets/mati.png" class="me-3" style="width: 40px" />
          <p class="text-secondary mb-0">
            Mati <span class="text-dark">: -</span>
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- ================== Total Data ====================== -->
  <DataList />
</template>
<style scoped>
.data-container {
  width: 100%;
  height: auto;
  padding: 20px 0;
}
.text-small {
  font-size: 11px;
}
</style>

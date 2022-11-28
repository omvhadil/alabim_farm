<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>
<template>
  <div class="container p-4 pt-2">
    <div class="d-flex align-items-center mb-4">
      <button @click="router.push('/')">
        <img
          src="../assets/arrow.png"
          alt=""
          style="width: 30px"
          class="me-4"
        />
      </button>
      <h6 class="m-0 fw-bold ms-5">Tambah Hewan</h6>
    </div>
    <form>
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">Nama Hewan</label>
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="Nama Hewan"
        />
      </div>
      <div class="mb-3">
        <label for="tanggal beli" class="form-label">Tanggal Beli</label>
        <input
          type="text"
          class="form-control"
          id="tanggal beli"
          placeholder="tanggal beli"
        />
      </div>
      <div class="mb-3">
        <label for="Berat beli/kg" class="form-label">Berat beli /kg</label>
        <input
          type="text"
          class="form-control"
          id="Berat beli/kg"
          placeholder="Berat beli/kg"
        />
      </div>
      <div class="mb-3">
        <label for="floatingTextarea2" class="form-label">Comments</label>
        <textarea
          class="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style="height: 100px"
        ></textarea>
      </div>

      <div class="d-grid gap-2 mt-4">
        <button class="btn btn-primary" type="submit">Simpan</button>
      </div>
    </form>
  </div>
</template>

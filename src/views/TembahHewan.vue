<script setup>
import { useRouter } from "vue-router";
import MyInput from "../components/MyInput.vue";
import MyTextArea from "../components/MyTextArea.vue";
import { Field, Form } from "vee-validate";
import * as Yup from "yup";

const router = useRouter();

const schema = Yup.object().shape({
  namaKambing: Yup.string()
    .required("Nama Kambing Wajib diisi")
    .typeError("Nama Kambing Wajib Diisi"),
  tanggalMasuk: Yup.string()
    .required("Tanggal Wajib Diisi")
    .typeError("Tanggal Wajib Diisi"),
  berat: Yup.string()
    .required("Berat Wajib Diisi")
    .typeError("Berat Wajib Diisi"),
});

const addData = async (values) => {
  const sendData = {
    namaKambing: values.dataKambing,
    tanggal: values.tanggal,
    berat: values.berat,
  };
  await axios
    .post("https://6381d5c59842ca8d3c9a9d36.mockapi.io/db_kambing", sendData)
    .then(() => {
      router.push("./DataList.vue");
    })
    .catch((error) => {
      alert(error);
    });
};
</script>
<template>
  <section
    class="tambah-hewan section bg-white"
    style="width: 100%; height: 100vh"
  >
    <div class="container-tambah-hewan pb-5">
      <div class="d-flex align-items-center mb-4 pt-2">
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
      <!-- ================ Inputan ============== -->
      <Form @submit="addData" :validation-schema="schema" v-slot="{ errors }">
        <MyInput
          name="namaKambing"
          title="Nama Hewan"
          :errors="errors.namaKambing"
          placeholder="Masukkan Nama Hewan"
        />
        <MyInput
          name="tanggal"
          title="Tanggal Masuk"
          :errors="errors.tanggal"
          placeholder="Masukkan Tanggal Masuk"
        />
        <MyInput
          name="berat"
          title="Berat /kg"
          :errors="errors.berat"
          placeholder="Masukkan Berat /kg"
        />
        <!-- <MyTextArea title="Keterangan" placeholder="Masukkan keterangan" /> -->
        <div class="d-grid gap-2 col-6 mx-auto">
          <button class="btn btn-primary mt-3" type="submit">Button</button>
        </div>
      </Form>
    </div>
  </section>
</template>

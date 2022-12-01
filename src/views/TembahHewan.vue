<script setup>
import { useRouter } from "vue-router";
import MyInput from "../components/MyInput.vue";
import MyTextArea from "../components/MyTextArea.vue";
import { Form } from "vee-validate";
import * as Yup from "yup";
import { postData } from "../plugins/Api";

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
  keterangan: Yup.string()
    .required("keterangan Wajib Diisi")
    .typeError("keterangan Wajib Diisi"),
});

const addData = async (values) => {
  const sendData = {
    namaKambing: values.namaKambing,
    keterangan: values.keterangan,
    tanggalMasuk: values.tanggalMasuk,
    berat: values.berat,
  };
  postData(sendData)
      .then(() => {
        router.push("/");
        // console.log(sendData);
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
          type="text"
          title="Nama Hewan"
          :errors="errors.namaKambing"
          placeholder="Masukkan Nama Hewan"
        />
        <MyInput
          name="tanggalMasuk"
          type="date"
          title="Tanggal Masuk"
          :errors="errors.tanggalMasuk"
          placeholder="Masukkan Tanggal Masuk"
        />
        <MyInput
          name="berat"
          type="number"
          title="Berat /kg"
          :errors="errors.berat"
          placeholder="Masukkan Berat /kg"
        />
        <MyTextArea
          title="Keterangan"
          type="text"
          name="keterangan"
          :errors="errors.keterangan"
          placeholder="Masukkan keterangan"
        />
        <div class="d-grid gap-2 col-6 mx-auto">
          <button class="btn btn-primary mt-3" type="submit">Button</button>
        </div>
      </Form>
    </div>
  </section>
</template>

<template>
  <div>
 <h1>Show light By Id</h1>
 <p>light id : {{ pet.id }}</p>
    <p>ชื่อหลอดไฟ : {{ pet.name }}</p>
      <p>ประเภทหลอดไฟ : {{ pet.type }}</p>
      <p>ค่า V : {{ pet.species }}</p>
      <p>ค่า W : {{ pet.origin }}</p>
      <p>สีของไฟ : {{ pet.color }}</p>
      <p>น้ำหนัก : {{ pet.weight }} กรัม</p>
      <p>ลักษณะหลอดไฟ : {{ pet.character }}</p>
      <p>ราคา : {{ pet.price }} บาท</p>
 <div><button @click="navigateTo('/pet/edit/'+pet.id)">Edit light</button>
 <button @click="navigateTo('/pets')">กลับ</button></div>
  </div>
 </template>
 <script>
import PetService from "@/services/PetService";

export default {
  data() {
    return {
      pet: null
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  },
  async created() {
    try {
      let petId = this.$route.params.petId;
      this.pet = (await PetService.show(petId)).data;
      console.log(this.pet);
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style></style>
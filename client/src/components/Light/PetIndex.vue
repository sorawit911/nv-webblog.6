<template>
  <div>
    <h1>Show All light</h1>
    <h2>จํานวนหลอดไฟทั้งหมด {{ pets.length }} ดวง</h2>
    <div>
      <button @click="navigateTo('/pet/create')">+Create light</button>
      <button @click="navigateTo('/users')">กลับไป Users</button>
    </div>
    <hr />
    <div v-for="pet in pets" v-bind:key="pet.id">
      <p>light id : {{ pet.id }}</p>
      <p>ชื่อหลอดไฟ : {{ pet.name }}</p>
      <p>ประเภทหลอดไฟ : {{ pet.type }}</p>
      <p>ค่า V : {{ pet.species }}</p>
      <p>สีของไฟ : {{ pet.color }}</p>
      <p>ราคา : {{ pet.price }} บาท</p>
      <div>
        <button v-on:click="navigateTo('/pet/' + pet.id)">ดูข้อมูล light</button>
        <button @click="navigateTo('/pet/edit/' + pet.id)">Edit light</button>
        <button @click="deletePet(pet)">Delete light</button>
      </div>
      <hr />
    </div>
  </div>
</template>
<script>
import PetService from "@/services/PetService";

export default {
  data() {
    return {
      pets: []
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deletePet(pet) {
      let result = confirm("Want of delete?");
      if (result) {
        try {
          await PetService.delete(pet);
          this.refreshData();
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData() {
      this.pets = (await PetService.index()).data;
    }
  },
  async created() {
    try {
      this.pets = (await PetService.index()).data;
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style></style>

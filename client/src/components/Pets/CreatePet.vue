<template>
  <div>
    <h1>Create light</h1>
    <form v-on:submit.prevent="createPet">
      <p>ชื่อหลอดไฟ : <input type="text" v-model="pet.name" /></p>
      <p>ประเภทหลอดไฟ : <input type="text" v-model="pet.type" /></p>
      <p>ค่า V : <input type="text" v-model="pet.species" /></p>
      <p>ค่า W : <input type="text" v-model="pet.origin" /></p>
      <p>สีของไฟ : <input type="text" v-model="pet.color" /></p>
      <p>น้ำหนัก : <input type="text" v-model="pet.weight" /> กรัม</p>
      <p>ลักษณะหลอดไฟ : <input type="text" v-model="pet.character" /></p>
      <p>ราคา : <input type="text" v-model="pet.price" /> บาท</p>
      <p><button type="submit">Create light</button></p>
    </form>
  </div>
</template>
<script>
import PetService from "@/services/PetService";
export default {
  data() {
    return {
      pet: {
        name: "",
        type: "",
        species: "",
        origin: "",
        color: "",
        weight: "",
        character: "",
        price: ""
      }
    };
  },
  methods: {
    async createPet() {
      try {
        await PetService.post(this.pet);
        this.$router.push({
          name: "pets"
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
<style scoped></style>

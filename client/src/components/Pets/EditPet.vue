<template>
  <div>
    <h1>Edit light</h1>
    <form v-on:submit.prevent="editPet">
      <p>ชื่อหลอดไฟ : <input type="text" v-model="pet.name" /></p>
      <p>ประเภทหลอดไฟ : <input type="text" v-model="pet.type" /></p>
      <p>ค่า V : <input type="text" v-model="pet.species" /></p>
      <p>ค่า W : <input type="text" v-model="pet.origin" /></p>
      <p>สีของไฟ : <input type="text" v-model="pet.color" /></p>
      <p>น้ำหนัก : <input type="text" v-model="pet.weight" /> กรัม</p>
      <p>ลักษณะหลอดไฟ : <input type="text" v-model="pet.character" /></p>
      <p>ราคา : <input type="text" v-model="pet.price" /> บาท</p>
      <p><button type="submit">Edit light</button></p>
    </form>
    <hr />
    <div>
      <p>light id: {{ pet.id }}</p>
      <p>ชื่อสัตว์เลี้ยง : {{ pet.name }}</p>
      <p>ประเภทสัตว์ : {{ pet.type }}</p>
      <p>สายพันธุ์ : {{ pet.species }}</p>
      <p>ถิ่นกำเนิด : {{ pet.origin }}</p>
      <p>สีลำตัว : {{ pet.color }}</p>
      <p>น้ำหนัก : {{ pet.weight }}</p>
      <p>อุปนิสัย : {{ pet.character }}</p>
      <p>ราคา : {{ pet.price }}</p>
      
    </div>
  </div>
</template>
<script>
import PetService from "@/services/PetService";
export default {
  data() {
    return {
      pet: {
        name:"",
        type:"",
        species:"",
        origin:"",
        color:"",
        weight:"",
        character:"",
        price:""
      }
    };
  },
  methods: {
    async editPet() {
      try {
        await PetService.put(this.pet);
        this.$router.push({
          name: "pets"
        });
      } catch (err) {
        console.log(err);
      }
    }
  },
  async created() {
    try {
      let petId = this.$route.params.petId;
      this.pet = (await PetService.show(petId)).data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>
<style scoped></style>
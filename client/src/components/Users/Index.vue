<template>
<div>
      <h1>Show All Users</h1>
      <div><h2>จำนวน User ทั้งหมด {{ users.length }} คน</h2></div>
      <div><button @click="navigateTo('/user/create')">+Create User</button>
        <button @click="navigateTo('/pets')">ดูรายการสัตว์เลี้ยงทั้งหมด</button>
        <button v-on:click="logout" >Logout</button></div><hr>
      <div v-for="user in users" v-bind:key="user.id">
        <p>User id : {{ user.id }}</p>
          <p>ชื่อ : {{ user.name }}</p>
            <p>นามสกุล : {{ user.lastname }}</p>
              <p>Email : {{ user.email }}</p>
                <p>status : {{ user.status }}</p>
      
        <div><button v-on:click="navigateTo('/user/'+user.id)">ดูข้อมูลผู้ใช้</button>
        <button @click="navigateTo('/user/edit/'+user.id)" >Edit User</button>
        <button @click="deleteUser(user)" >Delete User</button></div>
        <hr>
      </div>
    </div>
  </template>
  
  <script>
  import UsersService from "@/services/UsersService";
  
  export default {
    data() {
      return {
        users: []
      };
    },
    methods:{
      logout () {
 this.$store.dispatch('setToken', null)
 this.$store.dispatch('setUser', null)
 this.$router.push({
 name: 'login'
 })
},
      navigateTo(route){
        this.$router.push(route)
      },
      async deleteUser(user){
        let result = confirm("Want of delete?")
        if (result){
          try{
            await UsersService.delete(user)
            this.refreshData()
          }catch(err){
            console.log(err)
          }
        }
      },
      async refreshData() {
        this.users = (await UsersService.index()).data;
      }
    },
    async created() {
      try{
        this.users = (await UsersService.index()).data;
      }catch (err){
        console.log(err)
      }
      
    }
  };
  </script>
  
  <style></style>
<template>
  <div>
    <h1>Show User By Id</h1>
    <p>User id : {{ user.id }}</p>
    <p>ชื่อ : {{ user.name }}</p>
    <p>นามสกุล : {{ user.lastname }}</p>
    <p>email : {{ user.email }}</p>
    <p>password : {{ user.password }}</p>
    <p>status : {{ user.status }}</p>
    <p>type : {{ user.type }}</p>
    <div>
      <button @click="navigateTo('/user/edit/' + user.id)">Edit User</button>
      <button @click="navigateTo('/users')">กลับ</button>
    </div>
  </div>
</template>

<script>
import UsersService from "@/services/UsersService";

export default {
  data() {
    return {
      user: null
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  },
  async created() {
    try {
      let userId = this.$route.params.userId;
      this.user = (await UsersService.show(userId)).data;
      console.log(this.user);
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style></style>

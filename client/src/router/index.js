import Vue from "vue";
import Router from "vue-router";
// Users
import UserIndex from "@/components/Users/Index";
import UserCreate from "@/components/Users/CreateUser";
import UserEdit from "@/components/Users/EditUser";
import UserShow from "@/components/Users/ShowUser";

import PetIndex from "@/components/Pets/PetIndex";
import CreatePet from "@/components/Pets/CreatePet";
import EditPet from "@/components/Pets/EditPet";
import ShowPet from "@/components/Pets/ShowPet";

import Login from "@/components/Users/login";

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/users",
      name: "users",
      component: UserIndex
    },

    {
      path: "/user/create",
      name: "users-create",
      component: UserCreate
    },
    {
      path: "/user/edit/:userId",
      name: "user-edit",
      component: UserEdit
    },
    {
      path: "/user/:userId",
      name: "user",
      component: UserShow
    },
    {
      path: "/pets",
      name: "pets",
      component: PetIndex
    },
    {
      path: "/pet/create",
      name: "pets-create",
      component: CreatePet
    },

    {
      path: "/pet/edit/:petId",
      name: "pet-edit",
      component: EditPet
    },

    {
      path: "/pet/:petId",
      name: "pet",
      component: ShowPet
    },

    {
      path: "/login",
      name: "login",
      component: Login
    }
  ]
});

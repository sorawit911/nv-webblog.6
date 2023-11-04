import Api from "@/services/Api";
export default {
    singup(credentials) {
    return Api().post("singup", credentials);
  },
  login(credentials) {
    return Api().post("login", credentials);
  }
};

import Api from "@/services/Api";

export default {
  index(search) {
    return Api().get("pets");
  },
  show(petId) {
    return Api().get("pet/" + petId);
  },
  post(pet) {
    return Api().post("pet", pet);
  },
  put(pet) {
    return Api().put("pet/" + pet.id, pet);
  },
  delete(pet) {
    return Api().delete("pet/" + pet.id, pet);
  }
};

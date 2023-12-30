import { api } from "../boot/axios";
import { useUserStore } from "../stores/userStore";
import { LocalStorage } from "quasar";

const userStore = useUserStore();

const GetAllUserInfo = (payload) => {
  return new Promise((resolve, reject) => {
    api
      .get(`profile/?id=${payload.id}&isSelfVisit=${payload.isSelfVisit}`, {
        headers: {
          Authorization: `Bearer ${
            userStore.getToken || LocalStorage.getItem("Bearer")
          }`,
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { GetAllUserInfo };

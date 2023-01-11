import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth",{
    state: ()=> ({
        token: "",
        user_name: "",
        isAllowed: false,
    }),
    actions: {
    },
    persist: true
})
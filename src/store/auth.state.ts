import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth",{
    state: ()=> ({
        token: "",
        user_name: "",
    }),
    actions: {
    },
    persist: true
})
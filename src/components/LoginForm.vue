<script lang="ts" setup>
import axios from "../libs/axios"
import { useAuthStore } from "../store/auth.state";
import { ref } from "vue"
import router from "../routes";

const AuthStore = useAuthStore()

let email = ref("")
let password = ref("")

const HandleSubmit = async () => {
    const res = await axios.post("/auth/login",{
        email: email.value,
        password:password.value
    })
    AuthStore.user_name = res.data.user.name
    AuthStore.token = res.data.token
    if(AuthStore.token != ''){
        AuthStore.isAllowed = true,
        router.push("/clothe")
    }
    console.log(res.status)
}

</script>
<template>
    <form @submit.prevent="HandleSubmit" class="form-container">
        <p class="input-form">
            <input type="email" name="email" id="email" placeholder="Enter your email" v-model="email">
        </p>
        <p class="input-form">
            <input type="password" name="password" id="password" placeholder="******" v-model="password">
        </p>
        <button class="button-submit">SAVE</button>
    </form>
</template>
<style lang="scss">
.form-container {
    display: flex;
    flex-direction: column;
    margin: 2rem 5vw;
    align-items: center;

    .input-form {
        input {
            font-size: 1.5rem;
            border: none;
            outline: none;
            width: 30rem;
            height: 4rem;
            border-radius: 0.5rem;
            margin: 1rem auto;
            padding: 0 0.7rem;
        }
    }
}
</style>
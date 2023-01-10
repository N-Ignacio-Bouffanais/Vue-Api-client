<script lang="ts" setup>
import axios from "axios";
import { ref } from "vue"

let email = ref("")
let password = ref("")

const HandleSubmit = async () => {
    const res = await axios.post("http://localhost:3000/auth/login",{
        email: email.value,
        password:password.value
    })
    console.log(res)
    console.log(res.data.token)
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
        <button>Save</button>
    </form>
</template>
<style lang="scss">
.form-container {
    display: flex;
    flex-direction: column;
    margin: 0 5vw;
    align-items: center;

    .input-form {
        input {
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
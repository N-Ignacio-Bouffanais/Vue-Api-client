<script setup lang="ts">
import { defineAsyncComponent } from "vue"

const RegisterForm = defineAsyncComponent(()=> import("../components/RegisterForm.vue"))
</script>

<template>
    <h1>Register</h1>
    <RegisterForm/>
</template>

<style lang="scss">

</style>
<script setup lang="ts">
import { defineAsyncComponent } from "vue"

const LoginForm = defineAsyncComponent(() => import("../components/LoginForm.vue"))
</script>

<template>
    <h1>Login</h1>
    <LoginForm />
</template>

<style lang="scss">

</style>
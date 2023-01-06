<script setup lang="ts">
import { defineAsyncComponent } from "vue"

const FormRegister = defineAsyncComponent(() => import("../components/RegisterForm.vue"))
</script>

<template>
    <h1>Register</h1>
    <div class="container">
        <FormRegister />
    </div>
</template>

<style lang="scss">

</style>
<script setup lang="ts">
import { defineAsyncComponent } from 'vue';


const ClotheSample = defineAsyncComponent(()=> import("../components/ClotheSample.vue"))
</script>

<template>
    <ClotheSample :amount="3" />
</template>

<style lang="scss">
.container {
    display: grid;
    .card {
        border: none;
        background-color: #203e64;
        p{
            color: white;
        }
    }
}
</style>
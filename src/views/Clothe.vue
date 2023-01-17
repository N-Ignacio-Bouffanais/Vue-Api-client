<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';


const ClotheSample = defineAsyncComponent(() => import("../components/ClotheSample.vue"))
</script>
<template>
    <div class="container">
        <ClotheSample :amount="12"/>
    </div>
</template>
<style lang="scss">

</style>
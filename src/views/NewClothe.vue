<script setup lang="ts">
import { defineAsyncComponent } from "vue"

const ClotheForm = defineAsyncComponent(() => import("../components/Clothe.Form.vue"))
</script>
<template>
    <ClotheForm/>
</template>
<style lang="scss">
    
</style>
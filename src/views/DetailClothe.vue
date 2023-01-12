<script lang="ts" setup>
import axios from "../libs/axios";

const getClothe = async () => {
    const res = await axios.get("/clothe/:id")
}
</script>
<template>
    <div>
        
    </div>
</template>
<style lang="scss">
    
</style>
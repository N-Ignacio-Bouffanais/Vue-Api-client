<script lang="ts" setup>
import axios from "../libs/axios";
import { onMounted } from 'vue';

const GetClothe = async () => {
    const clothes = await axios.get("/clothe")
    console.log(clothes)
}

onMounted(()=>{
    GetClothe()
})

</script>
<template>
    <div>

    </div>
</template>
<style lang="scss">

</style>
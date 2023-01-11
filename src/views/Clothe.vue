<script lang="ts" setup>
import axios from 'axios';
import { onMounted } from 'vue';

const GetClothe = async () => {
    const clothes = await axios.get("http://localhost:3000/clothe")
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
<script lang="ts" setup>
import axios from "../libs/axios";
import { onMounted, ref } from 'vue';

let clothes = ref({})

const GetClothe = async () => {
    const res = await axios.get("/clothe")
    //console.log(res.data.data)
    clothes.value = res.data.data
    console.log(clothes.value)
}

onMounted(() => {
    GetClothe()
})

</script>
<template>
    <div class="container">
            <div class="card" v-for="{ brand, name, price, index, _id } in clothes" :key="index">
                <p>Name: <span>{{ name }}</span></p>
                <p>Price: <span>${{ price }}</span></p>
                <p>Brand: <span>{{ brand }}</span></p>
                <p>{{ _id }}</p>
            </div>
    </div>
</template>
<style lang="scss">
.container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    grid-auto-rows: 14rem;
    gap: 2rem;
    width: 90vw;
    margin: 2rem auto;

    .card {
        border-radius: 0.8rem;
        border-style: solid;
        border-color: #171717;
        margin: 1rem auto;
        display: grid;
        width: 100%;
        height: 100%;
        background-color: white;
        color: black;
        padding: 1.5rem;
        p{
            font-size: 1.4rem;
            font-weight: 600;
            span{
                font-weight: 300;
                font-size: 1.4rem;
            }
        }
    }
}
</style>
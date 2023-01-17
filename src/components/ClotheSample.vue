<script lang="ts" setup>
import axios from "../libs/axios";
import { onMounted, ref } from 'vue';
import { useAuthStore } from "../store/auth.state";

let clothes = ref([])
const store = useAuthStore()

const props = defineProps<{
    amount: number;
}>();

const GetClothes = async () => {
    const res = await axios.get("/clothe")
    clothes.value = res.data.data
    console.log(clothes.value)
}
const setId = (id: string) => {
    store.clotheId = id
}

onMounted(() => {
    GetClothes()
})

</script>
<template>
    <div class="container">
        <div class="card" v-for="{ brand, name, price, index, _id } in clothes.slice(0,props.amount)" :key="index">
            <p>Product: <span>{{ name }}</span></p>
            <p>Price: <span>${{ price }}</span></p>
            <p>Brand: <span>{{ brand }}</span></p>
            <router-link :to="`/clothe/${_id}`"><button @click="() => { setId(_id) }">See more</button></router-link>
        </div>
    </div>
</template>
<style lang="scss">
.container {
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    grid-auto-rows: 14rem;
}

a {
    height: 3rem;
    cursor: default;
    display: flex;
}

button {
    cursor: pointer;
    border: none;
    width: 10rem;
    height: 2.4rem;
    margin: 1rem auto;
    font-size: 1.8rem;
    background-color: white;
    color: springgreen;
}
</style>
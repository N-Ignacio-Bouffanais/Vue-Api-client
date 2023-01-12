<script lang="ts" setup>
import { onMounted, ref } from "vue";
import axios from "../libs/axios";
import { useAuthStore } from "../store/auth.state";
const store = useAuthStore()

let clothe = ref({
    name: "",
    brand: "",
    color:"",
    price:"",
    descrition:"",
    size: "",
    category:"",
})

const getClothe = async (store:any) => {
    const url = "/clothe/" + store.clotheId
    const res = await axios.get(url)
    clothe.value = res.data
    console.log(res.data)
}
onMounted(()=>{
    getClothe(store)
})
</script>
<template>
    <div class="container">
        <div class="card">
            <p><span>Product: {{ clothe.name }}</span></p>
            <p><span>Price: ${{ clothe.price }}</span></p>
            <p><span>Size: {{ clothe.size }}</span></p>
            <p><span>Brand: {{ clothe.brand }}</span></p>
            <p><span>Color: {{ clothe.color }}</span></p>
            <p><span>Description: {{ clothe.descrition }}</span></p>
            <p><span>Category: {{ clothe.category }}</span></p>
        </div>
    </div>
</template>
<style lang="scss">
    
</style>
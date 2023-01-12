<script lang="ts" setup>
import { onMounted, ref } from "vue";
import axios from "../libs/axios";
import { useAuthStore } from "../store/auth.state";
const store = useAuthStore()

let clothe = ref({})

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
    <div>
        <p>{{ clothe }}</p>
    </div>
</template>
<style lang="scss">
    
</style>
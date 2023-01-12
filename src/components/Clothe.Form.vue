<script lang="ts" setup>
import { ref } from "vue";
import axios from "../libs/axios"
import router from "../routes";

let category = ref("");
let name = ref("");
let color = ref("");
let brand = ref("");
let description = ref("");
let price = ref(5000);
let size = ref("");

const handleSubmit = async () => {
    try {
        const res = await axios.post("/clothe", {
            category: category.value,
            name: name.value,
            color: color.value,
            brand: brand.value,
            description: description.value,
            price: price.value,
            size: size.value
        })
        console.log(res.status)
        if(res.status == 200){
            router.push("/clothes")
        }
    } catch (e: any) {
        console.log(e)
    }
};

</script>
<template>
    <form @submit.prevent="handleSubmit()" class="form-container">
        <p class="input-form">
            <input type="text" autofocus placeholder="Product name" v-model="name" minlength="6" maxlength="14" required />
        </p>
        <p class="input-form">
            <input type="text" placeholder="color" v-model="color" minlength="4" maxlength="14" required />
        </p>
        <p class="input-form">
            <input type="text" placeholder="brand" v-model="brand" minlength="3" maxlength="14" required />
        </p>
        <p class="input-form">
            <textarea name="description" placeholder="description" minlength="10" maxlength="120" cols="38" rows="5"
                v-model="description" required></textarea>
        </p>
        <p class="input-form">
            <input type="number" v-model="price" step="1000" min="5000" max="100000" required />
        </p>
        <p class="input-form">
            <input type="text" placeholder="size" v-model="size" minlength="1" maxlength="4" required />
        </p>
        <p class="input-form">
            <select v-model="category" required>
                <option disabled value="">Please select one</option>
                <option>camisas</option>
                <option>poleras</option>
                <option>polerones</option>
                <option>pantalones</option>
                <option>chalecos</option>
            </select>
        </p>

        <button :disabled="size == '' || name == '' || brand == '' " class="button-submit">SAVE</button>
    </form>
</template>
<style lang="scss">
.form-container {
    display: flex;
    flex-direction: column;
    margin: 2rem 5vw;
    align-items: center;

    .input-form {
        input {
            font-size: 1.6rem;
            border: none;
            outline: none;
            width: 30rem;
            height: 4rem;
            border-radius: 0.5rem;
            margin: 1rem auto;
            padding: 0 0.7rem;
        }

        select {
            font-size: 1.5rem;
            border: none;
            outline: none;
            width: 30rem;
            height: 4rem;
            border-radius: 0.5rem;
            margin: 1rem auto;
            padding: 0 0.7rem;

            option {
                font-size: 1.5rem;
                background-color: #4a4949;
                ;
                color: white;
            }
        }

        textarea {
            font-size: 1.4rem;
            outline: none;
            border-radius: 0.5rem;
            margin: 1rem auto;
            padding: 0.7rem;
        }

    }
}
</style>

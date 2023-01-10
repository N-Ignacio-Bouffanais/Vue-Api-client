<script lang="ts" setup>
import { ref } from "vue";

let category = ref("");
let name = ref("");
let color = ref("");
let brand = ref("");
let description = ref("");
let price = ref(0);
let size = ref("");
let data: {};

const handleSubmit = () => {
    data = {
        category: category.value,
        name: name.value,
        color: color.value,
        brand: brand.value,
        description: description.value,
        price: price.value,
        size: size.value
    };
    console.log(data)
};
</script>
<template>
    <form @submit.prevent="handleSubmit()" class="form-container">
        <p class="input-form">
            <input type="text" name="name" placeholder="Product name" v-model="name" />
        </p>
        <p class="input-form">
            <input type="text" name="color" placeholder="color" v-model="color" />
        </p>
        <p class="input-form">
            <input type="text" name="brand" placeholder="brand" v-model="brand" />
        </p>
        <p class="input-form">
            <textarea name="description" placeholder="description" cols="55" rows="5" v-model="description"></textarea>
        </p>
        <p class="input-form">
            <input type="number" name="price" placeholder="price" v-model="price" />
        </p>
        <p class="input-form">
            <input type="text" name="size" placeholder="size" v-model="size" />
        </p>
        <p class="input-form">
            <select name="category" v-model="category">
                <option disabled value="">Please select one</option>
                <option>camisas</option>
                <option>poleras</option>
                <option>polerones</option>
                <option>pantalones</option>
                <option>chalecos</option>
            </select>
        </p>

        <button>Save</button>
    </form>
</template>
<style lang="scss">
.form-container {
    display: flex;
    flex-direction: column;
    margin: 0 5vw;
    align-items: center;

    .input-form {
        input {
            border: none;
            outline: none;
            width: 30rem;
            height: 4rem;
            border-radius: 0.5rem;
            margin: 1rem auto;
            padding: 0 0.7rem;
        }

        select {
            border: none;
            outline: none;
            width: 30rem;
            height: 4rem;
            border-radius: 0.5rem;
            margin: 1rem auto;
            padding: 0 0.7rem;
        }

        textarea {
            outline: none;
            border-radius: 0.5rem;
            margin: 1rem auto;
            padding: 0.7rem;
        }
    }
}
</style>

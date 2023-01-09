<script lang="ts" setup>
import { ref } from 'vue';

let selected = ref("")


const handleSubmit = () => {
    console.log(selected.value)
}
</script>
<template>
    <form @submit.prevent="handleSubmit()" class="form-container">
        <p class="input-form">
            <input type="text" name="name" placeholder="Product name">
        </p>
        <p class="input-form">
            <input type="text" name="color" placeholder="color">
        </p>
        <p class="input-form">
            <input type="text" name="brand" placeholder="brand">
        </p>
        <p class="input-form">
            <textarea name="description" placeholder="description" cols="30" rows="10"></textarea>
        </p>
        <p class="input-form">
            <input type="number" name="price" placeholder="price">
        </p>
        <p class="input-form">
            <input type="text" name="size"  placeholder="size">
        </p>
        <p class="input-form">
            <input type="text" name="size" placeholder="size">
        </p>
        <p class="input-form">
            <select name="category" v-model="selected">
                <option disabled value="">Please select one</option>
                <option>camisas</option>
                <option>poleras</option>
                <option>polerones</option>
                <option>pantalones</option>
                <option>chalecos</option>
            </select>
            <span>Selected: {{ selected }}</span>
        </p>

        <button >Save</button>
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
            outline: none;
            width: 30rem;
            height: 4rem;
            border-radius: 0.5rem;
            margin: 1rem auto;
            padding: 0 0.7rem;
        }
    }
}
</style>
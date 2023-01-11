<script lang="ts" setup></script>
<template>
    <form action="submit" class="form-container">
        <p class="input-form">
            <input type="name" name="name" id="name" placeholder="Enter your name">
        </p>
        <p class="input-form">
            <input type="email" name="email" id="email" placeholder="Enter your email">
        </p>
        <p class="input-form">
            <input type="password" name="password" id="password" placeholder="******">
        </p>
        <button>Save</button>
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
            font-size: 1.5rem;
            border: none;
            outline: none;
            width: 30rem;
            height: 4rem;
            border-radius: 0.5rem;
            margin: 1rem auto;
            padding: 0 0.7rem;
        }
    }
        button {
            border: none;
            margin: 1rem auto;
            width: 30rem;
            height: 3.4rem;
            border-radius: 0.5rem;
            font-size: 1.8rem;
            background-color: springgreen;
        }
}
</style>
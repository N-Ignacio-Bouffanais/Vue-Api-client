<script lang="ts" setup></script>
<template>
    <form action="submit" class="form-container">
        <p class="input-form">
            <input type="email" name="email" id="email" placeholder="Enter your email">
        </p>
        <p class="input-form">
            <input type="password" name="password" id="password" placeholder="******">
        </p>
    </form>
</template>
<style lang="scss">
.form-container{
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
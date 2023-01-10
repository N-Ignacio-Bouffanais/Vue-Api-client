# Vue 3 + TypeScript + Vite
- This is a Client-api build with Vue3.

## Tecnologies that I used
- Typescript
- Vue3
- SASS
- Pinia
- Axios

## Axios with Vuejs Composition API example
```ts
import axios from "axios";
import { ref } from "vue"

let email = ref("")
let password = ref("")

const HandleSubmit = async () => {
    const res = await axios.post("http://localhost:3000/auth/login",{
        email: email.value,
        password:password.value
    })
    console.log(res)
    console.log(res.data.token)
}
```
```html
    <form @submit.prevent="HandleSubmit" class="form-container">
        <p class="input-form">
            <input type="email" name="email" id="email" placeholder="Enter your email" v-model="email">
        </p>
        <p class="input-form">
            <input type="password" name="password" id="password" placeholder="******" v-model="password">
        </p>
        <button>Save</button>
    </form>
```
<script setup lang="ts">
import { Icon } from "@iconify/vue"
import { useAuthStore } from "../store/auth.state";
const AuthStore = useAuthStore()
</script>

<template>
    <div class="navigation">
        <div class="search">
            <input type="text">
            <span>|</span>
            <Icon icon="material-symbols:search-rounded" width="2rem" color="black" />
        </div>
        <div class="right">
            <div class="gps">
                <Icon icon="gis:location-poi" width="3rem" />
                <button>Ingresa tu ubicacion</button>
            </div>
            <div class="links">
                <button>Category
                    <Icon icon="ep:arrow-down" />
                </button>
                <router-link to="/">Home</router-link>
                <router-link to="/login" v-show="!AuthStore.isAllowed">Login</router-link>
                <router-link to="/register" v-show="!AuthStore.isAllowed">Register</router-link>
                <router-link to="/compras">Mis compras <Icon icon="ep:shopping-cart" width="2rem"/></router-link>
            </div>
        </div>
        <div class="menu"></div>
    </div>
</template>

<style lang="scss">
$nav-color: teal;

.navigation {
    height: 10rem;
    display: flex;
    align-items: center;
    padding: 0 5vw;
    background-color: $nav-color;
    gap: 1rem;

    .search {
        background-color: white;
        display: flex;
        align-items: center;
        width: 50vw;

        input {
            border: none;
            outline: none;
            width: 100%;
            height: 4rem;
            border-radius: 25% 25% 0 0;
            font-size: 1.2rem;
            margin-left: 1.5rem;
        }

        span {
            color: gray;
            font-size: 2.2rem;
        }

        svg {
            width: 3rem;
        }
    }

    .right {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 40vw;
        gap: 1.4rem;

        .gps {
            display: flex;
            padding-left: 2rem;
            justify-content: center;

            button {
                width: 100%;
                border: none;
                font-size: 1.6rem;
                font-weight: 500;
                background-color: $nav-color;
                margin: 0 0.5rem;
                cursor: pointer;

                &:hover {
                    color: white;
                }
            }
        }

        .links {
            display: flex;
            align-items: center;

            button {
                cursor: pointer;
                border: none;
                background-color: $nav-color;
                font-size: 1.6rem;
                font-weight: 500;
            }
        }
    }
    .menu{
        display: none;
    }

    a {
        color: black;
        font-size: 1.6rem;
        margin-left: 1vw;
        font-weight: 500;
        display: flex;
        align-items: center;
    }
}

@media (max-width: 945px) {
    .navigation {
        .right {
            display: none;
        }

        .search {
            width: 75vw;
        }
        .menu{
            display: flex;
        }
    }
}
</style>
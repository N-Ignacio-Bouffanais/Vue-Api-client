<script setup lang="ts">
import { Icon } from "@iconify/vue"
import { ref } from "vue";

import { useAuthStore } from "../store/auth.state";
const AuthStore = useAuthStore()

let active = ref(false);

</script>

<template>
    <div class="navigation">
        <div class="top">
            <div class="menu">
                <label class="checkbtn">
                    <Icon v-on:click="active = !active"
                        icon="clarity:bars-line" width="3.4rem" />
                </label>
                <ul v-bind:class="{ show: active }">
                    <li v-on:click="active = !active" ><router-link to="/"> Home</router-link></li>
                    <li v-on:click="active = !active" ><router-link to="/login" v-show="!AuthStore.isAllowed"><Icon icon="carbon:user-filled" width="2.5rem" />Login</router-link></li>
                    <li v-on:click="active = !active" ><router-link to="/register" v-show="!AuthStore.isAllowed"><Icon icon="carbon:user-filled" width="2.5rem" />Register</router-link>
                    </li>
                    <li v-on:click="active = !active" ><router-link to="/shopping">My Items</router-link></li>
                </ul>
            </div>
            <div class="search">
                <input type="text" placeholder="Search">
                <Icon icon="material-symbols:search-rounded" />
            </div>
            <div class="ShopCar">
                <router-link to="/shopping">
                    <Icon icon="clarity:shopping-cart-line" width="2rem" />
                    <span>$0.00</span>
                </router-link>
                
            </div>
        </div>
        <div class="bottom">
            <div class="gps">
                <Icon icon="gis:location-poi" width="3rem" />
                <button>Enter your location</button>
            </div>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/login" v-show="!AuthStore.isAllowed"><Icon icon="carbon:user-filled" width="2rem" /> Login</router-link></li>
                <li><router-link to="/register" v-show="!AuthStore.isAllowed"><Icon icon="carbon:user-filled" width="2rem" /> Register</router-link>
                </li>
                <li><router-link to="/shopping">My Items</router-link></li>
            </ul>

        </div>
    </div>
</template>

<style lang="scss">
$nav-color: #0071dc;
$nav-height: 11rem;

.navigation {
    height: $nav-height;
    display: grid;
    padding: 1rem 6vw;
    background-color: $nav-color;

    .top {
        display: flex;
        align-items: center;
        justify-content: start;
        width: 100%;
        height: 5rem;

        .menu {
            display: none;

            a {
                color: white;
                font-size: 1.6rem;
                margin-left: 1vw;
                font-weight: 500;
                display: flex;
                align-items: center;
            }
        }

        .search {
            display: flex;
            align-items: center;
            width: 70vw;
            position: relative;
            margin: 0 auto;

            input {
                border: none;
                outline: none;
                width: 100%;
                height: 4rem;
                font-size: 1.2rem;
                border-radius: 2rem;
                padding-left: 1.5rem;
                font-size: 1.6rem;
            }

            svg {
                width: 3.4rem;
                height: 3.4rem;
                background-color: rgb(255, 196, 0);
                padding: 0.7rem;
                margin-right: 1rem;
                color: black;
                border-radius: 100%;
                cursor: pointer;
                position: absolute;
                right: 0rem;
            }
        }

        .ShopCar {
            a{
                display: flex;
                    flex-direction: column;
                    height: 4.8rem;
                    width: 4.8rem;
                    align-items: center;
                    justify-content: center;
                
                    &:hover {
                        background-color: #233349;
                        border-radius: 100%;
                        cursor: pointer;
                    }
                
                    svg {
                        height: 2.6rem;
                        width: 2.6rem;
                    }
            }
        }
    }

    .bottom {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 5rem;

        .gps {
            display: flex;
            padding-left: 2rem;
            align-items: center;

            button {
                width: 100%;
                border: none;
                font-size: 1.6rem;
                font-weight: 500;
                background-color: $nav-color;
                margin: 0 0.5rem;
                cursor: pointer;
                color: white;
            }
        }

        .CategoryBtn {
            cursor: pointer;
            border: none;
            background-color: $nav-color;
            font-size: 1.6rem;
            font-weight: 500;
            color: white;
        }

        ul {
            display: flex;
            list-style: none;
            align-items: center;

            li {
                margin: 0 1rem;

                a {
                    font-size: 1.6rem;
                }
            }
        }
    }
}

@media (max-width: 1100px) {
    .navigation {
        .top {
            .menu {
                a {
                    cursor: pointer;
                    justify-content: center;
                    margin: 4rem auto;
                    color: white;
                    font-size: 2.5rem;

                    &:active {
                        color: #0071dc;
                    }
                }

                display: block;

                .checkbtn {
                    display: block;
                    cursor: pointer;
                }

                .show {
                    left: -100%;
                }

                ul {
                    position: fixed;
                    width: 100%;
                    height: 100vh;
                    background-color: #2f3640;
                    top: $nav-height;
                    left: 0;
                    transition: all .5s;

                    li {
                        display: block;
                    }
                }
            }
        }

        .bottom {
            display: none;
        }

    }
}
</style>
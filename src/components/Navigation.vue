<script setup lang="ts">
import { Icon } from "@iconify/vue"
import { useAuthStore } from "../store/auth.state";
const AuthStore = useAuthStore()
</script>

<template>
    <div class="navigation">
        <div class="top">
            <div class="menu">
                <input type="checkbox" id="check">
                <label for="check" class="checkbtn">
                    <Icon icon="clarity:bars-line" width="3.4rem" />
                </label>
                <ul>
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/login" v-show="!AuthStore.isAllowed">Login</router-link></li>
                    <li><router-link to="/register" v-show="!AuthStore.isAllowed">Register</router-link>
                    </li>
                    <li><router-link to="/compras">My Items</router-link></li>
                </ul>
            </div>
            <div class="search">
                <input type="text" placeholder="Search">
                <Icon icon="material-symbols:search-rounded" />
            </div>
            <div class="ShopCar">
                <Icon icon="clarity:shopping-cart-line" width="2rem" />
            </div>
        </div>
        <div class="bottom">
            <div class="gps">
                <Icon icon="gis:location-poi" width="3rem" />
                <button>Ingresa tu ubicacion</button>
            </div>
            <button class="CategoryBtn">Category
                <Icon icon="ep:arrow-down" />
            </button>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/login" v-show="!AuthStore.isAllowed">Login</router-link></li>
                <li><router-link to="/register" v-show="!AuthStore.isAllowed">Register</router-link>
                </li>
                <li><router-link to="/compras">My Items</router-link></li>
            </ul>

        </div>
    </div>
</template>

<style lang="scss">
$nav-color: #0071dc;

.navigation {
    height: 11rem;
    display: grid;
    padding: 1rem 5vw;
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
                background-color: yellow;
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
            svg {
                height: 4rem;
                width: 4rem;
                padding: 0.7rem 0;

                &:hover {
                    background-color: #2f3640;
                    border-radius: 100%;
                    cursor: pointer;
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
                    justify-content: center;
                    margin: 2rem auto;
                    color: white;

                    &:active {
                        color: #0071dc;
                    }
                }

                display: block;

                .checkbtn {
                    display: block;
                }

                #check {
                    display: block;
                }

                ul {
                    position: fixed;
                    width: 100%;
                    height: 100vh;
                    background-color: #2f3640;
                    top: 12rem;
                    left: 0;

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
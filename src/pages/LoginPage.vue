<script setup lang="ts">
import {ref} from "vue"

const passwordVisible = ref(false);
let password = ''

function clickOnEye(): void {
  passwordVisible.value = !passwordVisible.value
}
</script>

<template>
  <div class="w-full h-[100vh] flex flex-col justify-center items-center">
    <div class="bg-main-orange flex flex-col gap-10 justify-center py-10 px-10 w-1/4 h-4/6 rounded-3xl">
      <div class="flex align-center justify-center">
        <img src="/assets/images/logo-header.svg" alt="logo"/>
      </div>

      <form>
        <div class="flex flex-col justify-center align-center gap-8">
          <div class="flex flex-col gap-2">
            <h2 class="text-xl font-semibold text-white pl-2">Логин</h2>
            <input type="text" class="pl-4 w-25 h-10 rounded-2xl outline-none text-xl" placeholder="Введите логин">
          </div>
          <div class="flex flex-col gap-1">
            <h2 class="text-xl font-semibold  text-white pl-2">Пароль</h2>
            <div class="relative">
              <input type="text"
                     v-model="password" v-show="passwordVisible"
                     class="pl-4 w-25 h-10 rounded-2xl outline-none text-xl w-full"
                     placeholder="Введите пароль">
              <input type="password"
                     v-model="password" v-show="!passwordVisible"
                     class="pl-4 w-25 h-10 rounded-2xl outline-none text-xl w-full"
                     placeholder="Введите пароль">
              <button class="absolute right-2 top-2" @click="clickOnEye" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                     fill="#000000">
                  <path
                      d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/>
                </svg>
                <div class="eye__line" v-show="!passwordVisible"/>
              </button>
            </div>
          </div>
          <div class="flex align-center justify-center gap-8 w-full">
            <button
                class="w-1/2 h-11 bg-white border-solid rounded-xl font-bold text-2xl hover:bg-main-orange hover:border-solid hover:border-2 hover:border-white hover:text-white"
                type="button">Войти
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.eye__line {
  position: absolute;
  width: 100%;
  bottom: 11px;
  right: 0;
  border: 1px solid black;
  rotate: 45deg;
}
</style>
<script setup lang="ts">
import {ref} from "vue"

const passwordVisible = ref(false);
let password = ''
let authMod = ref('auth')

function clickOnEye(): void {
  passwordVisible.value = !passwordVisible.value
}
</script>

<template>
  <div class="bg-white h-[100vh] w-full flex flex-col justify-center items-center">
    <div class="relative border-2 border-main-orange flex flex-col gap-10 justify-center py-10 px-10 w-1/3 h-1/2 rounded-3xl">
      <div v-show="!authMod"
           class="top-10 absolute"
      @click="authMod = 'auth'">
        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
      </div>
      <div class="pl-20 mb-15 text-[30px] flex flex-col gap-3">
        <div>{{ authMod === 'auth' ? 'Авторизация' : 'Восстановления пароля' }}</div>
        <div class="w-1/4 border-2 border-main-orange border-solid rounded-xl"/>
      </div>

      <form>
        <div class="flex flex-col justify-center align-center gap-8">
          <div class="flex flex-col gap-2 items-center">
            <input
                v-show="authMod === 'auth'"
                type="text"
                   class="pl-4 w-[400px] h-[70px] rounded-2xl outline-none text-xl border-2 border-main-orange"
                   placeholder="Почта">
            <input
                v-show="authMod === ''"
                type="text"
                   class="pl-4 w-[400px] h-[70px] rounded-2xl outline-none text-xl border-2 border-main-orange"
                   placeholder="Введите новый пароль">
          </div>
          <div class="flex flex-col gap-1 items-center">
            <div class="relative flex gap-3 flex-col">
              <input type="text"
                     v-model="password" v-show="passwordVisible && authMod === 'auth'"
                     class="pl-4 w-[400px] h-[70px] rounded-2xl outline-none text-xl border-2 border-main-orange"
                     placeholder="Пароль">
              <input type="password"
                     v-model="password" v-show="!passwordVisible && authMod === 'auth'"
                     class="pl-4 w-[400px] h-[70px] rounded-2xl outline-none text-xl border-2 border-main-orange"
                     placeholder="Пароль">
              <input type="text"
                     v-show="authMod === ''"
                     class="pl-4 w-[400px] h-[70px] rounded-2xl outline-none text-xl border-2 border-main-orange"
                     placeholder="Подтвердите пароль">
              <button v-show="authMod === 'auth'" class="absolute right-3 top-5" @click="clickOnEye" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px"
                     fill="#000000">
                  <path
                      d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/>
                </svg>
                <div class="eye__line" v-show="!passwordVisible && authMod === 'auth'"/>
              </button>
              <div
                  v-show="authMod === 'auth'"
                  class="cursor-pointer pl-5 text-light-grey-text"
                  @click="authMod = ''">Забыли пароль?
              </div>
            </div>
          </div>
          <div
              v-show="authMod === 'auth'"
              class="flex align-center justify-center gap-8 w-full text-[18px]">
            <button
                class="bg-purple-button text-white px-4 py-4 rounded-xl"
                type="button">Зарегистрироваться
            </button>
            <button
                class="bg-purple-button text-white px-10 py-4 rounded-xl"
                type="button">Войти
            </button>
          </div>
          <div
              v-show="authMod !== 'auth'"
              class="flex align-center justify-end gap-8 w-full text-[18px] pr-20">
            <button
                class="bg-purple-button text-white px-10 py-4 rounded-xl text-[25px]"
                type="button">Сохранить
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
  height: 2px;
  background: black;
  bottom: 15px;
  right: 0;
  rotate: 45deg;
}
</style>
<script setup lang="ts">

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
            <h2 class="text-xl font-semibold text-white pl-2">Login</h2>
            <input type="text" class="pl-2 w-25 h-10 rounded-2xl outline-none">
          </div>
          <div class="flex flex-col gap-1">
            <h2 class="text-xl font-semibold  text-white pl-2">Password</h2>
            <input type="text" class="pl-2 w-25 h-10 rounded-2xl outline-none">
          </div>
          <div class="flex align-center justify-center gap-8 w-full">
            <button class="w-1/2 h-11 bg-white border-solid rounded-xl font-bold text-2xl">Войти</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>
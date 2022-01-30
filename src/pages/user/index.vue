<script setup lang="ts"></script>

<template>
  <div>
    <div text-xl text-left font-semibold mb-4>Войдите или зарегистрируйтесь</div>

    <div text-left text-teal-600 mb-4>Через социальные сети</div>

    <div flex justify-between mb-4>
      <button btn-border text-2xl w-22 h-12 mr-4 disabled>
        <div mx-a bg-blue-500 i-simple-icons-vk />
      </button>
      <button btn-border text-2xl w-22 h-12 mr-4 disabled>
        <div mx-a i-logos-telegram />
      </button>
      <button btn-border text-2xl w-22 h-12 disabled>
        <div mx-a i-logos-google-icon />
      </button>
    </div>

    <div text-left mb-4 op50>Другим способом</div>

    <div flex mb-4>
      <button btn-border h-12 w-full mr-4 disabled>Номер телефона</button>
      <button btn-border h-12 w-11rem disabled>Почта</button>
    </div>

    <NuxtLink to="/user/login">
      <button btn-border w-full h-12 mb-4>По имени пользователя и паролю</button>
    </NuxtLink>

    <button btn-border w-full h-12 mb-4 disabled>Меня пригласил работодатель</button>
  </div>
</template>

<style scoped></style>

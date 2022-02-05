<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
</script>

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

    <div flex h-12 mb-4 >
      <NuxtLink to="/auth/phone" w-full mr-4>
        <button btn-border w-full h-full>Номер телефона</button>
      </NuxtLink>
      <NuxtLink to="/auth/email" w-11rem >
        <button btn-border w-full h-full>Почта</button>
      </NuxtLink>
    </div>

    <NuxtLink to="/auth/login">
      <button btn-border w-full h-12 mb-4>По имени пользователя и паролю</button>
    </NuxtLink>

    <NuxtLink to="/auth/">
      <button btn-border w-full h-12 mb-4 disabled>Меня пригласил работодатель</button>
    </NuxtLink>
  </div>
</template>

<style scoped></style>

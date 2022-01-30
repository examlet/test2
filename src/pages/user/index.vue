<script setup lang="ts"></script>

<template>
  <div>
    <div text-xl text-left font-semibold mb-4>Войдите или зарегистрируйтесь</div>

    <div text-left mb-4>Через социальные сети</div>

    <div flex justify-between mb-4>
      <button
        cursor-pointer
        inline-block
        border
        rounded
        border-solid
        border-gray-500
        hover:border-teal-600
        border-opacity-40
        text-2xl
        w-20
        h-12
        mr-4
      >
        <div mx-a bg-blue-500 i-simple-icons-vk />
      </button>
      <button
        cursor-pointer
        inline-block
        border
        rounded
        border-solid
        border-gray-500
        hover:border-teal-600
        border-opacity-40
        text-2xl
        w-24
        h-12
        mr-4
      >
        <div mx-a i-logos-telegram />
      </button>
      <button
        cursor-pointer
        inline-block
        border
        rounded
        border-solid
        border-gray-500
        hover:border-teal-600
        border-opacity-40
        text-2xl
        w-24
        h-12
      >
        <div mx-a i-logos-google-icon />
      </button>
    </div>

    <div text-left mb-4 op50>Другим способом</div>

    <div flex mb-4>
      <button
        cursor-pointer
        inline-block
        border
        rounded
        border-solid
        border-gray-500
        hover:border-teal-600
        border-opacity-40
        text-base
        h-12
        w-24
        mr-4
      >
        Номер телефона
      </button>
      <button
        cursor-pointer
        inline-block
        border
        rounded
        border-solid
        border-gray-500
        hover:border-teal-600
        border-opacity-40
        text-base
        h-12
        w-12rem
      >
        Почта
      </button>
    </div>

    <NuxtLink to="/user/login">
      <button
        cursor-pointer
        inline-block
        border
        rounded
        border-solid
        border-gray-500
        hover:border-teal-600
        border-opacity-40
        px-4
        py-1
        text-base
        w-full
        h-12
        mb-4
      >
        По имени пользователя и паролю
      </button>
    </NuxtLink>

    <button
      cursor-pointer
      inline-block
      border
      rounded
      border-solid
      border-gray-500
      hover:border-teal-600
      border-opacity-40
      px-4
      py-1
      text-base
      w-full
      h-12
      mb-4
    >
      Меня пригласил работодатель
    </button>
  </div>
</template>

<style scoped></style>

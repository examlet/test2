<script setup lang="ts"></script>

<template>
  <div h-full w-full text-center flex select-none>
    <div hidden sm:block>
      <a href="/" class="logo" />
    </div>

    <div
      p-8
      self-center
      sm:h-auto
      sm:box-border
      sm:shadow-lg
      sm:shadow-gray-500
      sm:bg-white-500
      sm:rounded
      sm:w-sm
      sm:ma
    >
      <slot />
    </div>
  </div>
  <div absolute bottom-5 right-0 left-0 text-center fw300>
    made by @a1kk3 · all rights reserved · 2022
  </div>
</template>

<style>
@media (max-width: 640px) {
  html,
  body,
  div#__nuxt {
    background: white;
  }
}

.logo {
  display: block;
  box-sizing: border-box;
  background: url(https://a.foxford.ngcdn.ru/assets/webpack/images/foxford_logo_black.9eec6056.svg)
    left center / auto no-repeat transparent;
  flex-shrink: 0;
  transition: width 0.25s linear 0s;
  height: 40px;
  width: 162px;
  position: absolute;
  top: 40px;
  left: 40px;
  z-index: 1;
}

</style>

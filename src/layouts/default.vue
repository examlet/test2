<script setup lang="ts"></script>

<template>
  <div h-full w-full>
    <div h-full w-full text-center flex select-none>
      <div hidden sm:block absolute top-16 left-16 w-40 h-20 flex flex-inline>
        <div hidden sm:block ml-11 i-clarity-cloud-traffic-line text-4xl text-teal-600 />
        <div hidden sm:block text-xl font-semibold text-teal-600>
          quicksales<span text-xl font-semibold text-black-600>.dev</span>
        </div>
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

        <div op60 text-sm text-left fw300>
          Регистрируясь в сервисе, принимаю условия
          <a
            href="#"
            underline
            decoration-1
            underline-offset-3
            hover:font-normal
            hover:op100
            >соглашения</a
          >
          и
          <a
            href="#"
            underline
            decoration-1
            underline-offset-3
            hover:font-normal
            hover:op100
            >политики конфиденциальности</a
          >
        </div>
      </div>
    </div>
    <div absolute bottom-5 right-0 left-0 text-center fw300 op50>
      made by @a1kk3 · all rights reserved · 2022
    </div>
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
  background: url(https://cdn.worldvectorlogo.com/logos/nuxt-2.svg) left center / auto
    no-repeat transparent;
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

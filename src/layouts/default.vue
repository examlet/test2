<script setup lang="ts">
const { idle, lastActive } = useIdle(5000); // 1 min
const now = useTimestamp();
const idledFor = computed(() => Math.floor((now.value - lastActive.value) / 1000));
const online = useOnline();
const { charging, chargingTime, dischargingTime, level } = useBattery();
const { x, y, sourceType } = useMouse();
const {
  isOnline,
  offlineAt,
  downlink,
  downlinkMax,
  effectiveType,
  saveData,
  type,
} = useNetwork();
</script>

<template>
  <div h-full w-full>
    <div class="sidebar" shadow-md>
      <NuxtLink to="/" block text-xl text-center p-5>TODO: LOGO</NuxtLink>
      <hr op20 mx-3 />
      <NuxtLink to="/channel/home/123" block flex text-gray-700 p-4>
        <div mr-1>Русский язык | ЕГЭ</div>
        <div i-carbon-arrows-vertical />
      </NuxtLink>
      <hr op20 mx-3 />
      <NuxtLink
        to="/channel/leads/123"
        inline-block
        flex
        text-gray-700
        p-4
        w-full
        hover:text-teal-700
      >
        <div i-carbon-collaborate />
        <div text-sm ml-2>Клиенты</div>
      </NuxtLink>
      <NuxtLink
        to="/channel/orders/123"
        inline-block
        flex
        text-gray-700
        p-4
        w-full
        hover:text-teal-700
      >
        <div i-carbon-shopping-cart />
        <div text-sm ml-2>Заказы</div>
      </NuxtLink>
      <NuxtLink
        to="/channel/messenger/123"
        inline-block
        flex
        p-4
        w-full
        hover:text-teal-700
        text-teal-700
        underline
        decoration-teal-600
        underline-offset-3
      >
        <div i-carbon-application-web />
        <div text-sm ml-2>Мессенджер</div>
      </NuxtLink>
      <hr op20 mx-8 />
      <NuxtLink
        to="/channel/sender/123"
        inline-block
        flex
        text-gray-700
        p-4
        w-full
        hover:text-teal-700
      >
        <div i-carbon-scan />
        <div text-sm ml-2>Рассылки</div>
      </NuxtLink>
      <NuxtLink
        to="/channel/automation/123"
        inline-block
        flex
        text-gray-700
        p-4
        w-full
        hover:text-teal-700
      >
        <div i-carbon-page-scroll />
        <div text-sm ml-2>Автоматизация</div>
      </NuxtLink>
      <NuxtLink
        to="/channel/analitics/123"
        inline-block
        flex
        text-gray-700
        p-4
        w-full
        hover:text-teal-700
      >
        <div i-carbon-chart-combo />
        <div text-sm ml-2>Аналитика</div>
      </NuxtLink>
      <NuxtLink
        to="/channel/control/123"
        inline-block
        flex
        text-gray-700
        p-4
        w-full
        hover:text-teal-700
      >
        <div i-carbon-operations-record />
        <div text-sm ml-2>Управление</div>
      </NuxtLink>
      <hr op20 mx-8 />
      <NuxtLink
        to="/channel/processes/123"
        inline-block
        flex
        text-gray-700
        p-4
        w-full
        hover:text-teal-700
      >
        <div i-carbon-iot-connect />
        <div text-sm ml-2>Процессы</div>
      </NuxtLink>
      <NuxtLink
        to="/channel/api/123"
        inline-block
        flex
        text-gray-700
        p-4
        w-full
        hover:text-teal-700
      >
        <div i-carbon-container-software />
        <div text-sm ml-2>API и интеграции</div>
      </NuxtLink>

      <a
        href="#"
        ml-3
        op60
        text-sm
        text-left
        fw300
        hover:underline
        decoration-1
        underline-offset-3
        underline-opacity-50
      >
        Правила пользования
      </a>
      <a
        href="#"
        ml-3
        op60
        text-sm
        text-left
        fw300
        hover:underline
        decoration-1
        underline-offset-3
        underline-opacity-50
      >
        support@quicksales.dev
      </a>
      <div ml-3 op60 text-sm text-left fw300 mt-1>© QuickSales, 2022</div>
    </div>

    <div grid grid-cols-12 grid-rows-12 h-full ml-50>
      <div bg-white-500 col-span-12 row-span-1 flex justify-end align-middle shadow-lg>
        <div mr-4>сеть: {{ online ? "онлайн" : "оффлайн" }}</div>
        <div mr-4>скорость сети: {{ downlink }}</div>
        <div mr-4>статус: {{ idle ? "неактивен" : "активен" }}</div>
        <div mr-4>заряд: {{ level * 100 }}%</div>
        <div mr-4>курсор: x-{{ x }} y-{{ y }}</div>
      </div>
      <div col-span-12 row-span-11 m-2>
        <slot/>
      </div>
    </div>
  </div>
</template>

<style>
.sidebar {
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: white;
  position: fixed;
  height: 100%;
  overflow: auto;
}

/* На экранах шириной менее 700 пикселей превратить боковую панель в верхнюю панель */
@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar NuxtLink {
    float: left;
  }
}

/* На экранах размером менее 400 пикселей панель отображать вертикально, а не горизонтально */
@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}
</style>

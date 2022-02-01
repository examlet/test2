<script setup lang="ts">
const payload = reactive({
  grant_type: null,
  username: "",
  password: "",
  scope: null,
  client_id: null,
  client_secret: null,
});
const message = ref("");

const router = useRouter();
const go = async () => {
  if (payload.username && payload.password) {
    const form = Object.keys(payload)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(payload[key]))
      .join("&");

    const { data: response, error: e } = await useFetch(
      "http://127.0.0.1:8000/api/v1/users/login",
      {
        method: "POST",
        body: form,
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      }
    );

    if (e.value) {
      message.value = e.value.data.detail;
    } else if (response.value) {
      message.value = JSON.stringify(response.value);
    }

    // router.push(`/hi/${encodeURIComponent(payload.username)}`)
  }
};
</script>

<template>
  <div>
    <NuxtLink to="/user" link flex style="margin-left: -0.3rem" w-18 mb-4>
      <div text-xl i-carbon-chevron-left top-8 />
      <div text-base>Назад</div>
    </NuxtLink>

    <div text-xl text-left font-semibold>
      Войдите или зарегистрируйтесь по номеру телефона
    </div>

    <input
      id="username"
      v-model="payload.username"
      placeholder="Введите номер"
      type="text"
      autocomplete="false"
      @keydown.enter="go"
      input-text w-full
    />

    <input
      id="password"
      v-model="payload.password"
      placeholder="Введите код из смс"
      type="password"
      autocomplete="false"
      @keydown.enter="go"
      input-text w-full
    />

    <button
      :disabled="!(payload.username && payload.password)"
      @click="go"
      btn
      w-full
      h-12
      my-8
    >
      Далее
    </button>

    <NuxtLink to="/" link flex mb-6>Проблемы со входом?</NuxtLink>
  </div>
</template>

<style scoped></style>
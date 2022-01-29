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
    <NuxtLink to="/">
      <div style="margin-left: -0.3rem;" mb-4 font-mono text-left text-green-500 flex>
        <div text-xl i-carbon-chevron-left top-8 />
        <div text-base>Назад</div>
      </div>
    </NuxtLink>

    <div font-mono text-xl text-left>Войдите или зарегистрируйтесь по учетной записи</div>

    <div>
      <input
        id="username"
        v-model="payload.username"
        placeholder="Введите почту или логин"
        type="text"
        autocomplete="false"
        p="x-4 y-2"
        m="t-5"
        w-full
        text-left
        bg="transparent"
        border-2 border-opacity-50 border-green-500 rounded
        outline="none active:none"
        @keydown.enter="go"
      />
    </div>

    <div>
      <input
        id="password"
        v-model="payload.password"
        placeholder="Введите или придумайте пароль"
        type="password"
        autocomplete="false"
        p="x-4 y-2"
        m="t-5"
        w-full
        text-left
        bg="transparent"
        border-2 border-opacity-50 border-green-500 rounded
        outline="none active:none"
        @keydown.enter="go"
      />
    </div>

    <div>
      <button
        btn w-full my-5 h-12
        :disabled="!(payload.username && payload.password)"
        @click="go"
      >
        Далее
      </button>
    </div>

    <div font-mono text-base text-left text-green-500 mb-5>
      <NuxtLink to="/">Забыли пароль?</NuxtLink>
    </div>

    <div op60 text-sm text-left fw300>
    Регистрируясь в сервисе, принимаю условия соглашения и политики конфиденциальности
    </div>

    <div>{{ message }}</div>
  </div>
</template>

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
    <div style="margin-left: -0.3rem" mb-4 w-18>
      <NuxtLink
        to="/user"
        font-mono
        text-left
        text-teal-600
        flex
        no-underline
        hover:underline
        decoration-teal-600
        underline-offset-3
      >
        <div text-xl i-carbon-chevron-left top-8 />
        <div text-base>Назад</div>
      </NuxtLink>
    </div>

    <div text-xl text-left font-semibold>
      Войдите или зарегистрируйтесь по имени пользователя
    </div>

    <div>
      <input
        id="username"
        v-model="payload.username"
        placeholder="Введите логин"
        type="text"
        autocomplete="false"
        bg-transparent
        w-full
        text-left
        px-4
        py-2
        mt-5
        border-1
        border-gray-500
        border-opacity-50
        focus:border-teal-600
        rounded
        outline-none
        active:outline-none
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
        bg-transparent
        w-full
        text-left
        px-4
        py-2
        mt-5
        border-1
        border-gray-500
        border-opacity-50
        focus:border-teal-600
        rounded
        outline-none
        active:outline-none
        @keydown.enter="go"
      />
    </div>

    <div>
      <button
        btn
        w-full
        my-8
        h-12
        :disabled="!(payload.username && payload.password)"
        @click="go"
      >
        Далее
      </button>
    </div>

    <div font-mono text-base text-left text-teal-600 mb-4>
      <NuxtLink to="/" no-underline hover:underline decoration-teal-600 underline-offset-3
        >Забыли пароль?</NuxtLink
      >
    </div>
  </div>
</template>

<template>
  <div v-if="needLogin">
    <div>
      <Input
        names="E-mail"
        placeholders="ex) kream@kream.co.kr"
        v-model="data.value.email"
        :valids="data.valid.emailHasError"
        :passwords="false"
      />
    </div>
    <div>
      <Input
        names="비밀번호"
        placeholders="영문, 숫자, 특수문자 조합 8-16자"
        v-model="data.value.password"
        :passwords="true"
        :valids="data.valid.passwordHasError"
      />
    </div>
    <div>
      <button type="button" @click="login()">Login</button>
    </div>
    <div>
      <a href="signup">
        <p>signup</p>
      </a>
    </div>
  </div>
</template>

<script>
import Input from "../components/signup/Input.vue";
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import {useRouter} from "vue-router";

export default {
  components: {
    Input,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const data = {
      value: {
        email: "",
        password: "",
      },
      valid: {
        emailHasError: true,
        passwordHasError: true,
      },
    };

    const needLogin = computed(() => {
      console.log(store.getters["auth/needLogin"]);
      return store.getters["auth/needLogin"];
    });

    function checkAll() {
      if (!data.valid.emailHasError || !data.valid.passwordHasError) {
        alert("다시 입력하시오.");
        return;
      }
      return true;
    }

    async function login() {
      try {
        await store.dispatch("auth/login", {
          email: this.data.value.email,
          password: this.data.value.password,
        });
        router.push("/");
      } catch (err) {
        console.log(err);
      }
    }
    return {
      data,
      needLogin,
      checkAll,
      login,
    };
  },
};
</script>

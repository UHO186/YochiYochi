<template>
  <header>
    <h1>YochiYochi</h1>
    <div>
      <ul>
        <li><router-link to="/">홈</router-link></li>
        <li><router-link to="/community">자유게시판</router-link></li>
        <li><router-link to="/qna">QnA</router-link></li>
        <li><router-link to="/freeboard">최신글</router-link></li>
        <li><router-link to="/draw">그림그리기</router-link></li>
        <li><router-link to="/rainscore">산성비게임</router-link></li>
        <li><router-link to="/cardmemory">카드기억게임</router-link></li>
        <li><router-link to="/picturesort">그림분류게임</router-link></li>
        <li v-if="!needLogin" @click="logout">logout</li>
        <li v-else><router-link to="/login">login</router-link></li>
      </ul>
    </div>
  </header>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import {useRouter} from "vue-router";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    // computed 속성으로 needLogin 값을 가져옴
    const needLogin = computed(() => {
      return store.getters["auth/needLogin"];
    });

    // logout 액션 실행 함수
    const logout = () => {

      store.dispatch("auth/logout");
      router.push("/")
    };

    return {
      needLogin,
      logout,
    };
  },
};
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
}

ul {
  display: flex;
}

li {
  margin-left: 1rem;
  list-style: none;
}

li>a {
  color: black;
}
</style>

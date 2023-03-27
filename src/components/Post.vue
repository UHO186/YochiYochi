<template>
  <div>
    <div>
      <h3>글 상세보기</h3>
      <div v-if="post">
        <h1>{{ post[0].post_title }}</h1>
        {{ post[0].post_content }}
      </div>
    </div>
    <div>
      <button>수정</button>
      <button>삭제</button>
    </div>
    <div>
      <h3>댓글 작성</h3>
      <Writeform placeholders="댓글" v-model="comment" />
      <button @click="postComment()">작성</button>
      <h6>댓글</h6>
      <input :placeholder="comments" disabled />
      <button @click="delComment()">삭제</button>
    </div>
    <tr v-for="(row, idx) in post[1]" :key="idx">
      <td class="txt_left">{{ row.comment }}||</td>
      <td>{{ row.users.name }}||</td>
      <td>{{ row.created_at.substring(0, 10) }}||</td>
    </tr>
  </div>
</template>

<script>
import Writeform from "./Writeform.vue";
import { useRoute } from "vue-router";
const route = useRoute();
export default {
  data() {
    return {
      post: "",
    };
  },

  mounted() {
    this.show();
  },

  methods: {
    async show() {
      try {
        const showpost = await this.$store.dispatch(
          "community/getPost",
          this.$route.params.id
        );
        this.post = showpost;
        console.log("글 상세", this.post);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

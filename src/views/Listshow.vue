<template>
  <div>
    <h3>글 상세보기</h3>
    <div v-if="post && whatPage === 'community'">
      <h1>{{ post.post_title }}</h1>
      {{ post.post_content }}
    </div>
    <div v-if="post && whatPage === 'qna'">
      <h1>{{ post.qna_title }}</h1>
      {{ post.qna_content }}
    </div>
  </div>
  <div v-show="whatPage === 'community'">
    <button @click="goEditor()">수정</button>
    <button @click="delData()">삭제</button>
  </div>
  <div v-show="whatPage === 'qna'">
    <button @click="goEditor()">수정</button>
    <button @click="delQna()">삭제</button>
  </div>
  <div>
    <h3>{{ whatPage === "community" ? "댓글" : "답변" }}</h3>
    <Writeform v-show="whatPage === 'community'" v-model="comment" /><button
      v-if="whatPage === 'community'"
      @click="postComment()"
    >
      작성
    </button>
    <Writeform v-show="whatPage === 'qna'" v-model="comment" /><button
      v-if="whatPage === 'qna'"
      @click="postAnswer()"
    >
      작성
    </button>

    <h6>{{ whatPage === "community" ? "댓글" : "답변" }}</h6>
    <div v-if="whatPage === 'community'">
      <div v-for="c in comments" v-bind:key="c">
        <span>{{ "작성자 : " + c.users.name }}</span
        ><input
          v-if="whatPage === 'community'"
          :placeholder="c.comment"
          disabled
        /><button @click="delComment(c)">삭제</button>
      </div>
    </div>

    <div v-if="whatPage === 'qna'">
      <div v-for="a in answer" v-bind:key="a">
        <span>{{ "작성자 : " + a }}</span>
        <input v-if="whatPage === 'qna'" :placeholder="a" disabled />
        <button @click="delComment(a)">삭제</button>
      </div>
    </div>
  </div>
</template>

<script>
import Writeform from "../components/write/Writeform.vue";
import Listshowdetail from "../components/detail/Listshowdetail.vue";

export default {
  data() {
    return {
      post: "",
      comment: "",
      comments: "",

      whatPage: this.$route.path.substring(
        this.$route.path.indexOf("/") + 1,
        this.$route.path.indexOf("/", this.$route.path.indexOf("/") + 1)
      ),
    };
  },
  components: {
    Listshowdetail,
    Writeform,
  },
  mounted() {
    if (this.whatPage === "community") {
      this.getData();
    } else {
      this.getQna();
    }
  },
  methods: {
    goEditor() {
      location.href =
        "http://localhost:4000/" +
        this.whatPage +
        "/" +
        this.$route.params.id +
        "/editor";
    },
    async getData() {
      try {
        const postlist = await this.$store.dispatch(
          "community/getPost",
          this.$route.params.id
        );
        this.post = postlist[0];
        this.comments = postlist[1];
      } catch (err) {
        console.log(err);
      }
    },
    async getQna() {
      try {
        const postlist = await this.$store.dispatch(
          "qna/getQna",
          this.$route.params.id
        );

        this.post = postlist[0];
        this.answer = postlist[1];
        console.log(this.answer);
      } catch (err) {
        console.log(err);
      }
    },
    async delData() {
      const ch = confirm("정말 삭제하시겠습니까?");
      if (ch) {
        try {
          const postlist = await this.$store.dispatch(
            "community/deletePost",
            this.$route.params.id
          );
        } catch (err) {
          console.log(err);
        }
      }
    },
    async delQna() {
      const ch = confirm("정말 삭제하시겠습니까?");
      if (ch) {
        try {
          await this.$store.dispatch("qna/deleteQna", this.$route.params.id);
        } catch (err) {
          console.log(err);
        }
      }
    },
    async postComment() {
      try {
        await this.$store.dispatch("community/postComment", {
          post_id: this.$route.params.id,
          comment: this.comment,
        });
        this.$router.push("/community/" + this.$route.params.id);
      } catch (err) {
        console.log(err);
      }
    },
    async postAnswer() {
      try {
        await this.$store.dispatch("qna/postAnswer", {
          qna_id: this.$route.params.id,
          comment: this.comment,
        });
        this.$router.push("/qna/" + this.$route.params.id);
      } catch (err) {
        console.log(err);
      }
    },
    async delComment(c) {
      const ch = confirm("정말 삭제하시겠습니까?");
      console.log(this.comments);
      if (ch) {
        try {
          await this.$store.dispatch("community/deleteComment", c.id);
          this.$router.push("/community/" + this.$route.params.id);
        } catch (err) {
          console.log(err);
        }
      }
    },
    async delAnswer(c) {
      const ch = confirm("정말 삭제하시겠습니까?");
      console.log(this.comments);
      if (ch) {
        try {
          await this.$store.dispatch("qna/deleteAnswer", a.id);
          this.$router.push("/qna/" + this.$route.params.id);
        } catch (err) {
          console.log(err);
        }
      }
    },
  },
};
</script>

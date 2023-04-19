<template>
    <div>
        <!-- {{ this.$store.state.auth.needAdmin }}
        {{ this.$store.state }} -->
        <h3 class="display-3">글 상세보기</h3>
        <div v-if="post">
            <input class="form-control mb-2 w-50" :value="post.post_title || post.qna_title"
                aria-label="Disabled input example" disabled readonly />
            <textarea class="form-control mb-2" :value="post.post_content || post.qna_content"
                aria-label="Disabled input example" disabled readonly />
        </div>
    </div>

    <div class="d-flex justify-content-center mb-3"
        v-if="post && post.users && (!this.$store.state.auth.needAdmin || post.users.name === this.user)">
        <button class="btn btn-outline-secondary" @click="goEditor()">수정</button>
        <button class="btn btn-outline-secondary" @click="whatPage === 'community' ? deletePost() : deleteQna()">삭제</button>
    </div>
    <div class="list-container">
        <div class="row justify-content-center">
            <Writeform class="w-50" v-model="comment"
                v-show="whatPage === 'community' || (whatPage === 'qna' && !this.$store.state.auth.needAdmin)"
                :names="whatPage === 'community' ? '댓글' : '답변'" />

        </div>
        <button v-if="whatPage === 'community' || (!this.$store.state.auth.needAdmin && whatPage === 'qna')"
            class="btn btn-outline-secondary mb-3"
            @click="whatPage === 'community' ? postComment() : postAnswer()">작성</button>
        <h3>{{ whatPage === "community" ? "댓글" : "답변" }}</h3>
        <div class="d-flex flex-column align-items-center">
            <div class="input-group mb-3 w-50" v-for="comment in comments" :key="comment.id">
                <span class="input-group-text">{{ "작성자 : " + comment.users.name }}</span>
                <input class="form-control" :placeholder="comment.comment" disabled />
                <button v-if="!this.$store.state.auth.needAdmin || comment.users.name === this.$store.state.user"
                    class="btn btn-outline-secondary" @click="delComment(comment)">삭제</button>
            </div>
        </div>
        <div class="d-flex flex-column align-items-center" v-if="whatPage === 'qna'">
            <div class="input-group mb-3 w-50" v-for="a in answer" :key="answer.id">
                <span class="input-group-text">답변</span>
                <input class="form-control" :placeholder="a.comment" disabled />
                <button v-if="!this.$store.state.auth.needAdmin" class="btn btn-outline-secondary"
                    @click="delAnswer(a)">삭제</button>
            </div>
        </div>
    </div>
</template>

<script>
import Writeform from "../components/write/Writeform.vue";
import Listshowdetail from "../components/detail/Listshowdetail.vue";
import { mapGetters, mapState } from 'vuex'

export default {
    data() {
        return {
            post: "",
            comment: "",
            comments: "",
            answer: "",

            whatPage: this.$route.path.substring(
                this.$route.path.indexOf("/") + 1,
                this.$route.path.indexOf("/", this.$route.path.indexOf("/") + 1)
            ),
        };
    },
    computed: {
        ...mapGetters(["user"])
    },
    components: {
        Listshowdetail,
        Writeform,
    },
    mounted() {
        this.someMethod()
        if (this.whatPage === "community") {
            this.getData();
        } else {
            this.getQna();
        }
    },
    methods: {
        someMethod() {
            this.$store.dispatch("setUser");
        },
        goEditor() {
            this.$router.push(`/${this.whatPage}/${this.$route.params.id}/editor`);
        },

        async getData() {
            const [post, comments] = await this.$store.dispatch(`${this.whatPage}/getPost`, this.$route.params.id).catch(console.log);
            this.post = post;
            this.comments = comments;
        },

        async getQna() {
            const [post, answer] = await this.$store.dispatch('qna/getQna', this.$route.params.id).catch(console.log);
            this.post = post;
            this.answer = answer;
            console.log(this.answer);
        },

        async deletePost() {
            if (confirm("정말 삭제하시겠습니까?")) {
                await this.$store.dispatch(`${this.whatPage}/deletePost`, this.$route.params.id).catch(console.log);
                this.$router.push(`/${this.whatPage}`);
            }
        },
        async deleteQna() {
            if (confirm("정말 삭제하시겠습니까?")) {
                await this.$store.dispatch(`${this.whatPage}/deleteQna`, this.$route.params.id).catch(console.log);
                this.$router.push(`/${this.whatPage}`);
            }
        },

        async postComment() {
            if (this.comment) {
                await this.$store.dispatch('community/postComment', { post_id: this.$route.params.id, comment: this.comment }).catch(console.log);
                this.$router.go(0);
            } else {
                alert('빈칸을 채워주세요')
            }
        },

        async postAnswer() {
            if (this.comment) {
                await this.$store.dispatch('qna/postAnswer', { qna_id: this.$route.params.id, comment: this.comment }).catch(console.log);
                this.$router.go(0);
            } else {
                alert('빈칸을 채워주세요')
            }
        },

        async delComment(comment) {
            if (confirm("정말 삭제하시겠습니까?")) {
                await this.$store.dispatch('community/deleteComment', comment.id).catch(console.log);
                this.$router.go(0);
            }
        },

        async delAnswer(answer) {
            if (confirm("정말 삭제하시겠습니까?")) {
                await this.$store.dispatch('qna/deleteAnswer', answer.id).catch(console.log);
                this.$router.go(0);
            }
        },
    },
};
</script>

<style>
textarea {
    width: 100%;
    height: 20em;
    border: none;
    resize: none;
}
</style>
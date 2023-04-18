<template>
    <div>
        <h3 class="display-3">글 상세보기</h3>
        <div v-if="post">
            <input class="form-control mb-2 w-50" type="text" :value="post.post_title" v-if="whatPage === 'community'"
                aria-label="Disabled input example" disabled readonly />
            <input class="form-control mb-2 w-50" type="text" :value="post.qna_title" v-if="whatPage === 'qna'"
                aria-label="Disabled input example" disabled readonly />
            <textarea class="form-control mb-2" type="text" :value="post.post_content" v-if="whatPage === 'community'"
                aria-label="Disabled input example" disabled readonly />
            <textarea class="form-control mb-2" type="text" :value="post.qna_content" v-if="whatPage === 'qna'"
                aria-label="Disabled input example" disabled readonly />
        </div>
    </div>

    <div v-show="whatPage === 'community' || whatPage === 'qna'">
        <button class="btn btn-outline-secondary mb-3" @click="goEditor()">수정</button>
        <button class="btn btn-outline-secondary mb-3" v-if="whatPage === 'community'" @click="deletePost()">삭제</button>
        <button class="btn btn-outline-secondary mb-3" v-if="whatPage === 'qna'" @click="deleteQna()">삭제</button>
    </div>

    <div class="list-container">
        <div class="row justify-content-center">
            <Writeform class="w-50" v-model="comment" v-show="whatPage === 'community' || whatPage === 'qna'"
                :names="whatPage === 'community' ? '댓글' : '답변'" />
        </div>
        <button class="btn btn-outline-secondary mb-3"
            @click="whatPage === 'community' ? postComment() : postAnswer()">작성</button>
        <h3>{{ whatPage === "community" ? "댓글" : "답변" }}</h3>
        <div v-if="whatPage === 'community'" class="d-flex flex-column align-items-center">
            <div class="input-group mb-3 w-50" v-for="c in comments" v-bind:key="c">
                <span class="input-group-text">{{ "작성자 : " + c.users.name }}</span>
                <input class="form-control" :placeholder="c.comment" disabled />
                <button class="btn btn-outline-secondary" @click="delComment(c)">삭제</button>
            </div>
        </div>
        <div v-if="whatPage === 'qna'" class="d-flex flex-column align-items-center">
            <div class="input-group mb-3 w-50" v-for="a in answer" v-bind:key="a">
                <span class="input-group-text">답변</span>
                <input class="form-control" :placeholder="a.comment" disabled />
                <button class="btn btn-outline-secondary" @click="delAnswer(a, adminName)">삭제</button>
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
            answer: "",

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
<template>
    <div>
        <h3>글 상세보기</h3>
        <div v-if="post">
            <h1 v-if="whatPage === 'community'">{{ post.post_title }}</h1>
            <h1 v-if="whatPage === 'qna'">{{ post.qna_title }}</h1>
            <p v-if="whatPage === 'community'">{{ post.post_content }}</p>
            <p v-if="whatPage === 'qna'">{{ post.qna_content }}</p>
        </div>
    </div>

    <div v-show="whatPage === 'community' || whatPage === 'qna'">
        <button @click="goEditor()">수정</button>
        <button v-if="whatPage === 'community'" @click="delData()">삭제</button>
        <button v-if="whatPage === 'qna'" @click="delQna()">삭제</button>
    </div>

    <div>
        <h3>{{ whatPage === "community" ? "댓글" : "답변" }}</h3>
        <Writeform v-model="comment" v-show="whatPage === 'community' || whatPage === 'qna'" />
        <button @click="whatPage === 'community' ? postComment() : postAnswer()">작성</button>
        <div v-if="whatPage === 'community'">
            <div v-for="c in comments" v-bind:key="c">
                <span>{{ "작성자 : " + c.users.name }}</span>
                <input :placeholder="c.comment" disabled />
                <button @click="delComment(c)">삭제</button>
            </div>
        </div>
        <div v-if="whatPage === 'qna'">
            <div v-for="a in answer" v-bind:key="a">
                <span>{{ "작성자 : " + a.qna_id }}</span>
                <input :placeholder="a.comment" disabled />
                <button @click="delAnswer(a, adminName)">삭제</button>
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

        async postComment() {
            await this.$store.dispatch('community/postComment', { post_id: this.$route.params.id, comment: this.comment }).catch(console.log);
            this.$router.go(0);
        },

        async postAnswer() {
            await this.$store.dispatch('qna/postAnswer', { qna_id: this.$route.params.id, comment: this.comment }).catch(console.log);
            this.$router.go(0);
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

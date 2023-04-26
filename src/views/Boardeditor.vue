<template>
    <div>
        <h3>수정</h3>
        <Writeform names="제목" :placeholders="value.title" v-model="value.title" />
        <Writeform names="내용" :placeholders="value.textdetail" v-model="value.textdetail" />
    </div>
    <button class="btn btn-outline-secondary mb-3" v-if="whatPage === 'community'" @click="postBoardEditor()">
        수정
    </button>
    <button class="btn btn-outline-secondary mb-3" v-if="whatPage === 'qna'" @click="postQnaEditor()">수정</button>
</template>

<script>
import Writeform from "../components/write/Writeform.vue";

export default {
    data() {
        return {
            value: {
                title: "",
                textdetail: "",
            },
            whatPage: this.$route.path.substring(
                this.$route.path.indexOf("/") + 1,
                this.$route.path.indexOf("/", this.$route.path.indexOf("/") + 1)
            ),
        };
    },
    components: {
        Writeform,
    },
    mounted() {
        if (this.whatPage === "community") {
            this.getBoardEditor();
        } else {
            this.getQnaEditor();
        }
    },
    methods: {
        async getBoardEditor() {
            try {
                const postlist = await this.$store.dispatch(
                    "community/getPost",
                    this.$route.params.id
                );
                console.log(postlist[0]);
                this.value.title = postlist[0].post_title;
                this.value.textdetail = postlist[0].post_content;
            } catch (err) {
                console.error(err);
            }
        },
        async getQnaEditor() {
            try {
                const postlist = await this.$store.dispatch(
                    "qna/getQna",
                    this.$route.params.id
                );
                console.log("qna", postlist);
                this.value.title = postlist[0].qna_title;
                this.value.textdetail = postlist[0].qna_content;
            } catch (err) {
                console.error(err);
            }
        },
        async postBoardEditor() {
            const ch = confirm("정말 수정하실건가요?");
            if (ch) {
                try {
                    const postlist = await this.$store.dispatch("community/updatePost", {
                        postId: this.$route.params.id,
                        postData: {
                            post_title: this.value.title,
                            post_content: this.value.textdetail,
                        },
                    });
                    this.$router.push("/community/" + this.$route.params.id);
                } catch (err) {
                    console.error(err);
                }
            }
        },
        async postQnaEditor() {
            const ch = confirm("정말 수정하실건가요?");
            if (ch) {
                try {
                    const postlist = await this.$store.dispatch("qna/updateQna", {
                        postId: this.$route.params.id,
                        postData: {
                            qna_title: this.value.title,
                            qna_content: this.value.textdetail,
                        },
                    });
                    this.$router.push("/qna/" + this.$route.params.id);
                } catch (err) {
                    console.error(err);
                }
            }
        },
    },
};
</script>

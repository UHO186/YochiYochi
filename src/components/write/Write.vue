<template>
    <div>
        <h3>게시글 올리기</h3>

        <Writeform names="제목은 18글자까지입니다." placeholders="제목" v-model="value.title" :valids="valid.titleHasError"
            max-length="18" />
        <Writeform names="내용은 180자까지입니다." placeholders="내용" v-model="value.textdetail" :valids="valid.detailHasError"
            max-length="180" />
        <button
            v-if="this.$route.path.substring(this.$route.path.indexOf('/') + 1, this.$route.path.indexOf('/', this.$route.path.indexOf('/') + 1)) === 'community'"
            @click="postStore()">게시</button>
        <button
            v-if="this.$route.path.substring(this.$route.path.indexOf('/') + 1, this.$route.path.indexOf('/', this.$route.path.indexOf('/') + 1)) === 'qna'"
            @click="qnaStore()">게시</button>
    </div>
</template>

<script>
import Writeform from "../write/Writeform.vue";
import { useStore } from "vuex";
const store = useStore();

export default {
    data() {
        return {
            value: {
                title: "",
                textdetail: "",
                category: 1
            },
            valid: {
                nameHasError: false,
                titleHasError: false,
                detailHasError: false,
            },
        };
    },
    components: {
        Writeform,
    },
    methods: {
        checkNull() {
            if (!this.value.name || !this.value.title || !this.value.textdetail) {
                alert("빈칸을 채워주세요.");
                return false;
            }
            return true;
        },

        async postStore() {
            if (!this.value.title || !this.value.textdetail) {
                alert("빈칸을 채워주세요.");
                return
            }
            try {
                const rs = await this.$store
                    .dispatch("community/createPost", {
                        post_title: this.value.title,
                        post_content: this.value.textdetail,
                    })
                    .then(this.$router.push({ name: "community" }));
            } catch (err) {
                console.log(err);
            }
        },
        async qnaStore() {
            if (!this.value.title || !this.value.textdetail) {
                alert("빈칸을 채워주세요.");
                return
            }
            try {
                const rs = await this.$store
                    .dispatch("qna/createQna", {
                        qna_title: this.value.title,
                        qna_content: this.value.textdetail,
                        category: this.value.category,
                    })
                    .then(this.$router.push({ name: "qna" }));
            } catch (err) {
                console.log(err);
            }
        }
    },

};
</script>

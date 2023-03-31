<template>
    <div>
        <h2>QnA 게시판</h2>

        <Qnapage :list-array="qnalist" what-page="/qna/" :pageNum="0" />

        <div>
            <button @click="goWrite()">등록</button>
        </div>
    </div>
</template>

<script>
import Qnapage from '../freeboard/Boardpage.vue'

export default {
    data() {
        return {
            qnalist: []
        }
    },
    components: {
        Qnapage
    },
    mounted() {
        this.getData()
    },
    methods: {
        goWrite() {
            location.href = '/qna/write'
        },
        async getData() {
            try {
                const postlist = await this.$store.dispatch("qna/fetchQnas", this.$route.params.id);
                this.qnalist = postlist
            } catch (err) {
                console.error(err);
            }
        },
    },
}
</script>
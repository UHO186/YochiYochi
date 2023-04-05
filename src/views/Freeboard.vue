<template>
    <div id="community">
        <b>자유게시판</b>
        <Board Url="/community/" :boards="getCList" />
    </div>
    <div id="resources">
        <b>학습정보게시판</b>
        <Board Url="/qna/" :boards="getQList" />
    </div>
</template>

<script>
import Board from "../components/freeboard/Board.vue";

export default {
    data() {
        return {
            getCList: [],
            getQList: [],
        };
    },
    components: {
        Board,
    },
    mounted() {
        this.getCData();
        this.getQData();
    },
    methods: {
        async getCData() {
            try {
                const getCList = await this.$store.dispatch("community/fetchPosts");
                console.log(getCList);
            } catch (err) {
                console.error(err);
            }
        },
        async getQData() {
            try {
                const getQList = await this.$store.dispatch("qna/fetchQnas");
                console.log(getQList);
            } catch (err) {
                console.error(err);
            }
        },
    },
};
</script>

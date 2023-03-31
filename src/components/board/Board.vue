<template>
    <div>
        <h2>게시판 리스트</h2>

        <Boardpage :list-array="postlist" what-page="/community/" :pageNum="0" />

        <div>
            <button @click="goWrite()">등록</button>
        </div>
    </div>
</template>
  
<script>
import Boardpage from '../freeboard/Boardpage.vue';

export default {
    data() {
        //변수생성
        return {
            postlist: [],
        };
    },
    components: {
        Boardpage
    },
    mounted() {
        this.getData();
    },
    methods: {
        goWrite() {
            location.href = '/community/write'
        },
        async getData() {
            try {
                const postlist = await this.$store.dispatch("community/fetchPosts");
                this.postlist = postlist;
            } catch (err) {
                console.log(err);
            }
        },
    },
};
</script>
  
<style></style>
  
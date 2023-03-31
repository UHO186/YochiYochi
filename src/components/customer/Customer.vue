<template>
    <div>
        <div>
            <h3>공지사항</h3>
            <Notice :notices="notice" />
        </div>
        <div>
            <h3>자주 묻는 질문</h3>
            <Faq />
        </div>
        <div id="qna">
            <h3>QnA</h3>
            <Boardpage :list-array="pageArray" what-page="/qna/" :pageNum="0" />
        </div>
    </div>
</template>

<script>
import Notice from './Notice.vue'
import Boardpage from '../freeboard/Boardpage.vue'
import Faq from './Faq.vue'

export default {
    data() {
        return {
            pageArray: [],
            notice: []
        }
    },
    components: {
        Notice,
        Boardpage,
        Faq
    },
    mounted() {
        this.getData()
    },
    methods: {
        async getData() {
            await this.axios
                .get("http://localhost/api/community")
                .then((res) => {
                    this.pageArray = res.data;
                })
                .catch((error) => {
                    console.error(error)
                })
                .finally(() => {
                    console.log()
                })
        },
        async getNotice() {
            await this.axios
                .get("http://localhost/api/notice")
                .then((res) => {
                    this.notice = res.data;
                })
                .catch((error) => {
                    console.error(error)
                })
                .finally(() => {
                    console.log()
                })
        }
    }
}
</script>
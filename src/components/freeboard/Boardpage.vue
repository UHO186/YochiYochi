<template>
    <div>
        <table>
            <tr>
                <th>NO</th>
                <th>TITLE</th>
                <th>CONTENT</th>
                <th>WRITTER</th>
                <th v-show="whatPage == '/community/'">VIEWS</th>
                <th v-show="whatPage == '/qna/'">ANSWER</th>
                <th>CREATE_AT</th>
            </tr>
            <tr v-for="p in paginatedData">
                <td>{{ p.id }}</td>
                <a v-show="whatPage == '/community/'" :href="whatPage + p.id">
                    <td>{{ p.post_title }}</td>
                </a>
                <td v-show="whatPage == '/community/'">{{ p.post_content }}</td>
                <a v-show="whatPage == '/qna/'" :href="whatPage + p.id">
                    <td>{{ p.qna_title }}</td>
                </a>
                <td v-show="whatPage == '/qna/'">{{ p.qna_content }}</td>
                <td>{{ p.users.name }}</td>
                <td v-show="whatPage == '/community/'">{{ p.views }}</td>
                <td v-show="whatPage == '/qna/'">{{ p.answer }}</td>
                <td>{{ p.created_at.substring(0, 10) }}</td>
            </tr>
        </table>
        <div v-show="pageCount => 2" class="btn-cover">
            <button :disabled="this.pageNum === 0" @click="prevPage" class="page-btn">이전</button>
            <span class="page-count">{{ this.pageNum + 1 }} / {{ pageCount }} 페이지</span>
            <button :disabled="this.pageNum >= pageCount - 1" @click="nextPage" class="page-btn">다음</button>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            pageNum: 0
        }
    },
    props: {
        listArray: {
            type: Array,
            required: true
        },
        pageSize: {
            type: Number,
            required: false,
            default: 10
        },
        whatPage: String,
    },
    methods: {
        nextPage() {
            this.pageNum += 1;
        },
        prevPage() {
            this.pageNum -= 1;
        }
    },
    computed: {
        pageCount() {
            let listLeng = this.listArray.length,
                listSize = this.pageSize,
                page = Math.floor(listLeng / listSize);
            if (listLeng % listSize > 0) page += 1;

            return page;
        },
        paginatedData() {
            const start = this.pageNum * this.pageSize,
                end = start + this.pageSize;
            return this.listArray.slice(start, end);
        }
    }
}
</script>
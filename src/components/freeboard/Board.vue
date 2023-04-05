<template>
    <div v-if="Url === '/community/'" v-for="board in pageData">
        <a :href="Url + board.id" class="card board-flex-center" style="text-decoration-line: none">
            <h1 class="card-title">{{ board.post_title }}</h1>
            <h8 class="card-subtitle mb-2 text-muted">{{ board.created_at.substring(0, 10) }}</h8>
            <p class="card-text">{{ board.post_content }}</p>
        </a>
    </div>
    <div v-if="Url === '/qna/'" v-for="board in pageData">
        <a :href="Url + board.id" class="card board-flex-center" style="text-decoration-line: none">
            <h1 class="card-title">{{ board.qna_title }}</h1>
            <h8 class="card-subtitle mb-2 text-muted">{{ board.created_at.substring(0, 10) }}</h8>
            <p class="card-text">{{ board.qna_content }}</p>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        boards: {
            type: Array
        },
        Url: String
    },
    computed: {
        pageData() {
            console.log('시작');
            return this.boards.slice(0, 3);
        }
    }
}
</script>

<style>
.board-flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>